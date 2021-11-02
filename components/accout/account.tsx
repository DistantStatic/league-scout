import { useState } from 'react';
import Image  from 'next/image';

export default function Account() {
    const [accountName, setAccountName] = useState('');
    const [puuid, setPuuid] = useState('')
    const [profilePic, setProfilePic] = useState('')

    function getAccountDetails() {
        console.log('called')
        fetch(`/api/account/${accountName}`)
            .then(async (resp) => {
                const data = await resp.json()
                setPuuid(data.puuid)
                setProfilePic(data.profileIconId)
            })
            .catch(err =>{

            })
    }

    return(
        <div className="container justify-center text-center py-4 ">
            <span className=" text-2xl subpixel-antialiased ">Account Details</span>
            <br />
            <h3>{accountName}{' '}{puuid}</h3>
            {profilePic ? <Image src={`http://ddragon.leagueoflegends.com/cdn/11.21.1/img/profileicon/${profilePic}.png`} width={"100px"} height={"100px"}/> : ''}
            <br />
            <input type="text" name="usename" id="username" className="rounded-md mr-2 " onChange={(e) => setAccountName(e.target.value)}/>
            <button className=" bg-green-400 rounded-md px-4 subpixel-antialiased " onClick={() => getAccountDetails()}>Submit</button>
        </div>
    )
}