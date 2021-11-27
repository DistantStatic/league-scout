import { useState } from 'react';
import Link from 'next/dist/client/link';

export default function FrontDirectory(){
    const [ accountName, setAccountName ] = useState('')

    return(
        <div className="container bg-gray-400 rounded-md mx-auto align-middle mt-8 md:mt-16 ">
            <div className="container justify-center text-center pb-8 pt-10 ">
                <div id="brand" className="pb-12">
                    <span className="text-6xl sm:text-8xl decoration-clone text-transparent bg-gradient-to-b from-indigo-600 to-green-400 bg-clip-text font-semibold">League Scout</span>
                </div>
                <p className=" text-lg sm:text-3xl subpixel-antialiased w-full ">Enter Summoner Name</p>
                <div className="my-8">
                    <form>
                        <input type="text" name="username" id="username" className="rounded-md mr-2 hover:shadow-md focus:shadow-md outline-none focus:border-green-400 border-solid border-2 border-opacity-0 focus:border-opacity-75" onSubmit={()=>{location.href=`/summoner/${accountName}`}} onChange={(e) => setAccountName(e.target.value)}/>
                        <Link href={`/summoner/${accountName}`} passHref>
                            <button type="submit" className=" bg-green-400 rounded-md px-4 subpixel-antialiased align-top hover:shadow-md">
                                <span className=" align-text-bottom">Submit</span>
                            </button>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    )
}