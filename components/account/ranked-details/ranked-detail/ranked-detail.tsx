import Image from 'next/image'
import { RankedResponse } from '../../../../interface-lib/account/account-lib'

const rankedQueueType = {
    "RANKED_SOLO_5x5": "Ranked Solo/Duo 5v5",
    "RANKED_FLEX_SR": "Ranked Flex 5v5"
}

export default function RankedDetail({queue}: {queue: RankedResponse}){
    return(
        <div className=" rounded-3xl bg-indigo-800 bg-opacity-60 my-2 p-4 sm:mx-4">
            <span className="text-2xl">{rankedQueueType[queue.queueType]}</span>
            <div className="h-full p-2 flex flex-row">
                <div className="flex flex-col">
                    <Image src={`/static/emblems/${queue['tier']}.png`} width={"100px"} height={"100px"}/>
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
        </div>
    )
}