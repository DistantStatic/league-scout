import { ParticipantDto } from "../../../../../interface-lib/match-lib.tsx/match-lib";

const teamColors = {

}

export default function ParticipantItem({participant, team}: {participant: ParticipantDto, team: string}) {
    return(
        <div className={`rounded-xl border-2 ${team === "red" ? " bg-red-600 " : " bg-blue-600 "}`}>
            <span>{participant.summonerName}</span>            
        </div>
    )
}