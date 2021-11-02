import { NextApiRequest, NextApiResponse } from "next";
import axios from '../../../axios-instances/summoner';

export default function (req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query
    axios({
        method: 'GET',
        url: `by-name/${id}`
    })
    .then(response => {
        response.data.id
        res.status(200).json(response.data)
    })
    .catch(err => {
        console.log(err)
        res.status(400).send(err)
    })
}