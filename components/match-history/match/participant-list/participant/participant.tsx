import Link from 'next/link'
import { ParticipantDto } from "../../../../../interface-lib/match-lib.tsx/match-lib";
import Image from 'next/image'
import SummonerSpell from '../../../../spells/summoner-spells/summoner-spells';

export default function ParticipantItem({participant, team, detailed, playerSelector, playerIndex}: {
    playerIndex: number,
    participant: ParticipantDto, 
    team: string, 
    detailed?: boolean,
    playerSelector?: Function
}) {

    const champImageSize:string = !detailed ? "50" : "100"
    const itemImageSize:string = !detailed ? "25" : "50"
    const spellImageSize:string = !detailed ? "25" : "50"
    
    function playerSelection(){
        detailed? playerSelector(playerIndex): ''
    }

    return(
        <div 
            className={`rounded-xl border-2 border-black cursor-pointer ${team === "red" ? " bg-red-600 " : " bg-blue-600 "} flex flex-row`}
            onClick={()=>playerSelection()}
            >
            <div className="flex flex-col w-2/5 justify-center">
                <div className="flex flex-row justify-center">
                    <Image src={`/static/champions/${participant.championName}.png`} height={champImageSize} width={champImageSize} />    
                </div>
                <div className="flex flex-row items-center justify-center">
                    {
                        //DRY but complex
                        [...Array(2)].map((_, index) => (
                            <SummonerSpell
                                spellSize={spellImageSize}
                                spellKey={participant[`summoner${index + 1}Id`]} />
                        ))
                    }
                </div>
            </div>
            <div className="flex flex-col w-full justify-center">
                {
                    //Summoner Info
                }
                <div className="flex flex-row">
                    <span className="w-full text-center">{participant.summonerName}</span>
                </div>
                <div className="flex flex-row">
                    <span className={`w-full text-center ${!detailed ? 'text-sm' : ''} `}>{`KDA: ${participant.kills}/${participant.deaths}/${participant.assists}`}</span>
                </div>
                {
                    //Details
                    !detailed ? "" :
                    <div className="w-full flex flex-row space-x-8 justify-center">
                        <div>
                            <span>
                                {`Gold: ${participant.goldEarned}`}
                            </span>
                        </div>
                        <div>
                            <span>
                                {`CS: ${participant.totalMinionsKilled}`}
                            </span>
                        </div>
                        <div>
                            <span>
                                {`Level: ${participant.champLevel}`}
                            </span>
                        </div>
                    </div>
                }
                <div className="flex flex-row flex-wrap">
                    <div className="flex flex-col w-3/4">
                        <div className="flex flex-row flex-wrap">
                    {
                        //Summoner Items
                        [...Array(6)].map((_, itemPos) => (
                            <div className={`${!detailed ? 'w-1/6' : 'w-1/3'}`}>
                                <Image src={`/static/items/${participant[`item${itemPos}`]}.png`} height={itemImageSize} width={itemImageSize} />
                            </div>
                        ))
                    }
                        </div>
                    </div>
                    <div className="flex flex-col w-1/4">
                        {
                            //Trinket placed seperately
                        }
                        <div className="w-max"><Image src={`/static/items/${participant[`item6`]}.png`} height={itemImageSize} width={itemImageSize} /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}