import { ParticipantDto } from "../../../../../interface-lib/match-lib/match-lib";
import Image from 'next/image'
import SummonerSpell from '../../../../spells/summoner-spells/summoner-spells';
import SummonerItems from '../../../../items/summoner-items/summoner-items';

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
                                key={index}
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
                            {participant.individualPosition}
                        </div>
                    </div>
                }
                <SummonerItems 
                    participant={participant} 
                    detailed={detailed} 
                    itemImageSize={itemImageSize}
                    />
            </div>
        </div>
    )
}