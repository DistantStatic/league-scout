import { NextApiRequest, NextApiResponse } from "next";
import axios from '../../../axios-instances/summoner';
import { BuiltResponse } from "../../../interface-lib/account/account-lib";


export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query
    axios({
        method: 'GET',
        url: `summoner/v4/summoners/by-name/${id}`
    })
    .then(response => {
        let builtResponse: BuiltResponse = {base: response.data, rankedQueues: []}
        axios({
            method: 'GET',
            url: `league/v4/entries/by-summoner/${response.data.id}`
        })
        .then(responseTwo => {
            builtResponse.rankedQueues = responseTwo.data
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