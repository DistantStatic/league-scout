import Image from 'next/image'

export default function BaseDetails({baseDetails}: {baseDetails: {name: string, profileIconId: string, summonerLevel: string}}) {
    return(
        <div className="container justify-center text-center py-4 flex flex-row flex-wrap">
            <div className="w-max flex-col">
                {
                baseDetails.profileIconId ? 
                <Image 
                    src={`https://ddragon.leagueoflegends.com/cdn/11.23.1/img/profileicon/${baseDetails.profileIconId}.png`} 
                    width={"100px"} 
                    height={"100px"}
                    alt={`Profile Icon ${baseDetails.profileIconId}`}
                    /> : ''
                }
            </div>
            <div className="px-4 flex flex-col items-center">
                <span className="text-5xl pb-4">{`${baseDetails.name}`}</span>
                <span className="text-3xl">{`Lvl: ${baseDetails.summonerLevel}`}</span>
            </div>
        </div>
    )
}