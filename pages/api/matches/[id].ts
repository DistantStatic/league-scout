import axios from '../../../axios-instances/summoner'
import matchAxios from '../../../axios-instances/match-history'
import { NextApiRequest, NextApiResponse } from "next";

export default function (req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query
    axios({
        method: "GET",
        url: `summoner/v4/summoners/by-name/${id}`
    })
    .then(resp => {
        console.log(`Puuid: ${resp.data.puuid}`)
        matchAxios({
            method: "GET",
            url: `match/v5/matches/by-puuid/${resp.data.puuid}/ids?start=0&count=20`
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
