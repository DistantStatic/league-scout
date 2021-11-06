import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default function (req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query
    axios({
        method: "GET",
        url: `summoner/v4/summoners/by-name/${id}`
    })
    .then(resp => {
        axios({
            method: "GET",
            url: `match/v5/matches/by-puuid/${resp.data.puuid}/ids?start=0&count=20`
        })
        .then(resp => {
            res.status(200).send(fetchDetails(resp.data))
        })
        .catch(err => {
            console.log(err)
        })
    })
}

function fetchDetails(matches: Array<any>) {
    const dataToReturn = []
    matches.forEach(match => {
        axios({
            method: "GET",
            url: `match/v5/matches/${match}`
        })
        .then(resp => {
            dataToReturn.push(resp.data)
        })
    })
    return dataToReturn
}
