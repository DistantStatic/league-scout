import { ParticipantDto } from "../../../../interface-lib/match-lib.tsx/match-lib";
import ParticipantItem from "./participant/participant";

export default function ParticipantList({participants}: {participants: Array<ParticipantDto>}){

    return(
        <div className="flex w-full">
            {
                //map out participants and split into teams

            }
            <div className="container w-1/2 flex-col space-y-2 bg-red-100 bg-opacity-40 text-center rounded-xl ">
                {
                    participants.slice(0, 5).map((participant, index) =>(
                        <ParticipantItem key={index} participant={participant} team={"red"} />
                    ))
                }
            </div>
            <div className="container w-1/2 flex-col space-y-2 bg-blue-100 bg-opacity-40 text-center rounded-xl ">
                {
                    participants.slice(5, 10).map((participant, index) =>(
                        <ParticipantItem key={index} participant={participant} team={"blue"} />
                    ))
                }
            </div>
        </div>
    )
}
