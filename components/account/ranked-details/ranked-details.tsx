import { RankedResponse } from "../../../interface-lib/account/account-lib"
import RankDetail from "./ranked-detail/ranked-detail"

export default function RankedDetails({queues}: {queues: Array<RankedResponse>}) {
    return(
        <div className=" justify-center flex space-x-10 text-center">
            {
                queues.map((queue, index) =>(
                    <RankDetail queue={queue} key={index}/>
                ))
            }
        </div>
    )
}