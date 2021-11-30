import axios from '../../../axios-instances/summoner'
import matchAxios from '../../../axios-instances/match-history'
import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from '../../../utils/mongodb';
import { Db } from 'mongodb';

//grabbing X matches at a time to prevent rate limiting
//will change once backend storage of data is implemented
const matchCount: number = 6

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { id, page }: { [key: string]: string | string[] } = req.query
    const { db } = await connectToDatabase()

    axios({
        method: "GET",
        url: `summoner/v4/summoners/by-name/${id}`
    })
    .then(resp => {
        //example: page 5 starts at match #80 ends at 99 (inclusive) therefore page 6 should start at ((6-1) * 20) = 100 if page is not present, start a 0
        //plus negative number guard
        const start = page && (Number(page) > 0) ? (Number(page) - 1) * 20 : 0
        matchAxios({
            method: "GET",
            url: `match/v5/matches/by-puuid/${resp.data.puuid}/ids?start=${start}&count=${matchCount}`
        })
        .then(resp => {
            Promise.all(fetchDetails(resp.data, db))
            .then(data => {
                res.status(200).send(data)
            })
        })
        .catch(err => {
            console.log(`Inner Error: ${err}`)
        })
    })
    .catch(err =>{
        console.log(`Outer Error: ${err}`)
    })
}

function fetchDetails(matches: Array<any>, db: Db) {
    const data = matches.map( async match => {
            console.log(match)
            const results = await db.collection('matches').findOne({
                "metadata.matchId": match.toString()
            })
            if (results) return results
            console.log('match not found locally... touching riot')
            return matchAxios({
                method: "GET",
                url: `match/v5/matches/${match}`
            })
            .then( async resp => {
                const insertResult = await db.collection('matches').insertOne(resp.data)
                return resp.data
            })
        })
    return data
}
