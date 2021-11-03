import { useState } from 'react'

import Account from "../../components/account/account"
import DetailBar from "../../components/detail-bar/detail-bar"

export default function FrontDirectory(){
    const [accountName, setAccountName] = useState('')
    const [puuid, setPuuid] = useState('')
    
    return (
        <div className="container bg-gray-400 rounded-md mx-auto align-middle mt-16 ">
            <DetailBar />
            <Account accountName={accountName} puuid={puuid} setAccountName={setAccountName} setPuuid={setPuuid}/>
        </div>
    )
}