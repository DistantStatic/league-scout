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
    }

    return(
        <>
            <h1>Account Details</h1>
            <br />
            <h3>{accountName}{' '}{puuid}</h3>
            {profilePic ? <Image src={`http://ddragon.leagueoflegends.com/cdn/11.21.1/img/profileicon/${profilePic}.png`} width={"100px"} height={"100px"}/> : ''}
            <br />
            <input type="text" name="usename" id="username" onChange={(e) => setAccountName(e.target.value)}/>
            <button onClick={() => getAccountDetails()}>Submit</button>
        </>
    )
}