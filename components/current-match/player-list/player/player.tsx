import { useContext } from 'react'
import Image from 'next/image'

import { CurrentGameParticipant } from "../../../../interface-lib/match-lib/match-lib";
import SummonerSpell from '../../../spells/summoner-spells/summoner-spells';
import { SummonerContext } from '../../../context-providers/summoner-context';
import Champion from '../../../champion/champion';

export default function Player({player, playerIndex, team, playerSelector}: {
    player: CurrentGameParticipant
    playerIndex: number,
    team: string,
    playerSelector: Function
}) {

    const champImageSize:string =  "50"
    const itemImageSize:string =  "25"
    const spellImageSize:string =  "25"
    const [ summoner ] = useContext(SummonerContext)

    console.log(summoner)
    return(
        <div 
            className={`rounded-xl border-2 border-black cursor-pointer ${ player.summonerName.toLocaleLowerCase() == summoner ? `bg-yellow-300 text-black font-medium` : team === "red" ? " bg-red-600 " : " bg-blue-600 "} flex flex-row`}
            onClick={()=>playerSelector()}
            >
            <div className="flex flex-col w-2/5 justify-center">
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
                    <span className="w-full text-center">{player.summonerName}</span>
                </div>
            </div>
        </div>
    )
}