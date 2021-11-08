import Link from 'next/link'
import { ParticipantDto } from "../../../../../interface-lib/match-lib.tsx/match-lib";

export default function ParticipantItem({participant, team}: {participant: ParticipantDto, team: string}) {
    return(
        <Link href={`/summoner/${participant.summonerName}`}>
            <div className={`rounded-xl border-2 border-black cursor-pointer ${team === "red" ? " bg-red-600 " : " bg-blue-600 "}`}>
                <span>{participant.summonerName}</span>            
            </div>
        </Link>
    )
}