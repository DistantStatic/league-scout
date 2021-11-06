import { useState } from 'react';
import Link from 'next/dist/client/link';

export default function FrontDirectory(){
    const [ accountName, setAccountName ] = useState('')

    return(
        <div className="container bg-gray-400 rounded-md mx-auto align-middle mt-16 ">
            <div className="container justify-center text-center py-4 ">
                <span className=" text-2xl subpixel-antialiased ">Enter Summoner Name</span>
                <br />
                <input type="text" name="usename" id="username" className="rounded-md mr-2 " onChange={(e) => setAccountName(e.target.value)}/>
                <Link href={`/account/${accountName}`}><button className=" bg-green-400 rounded-md px-4 subpixel-antialiased ">Submit</button></Link>
            </div>
        </div>
    )
}