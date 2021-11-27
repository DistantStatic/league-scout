import Image from 'next/image'
import { ParticipantDto } from '../../../interface-lib/match-lib/match-lib'

export default function SummonerItems({participant, detailed, flat, itemImageSize}: {
    participant: ParticipantDto, 
    detailed?: boolean,
    flat?: boolean,
    itemImageSize: string
}){
    return(
        <div className="flex flex-row flex-wrap">
            <div className={`flex flex-col ${flat ? '' : 'w-3/4'}`}>
                <div className="flex flex-row flex-wrap">
                    {
                        //Summoner Items
                        [...Array(6)].map((_, itemPos) => (
                            <div key={itemPos} className={`${!detailed ? 'w-1/6' : 'w-1/3'}`}>
                                <Image 
                                    src={
                                        participant[`item${itemPos}`] !== 0 ? 
                                        `https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/${participant[`item${itemPos}`]}.png` :
                                        'https://ddragon.leagueoflegends.com/cdn/img/bg/A6000000.png'
                                        
                                    } 
                                    height={itemImageSize} 
                                    width={itemImageSize} 
                                    alt={`${participant[`item${itemPos}`]}`}
                                    />
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className={`flex flex-col ${flat ? '' : 'w-1/4'}`}>
                {
                    //Trinket placed seperately
                }
                <div className="">
                    <Image 
                        src={
                            participant[`item6`] !== 0 ? 
                            `https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/${participant[`item6`]}.png` :
                            'https://ddragon.leagueoflegends.com/cdn/img/bg/A6000000.png'
                        }
                        height={itemImageSize} 
                        width={itemImageSize} 
                        alt={`${participant[`item6`]}`}      
                        />
                </div>
            </div>
        </div>
    )
}