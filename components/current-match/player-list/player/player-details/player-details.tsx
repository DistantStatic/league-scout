import RankDetail from "./rank-details/rank-details"
import { RankedResponse } from "../../../../../interface-lib/account/account-lib"
import Image from 'next/image'

export default function PlayerDetails({baseDetails, rankedDetails}: {
    baseDetails: {
        name: string, 
        profileIconId: string, 
        summonerLevel: string, 
    },
    rankedDetails:  Array<RankedResponse>
}){

    return (
        <div className="flex flex-row">
            
        <div className="justify-center text-center py-4 flex flex-col flex-wrap">
            <div className="w-max flex-col">
                {
                baseDetails.profileIconId ? 
                <Image 
                    src={`https://ddragon.leagueoflegends.com/cdn/11.21.1/img/profileicon/${baseDetails.profileIconId}.png`} 
                    width={"25px"} 
                    height={"25px"}
                    alt={`Profile Icon ${baseDetails.profileIconId}`}
                    /> : ''
                }
            </div>
            <div className=" flex flex-col items-center">
                <span className="text-base pb-4">{`${baseDetails.name}`}</span>
                <span className="text-sm">{`Lvl: ${baseDetails.summonerLevel}`}</span>
            </div>
        </div>
        {
            rankedDetails.map( (queue, index) => (
                    <RankDetail queue={queue} key={index} />
                )
            )
        }
        </div>
    )
}