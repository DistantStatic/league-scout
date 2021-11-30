import { NextApiRequest, NextApiResponse } from 'next'
import matchAxios from '../../../axios-instances/current-match'
import summonerAxios from '../../../axios-instances/summoner'

export default function handler(req: NextApiRequest, res: NextApiResponse){
    const { id }: { [key: string]: string | string[] } = req.query

    summonerAxios({
        method: "GET",
        url: `summoner/v4/summoners/by-name/${id}`
    })
    .then(summonerResp => {
        matchAxios({
            method: "GET",
            url: `spectator/v4/active-games/by-summoner/${summonerResp.data.id}`
        })
        .then(matchResp => {
            res.status(matchResp.status).send(matchResp.data)
        })
        .catch(err => {
            console.error(`Match Error: ${err}`)
            res.status(404).send(err)
        })
    })
    .catch(err => {
        console.error(`Summoner Error: ${err}`)
        res.status(400).send(err)
    })
}
