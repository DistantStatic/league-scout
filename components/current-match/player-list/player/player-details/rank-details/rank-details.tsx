import Image from 'next/image'
import { RankedResponse } from "../../../../../../interface-lib/account/account-lib"

export default function RankDetail({queue}: {
    queue: RankedResponse
}) {
    return(
                <div className="h-full p-2 flex flex-row">
                <div className="flex flex-col">
                    <Image 
                        src={`/static/emblems/${queue['tier']}.png`} 
                        width={"50px"} 
                        height={"50px"}
                        alt={`Rank ${queue['tier']} Icon`}
                        />
                </div>
                <div className="flex flex-col">
                    <span className="text-xl">
                        {`${queue.tier} ${queue.rank}`}
                    </span>
                    <span className="text-xl">
                        {`LP: ${queue.leaguePoints}`}
                    </span>
                    <div className="flex flex-row flex-wrap text-center items-center justify-center">
                        <span className="text-xl px-2">
                            {`Win: ${queue.wins}`}
                        </span>
                        <span className="text-xl">
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
    )
}