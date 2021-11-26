import Image from 'next/image'
import { RankedResponse } from "../../../../../../interface-lib/account/account-lib"

export default function RankDetail({queue}: {
    queue: RankedResponse
}) {
    return(
            <>
            { queue.tier !== undefined ?
            <div className="h-full p-2 flex flex-row text-sm justify-center">
                <div className="flex flex-col justify-center">
                    <Image 
                        src={`/static/emblems/${queue['tier']}.png`} 
                        width={"50px"} 
                        height={"50px"}
                        alt={`Rank ${queue['tier']} Icon`}
                        />
                </div>
                <div className="flex flex-col justify-center">
                    <span className="">
                        {`${queue.tier} ${queue.rank}`}
                    </span>
                    <span className="">
                        {`LP: ${queue.leaguePoints}`}
                    </span>
                    <div className="flex flex-row flex-wrap text-center items-center justify-center">
                        <span className="px-2">
                            {`Win: ${queue.wins}`}
                        </span>
                        <span className="">
                            {`Loss: ${queue.losses}`}
                        </span>
                    </div>
                    <div className="flex flex-row space-x-2 justify-center">
                        { queue.inactive ? <span>💤</span> : "" }
                        { queue.hotStreak ? <span>🔥</span> : "" }
                        { queue.freshBlood ? <span>🆕</span> : "" }
                        { queue.veteran ? <span>⚜</span> : "" }
                    </div>
                </div>
            </div>
        : ''
        }
        </>
    )
}