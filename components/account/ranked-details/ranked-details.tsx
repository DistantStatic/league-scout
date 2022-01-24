import { RankedResponse } from "../../../interface-lib/account/account-lib"
import RankDetail from "./ranked-detail/ranked-detail"

export default function RankedDetails({queues}: {queues: Array<RankedResponse>}) {
    return(
        <div className=" justify-center flex flex-row flex-wrap px-5 text-center h-5/6 pt-4">
            {
                queues.length > 0 ? queues.map((queue, index) =>(
                        <RankDetail queue={queue} key={index}/> 
                )) : <div className="mt-40">
                        <span className="text-5xl font-semibold">No Ranking Available...</span>
                    </div>
            }
        </div>
    )
}