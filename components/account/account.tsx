import { useState } from 'react';

export default function Account(){
    const [ accountName, setAccountName ] = useState('')

    function sendAccount() {
        window.location.assign(`/account/${accountName}`)
    }

    return(
        <div className="container justify-center text-center py-4 ">
            <span className=" text-2xl subpixel-antialiased ">Enter Summoner Name</span>
            <br />
            <input type="text" name="usename" id="username" className="rounded-md mr-2 " onChange={(e) => setAccountName(e.target.value)}/>
            <button className=" bg-green-400 rounded-md px-4 subpixel-antialiased " onClick={() => sendAccount()}>Submit</button>
        </div>
    )
}