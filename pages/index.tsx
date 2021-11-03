import Head from 'next/head'
import NavBar from '../components/navbar/navbar'
import FrontDirectory from '../containers/front-directory/front-directory'
import { useState } from 'react'

export default function Home() {
    return (
        <div className=" h-screen backdrop-filter bg-no-repeat bg-cover " style={{backgroundImage: "url(/CelebrationBg_Arcade_2019.png)"}}>
            <Head>
                <title>
                    League Scout
                </title>
            </Head>
            <NavBar />
            <FrontDirectory />
        </div>
    )
}
