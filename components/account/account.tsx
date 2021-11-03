import { useState } from 'react';
import RankedDetails from './ranked-details/ranked-details';
import BaseDetails from './base-details/base-details';

export default function Account({accountName, setAccountName, puuid, setPuuid}: {accountName: string, puuid: string, setAccountName: Function, setPuuid: Function}) {
    const [profilePic, setProfilePic] = useState('')
    const [rankedSolo, setRankedSolo] = useState()
    const [rankedFlex, setRankedFlex] = useState()

    function getAccountDetails() {
        console.log('called')
        fetch(`/api/account/${accountName}`)
            .then(async (resp) => {
                const data = await resp.json()
                console.log(data)
                setAccountName(data.name)
                setPuuid(data.puuid)
                setProfilePic(data.profileIconId)
                setRankedSolo(data['0'])
                setRankedFlex(data['1'])

            })
            .catch(err =>{

            })
    }

    return(
        <div className="container justify-center text-center py-4 ">
            <span className=" text-2xl subpixel-antialiased ">Account Details</span>
            <br />
            <BaseDetails accountName={accountName} profilePic={profilePic} />
            <RankedDetails rankedSolo={rankedSolo} rankedFlex={rankedFlex} />
            <br />
            <input type="text" name="usename" id="username" className="rounded-md mr-2 " onChange={(e) => setAccountName(e.target.value)}/>
            <button className=" bg-green-400 rounded-md px-4 subpixel-antialiased " onClick={() => getAccountDetails()}>Submit</button>
        </div>
    )
}