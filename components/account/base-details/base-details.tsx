import Image from 'next/image'

export default function BaseDetails({baseDetails}: {baseDetails: {name: string, profileIconId: string}}) {
    return(
        <div className="container bg-gray-400 bg-opacity-60 h-96 rounded-md mx-auto align-middle mt-16 ">
            <div className="container justify-center text-center py-4 flex ">
                <div className="px-4">
                    {
                    baseDetails.profileIconId ? 
                    <Image 
                        src={`http://ddragon.leagueoflegends.com/cdn/11.21.1/img/profileicon/${baseDetails.profileIconId}.png`} 
                        width={"100px"} 
                        height={"100px"}
                        /> : ''
                    }
                </div>
                <div className="px-4 flex items-center">
                    <span className="text-5xl p-b-0.5">{baseDetails.name}</span>
                </div>
            </div>
        </div>
    )
}