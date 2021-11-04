import { NextApiRequest, NextApiResponse } from "next";
import axios from '../../../axios-instances/summoner';

interface BuiltResponse {
    base: AccountResponse,
    rankedSolo: RankedResponse | null ,
    rankedFlex: RankedResponse | null
}

interface AccountResponse {
    id: string,
    accountId: string,
    puuid: string,
    name: string,
    profileIconId: number,
    revisionDate: number,
    summonerLevel: number
}

interface RankedResponse {
    leagueId: string,
    queueType: string,
    tier: string,
    rank: string,
    summonerId: string,
    summonerName: string,
    leaguePoints: number,
    wins: number,
    losses: number,
    veteran: boolean,
    inactive: boolean,
    freshBlood: boolean,
    hotStreak: boolean
}

export default function (req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query
    axios({
        method: 'GET',
        url: `summoner/v4/summoners/by-name/${id}`
    })
    .then(response => {
        let builtResponse: BuiltResponse = {base: response.data, rankedSolo: null, rankedFlex: null}
        axios({
            method: 'GET',
            url: `league/v4/entries/by-summoner/${response.data.id}`
        })
        .then(responseTwo => {
            if (responseTwo.data.length > 0) builtResponse.rankedSolo = responseTwo.data[0]
            if (responseTwo.data.length > 1) builtResponse.rankedFlex = responseTwo.data[1]
            res.status(200).json(builtResponse)
        })
        .catch(err => {
            console.log(`error inner: ${err}`);
            
            res.status(400).send(err)
        })
    })
    .catch(err => {
        console.log(`error outer: ${err}`)
        res.status(400).send(err)
    })
}