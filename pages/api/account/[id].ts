import { Db } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import axios from '../../../axios-instances/summoner';
import { BuiltResponse } from "../../../interface-lib/account/account-lib";
import { connectToDatabase } from "../../../utils/mongodb";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query
    const { db } = await connectToDatabase()
    
    if (req.method === "GET") {
        const results = await db
                        .collection('summoner')
                        .findOne({
                            name: id.toString()
                        },
                        {
                            collation: {
                                locale: "en",
                                strength: 2
                            }
                        })
        const now = new Date()
        //if results are older than a day, automatically touch riot api
        if(results && (results.retrievalDate - Date.now() < (86400000)) ) {
            res.status(200).send(results)
        } else {
            console.log('touching riot')
            touchRiot(id, res, db)
        }
    }

    if (req.method === "PUT") {
        console.log("updating data")
        touchRiot(id, res, db)
    }
}

function touchRiot(id: string | string[], res: NextApiResponse, db: Db){
    axios({
        method: 'GET',
        url: `summoner/v4/summoners/by-name/${id}`
    })
    .then(response => {
        if (response.status !== 200) return res.status(503).send('Error finding summoner')
        const builtResponse: BuiltResponse = {...response.data, rankedQueues: []}
        axios({
            method: 'GET',
            url: `league/v4/entries/by-summoner/${response.data.id}`
        })
        .then(responseTwo => {
            builtResponse.rankedQueues = responseTwo.data
            
            //define update query
            const query = {
                name: id.toString()
            }

            const update = {
                $set: {...builtResponse, retrievalDate: new Date()}
            }
            const options = {
                upsert: true,
                collation: {
                    locale: "en",
                    strength: 2
                }
            }
            
            //act on query
            db.collection('summoner').updateOne(query,update,options)
 
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