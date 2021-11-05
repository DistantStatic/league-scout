import Image from 'next/image'
import { RankedResponse } from '../../../../interface-lib/account/account-lib'

export default function RankedDetail({queue}: {queue: RankedResponse}){
    return(
        <div>
            <span className="text-xl">Ranked Solo/Duo</span>
            <br/>
            <Image src={`/emblems/${queue['tier']}.png`} width={"100px"} height={"100px"}/> 
            <br />
            <span>
                {`${queue.tier} ${queue.rank}`}
            </span>
            <br />
            <span>
                {`LP: ${queue.leaguePoints}`}
            </span>
            <br />
            <span>
                {`Win: ${queue.wins} | Loss: ${queue.losses}`}
            </span>
            {
                //Do something with queue.freshblood and queue.hotstreak
            }
        </div>
    )
}