import Image from 'next/image'

export default function BaseDetails({accountName, profilePic}: {accountName: string, profilePic: string}) {
    return(
        <div>
            <h3>{accountName}</h3>
            {profilePic ? <Image src={`http://ddragon.leagueoflegends.com/cdn/11.21.1/img/profileicon/${profilePic}.png`} width={"100px"} height={"100px"}/> : ''}
        </div>
    )
}