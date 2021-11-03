import { NextApiRequest, NextApiResponse } from "next";
import axios from '../../../axios-instances/summoner';

export default function (req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query
    axios({
        method: 'GET',
        url: `summoner/v4/summoners/by-name/${id}`
    })
    .then(response => {
        axios({
            method: 'GET',
            url: `league/v4/entries/by-summoner/${response.data.id}`
        })
        .then(responseTwo => {
            res.status(200).json({...response.data, ...responseTwo.data})
        })
        .catch(err => {
            res.status(400).send(err)
        })
    })
    .catch(err => {
        res.status(400).send(err)
    })
}