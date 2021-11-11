import { ParticipantDto } from "../../../../interface-lib/match-lib.tsx/match-lib";
import ParticipantItem from "./participant/participant";

export default function ParticipantList({participants, detailed, redWin, playerSelector}: {
    participants: Array<ParticipantDto>, 
    detailed?: boolean, 
    redWin: boolean,
    playerSelector?: Function
}){

    return(
        <div className="flex w-full space-x-1">
            <div className={`container w-1/2 flex-col ${ redWin ? "bg-green-400" : "bg-red-800"} bg-opacity-40 text-center rounded-xl `}>
                <span className="text-center text-lg">{redWin ? "Won" : "Lost"}</span>
                    <div className="flex-col space-y-2">
                    {
                        participants.slice(0, 5).map((participant, index) =>(
                            <ParticipantItem 
                                key={index}
                                playerIndex={index}
                                participant={participant} 
                                team={"red"} 
                                detailed={detailed}
                                playerSelector={playerSelector}
                                />
                        ))
                    }
                    </div>
            </div>
            <div className={`container w-1/2 flex-col ${ !redWin ? "bg-green-400" : "bg-red-800"} bg-opacity-40 text-center rounded-xl `}>
                <span className="text-center text-lg">{!redWin ? "Won" : "Lost"}</span>
                <div className="flex-col space-y-2">
                    {
                        participants.slice(5, 10).map((participant, index) =>(
                            <ParticipantItem 
                                key={index + 5}
                                playerIndex={index + 5}
                                participant={participant} 
                                team={"blue"} 
                                detailed={detailed}
                                playerSelector={playerSelector}
                                />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
