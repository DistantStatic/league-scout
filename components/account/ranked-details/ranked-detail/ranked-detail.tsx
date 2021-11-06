import Image from 'next/image'
import { RankedResponse } from '../../../../interface-lib/account/account-lib'

const rankedQueueType = {
    "RANKED_SOLO_5x5": "Ranked Solo/Duo 5v5",
    "RANKED_FLEX_SR": "Ranked Flex 5v5"
}

export default function RankedDetail({queue}: {queue: RankedResponse}){
    return(
        <div className=" rounded-3xl bg-indigo-500 bg-opacity-30 w-1/5 h-full p-2 ">
            <span className="text-2xl">{rankedQueueType[queue.queueType]}</span>
            <br/>
            <Image src={`/emblems/${queue['tier']}.png`} width={"150px"} height={"150px"}/> 
            <br />
            <div className=" my-2 ">
                <span className="text-xl">
                    {`${queue.tier} ${queue.rank}`}
                </span>
            </div>
            <br />
            <span className="text-xl">
                {`LP: ${queue.leaguePoints}`}
            </span>
            <br />
            <span className="text-xl">
                {`Win: ${queue.wins} | Loss: ${queue.losses}`}
            </span>
            <div className="flex space-x-2 justify-center">
                { queue.inactive ? <span>💤</span> : "" }
                { queue.hotStreak ? <span>🔥</span> : "" }
                { queue.freshBlood ? <span>🆕</span> : "" }
                { queue.veteran ? <span>⚜</span> : "" }
            </div>
        </div>
    )
}