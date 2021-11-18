import axios from '../../../axios-instances/summoner'
import matchAxios from '../../../axios-instances/match-history'
import { NextApiRequest, NextApiResponse } from "next";

//grabbing X matches at a time to prevent rate limiting
//will change once backend storage of data is implemented
const matchCount: number = 6

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const { id, page }: { [key: string]: string | string[] } = req.query
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
            Promise.all(fetchDetails(resp.data))
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

function fetchDetails(matches: Array<any>) {
    const data = matches.map(match => (
            matchAxios({
                method: "GET",
                url: `match/v5/matches/${match}`
            })
            .then(resp => {
                return resp.data
            })
    ))
    return data
}
