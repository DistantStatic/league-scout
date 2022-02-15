import { Db } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import axios from '../../../axios-instances/summoner';
import { BuiltResponse } from "../../../interface-lib/account/account-lib";
import { connectToDatabase } from "../../../utils/mongodb";

const COLLECTION_NAME = 'summoners'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query
    const { db } = await connectToDatabase()
    if (req.method === "GET") {
        const results = await db
                        .collection(COLLECTION_NAME)
                        .findOne({
                            name: id.toString().replace('/', '').replace('\\', '').replace('\'', '').replace('"', '')
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

async function touchRiot(id: string | string[], res: NextApiResponse, db: Db){
    const requestedSummoner = encodeURIComponent(id.toString())
    
    const summonerResponse = await axios({
        method: 'GET',
        url: `summoner/v4/summoners/by-name/${requestedSummoner}`
    })
    
    if (summonerResponse.status !== 200) return res.status(503).send('Error finding summoner')
    
    const builtResponse: BuiltResponse = {...summonerResponse.data, rankedQueues: []}
    
    const leagueResponse = await axios({
        method: 'GET',
        url: `league/v4/entries/by-summoner/${summonerResponse.data.id}`
    })
    
    builtResponse.rankedQueues = leagueResponse.data
    
    //define update query
    const query = {
        lookup: id.toString()
    }

    const update = {
        $set: {...builtResponse, retrievalDate: new Date(), lookup: id}
    }
    
    const options = {
        upsert: true,
        collation: {
            locale: "en",
            strength: 2
        }
    }
    
    //act on query
    db.collection(COLLECTION_NAME).updateOne(query,update,options)
    res.status(200).json(builtResponse)
}