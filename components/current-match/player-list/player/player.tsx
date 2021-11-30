import { useState, useEffect } from 'react'
import { useRouter } from 'next/router';
import Link from 'next/link'

import { CurrentGameParticipant } from "../../../../interface-lib/match-lib/match-lib";
import SummonerSpell from '../../../spells/summoner-spells/summoner-spells';
import Champion from '../../../champion/champion';
import PlayerDetails from './player-details/player-details';

export default function Player({player, playerIndex, team, playerSelector}: {
    player: CurrentGameParticipant
    playerIndex: number,
    team: string,
    playerSelector: Function
}) {

    const champImageSize:string =  "50"
    const spellImageSize:string =  "25"

    
    const [summonerInfo, setSummonerInfo] = useState({
        name: '',
        profileIconId: '',
        summonerLevel: '',
        rankedQueues: []
    })
    const [error, setError] = useState(false)
    const [loading, setLoading ] = useState(true)

    const router = useRouter()
    const { sid }: { [key: string]: string | string[] } = router.query

    useEffect(() => {
        if(typeof(player) === "undefined") return;
        fetch(`/api/account/${ player.summonerName }`)
            .then(async (resp) => {
                if (resp.status !== 200) return setError(true)  
                const data = await resp.json()
                setSummonerInfo(data)
            })
            .catch(err =>{
                console.log(err);
                setError(true)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [sid, player])

    return(
        <Link href={`/summoner/${player.summonerName}`} passHref>
        <div className={`rounded-xl 
                        border-2 
                        border-black 
                        cursor-pointer 
                        ${ player.summonerName.toLocaleLowerCase() === sid.toLocaleString().toLocaleLowerCase() ?
                         `bg-yellow-300 text-black font-medium` 
                         : team === "red" ? " bg-red-600 " : " bg-blue-600 "} 
                        flex flex-row`}>
            <div className="flex flex-col w-1/5 justify-center">
                <div className="flex flex-row justify-center">
                    <Champion 
                        cid={player.championId}
                        height={champImageSize} 
                        width={champImageSize}
                        />
                </div>
                <div className="flex flex-row items-center justify-center">
                    {
                        //DRY but complex
                        [...Array(2)].map((_, index) => (
                            <SummonerSpell
                                key={index}
                                spellSize={spellImageSize}
                                spellKey={player[`spell${index + 1}Id`]} />
                        ))
                    }
                </div>
            </div>
            <div className="flex flex-col w-full justify-center">
                {
                    //Summoner Info
                }
                <div className="flex flex-row">
                    {!loading?
                        !error ? 
                            <div>
                                <PlayerDetails baseDetails={summonerInfo} rankedDetails={summonerInfo['rankedQueues']} />
                            </div>
                        
                        : <h1>Something went wrong :(</h1> : ''
                    }
                </div>
            </div>
        </div>
        </Link>
    )
}