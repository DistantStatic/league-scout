import { ParticipantDto } from "../../../../interface-lib/match-lib.tsx/match-lib";
import ParticipantItem from "./participant/participant";

export default function ParticipantList({participants, detailed}: {participants: Array<ParticipantDto>, detailed?: boolean}){

    return(
        <div className="flex w-full space-x-1">
            <div className="container w-1/2 flex-col space-y-2 bg-red-100 bg-opacity-40 text-center rounded-xl ">
                {
                    participants.slice(0, 5).map((participant, index) =>(
                        <ParticipantItem key={index} participant={participant} team={"red"} detailed={detailed}/>
                    ))
                }
            </div>
            <div className="container w-1/2 flex-col space-y-2 bg-blue-100 bg-opacity-40 text-center rounded-xl ">
                {
                    participants.slice(5, 10).map((participant, index) =>(
                        <ParticipantItem key={index} participant={participant} team={"blue"} detailed={detailed}/>
                    ))
                }
            </div>
        </div>
    )
}
