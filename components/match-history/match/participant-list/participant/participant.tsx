import Link from 'next/link'
import { ParticipantDto } from "../../../../../interface-lib/match-lib.tsx/match-lib";
import Image from 'next/image'
import {ReactNode} from 'react'

export default function ParticipantItem({participant, team, detailed}: {participant: ParticipantDto, team: string, detailed?: boolean}) {
    const champImageSize:string = !detailed ? "30" : "100"
    const itemImageSize:string = !detailed ? "25" : "50"
    return(
        <Link href={`/summoner/${participant.summonerName}`}>
            <div className={`rounded-xl border-2 border-black cursor-pointer ${team === "red" ? " bg-red-600 " : " bg-blue-600 "}`}>

                <div className="float-left content-center pt-0.5">
                    <Image src={`/static/champions/${participant.championName}.png`} height={champImageSize} width={champImageSize} />    
                </div>
                <span>{participant.summonerName}</span>
                <br />
                <span className="pl-4">{`KDA: ${participant.kills}/${participant.deaths}/${participant.assists}`}</span>
                <div className="mx-auto w-full">
                {
                    [...Array(6)].map((_, itemPos) => (
                        <Image src={`/static/items/${participant[`item${itemPos}`]}.png`} height={itemImageSize} width={itemImageSize} />
                    ))
                }
                {
                    //add detailed summoner information
                }
                </div>
            </div>
        </Link>
    )
}