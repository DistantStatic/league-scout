import Head from 'next/head'
import { ReactNode } from 'react'
import NavBar from '../navbar/navbar'

export default function MainLayout({ children, home, title }: {children: ReactNode, home?: boolean, title: string | string[]}) {
    return(
        <div className=" h-screen backdrop-filter bg-no-repeat bg-cover " style={{backgroundImage: "url(/CelebrationBg_Arcade_2019.png)"}}>
            <Head>
                <title>
                    {title}
                </title>
            </Head>
            <NavBar home={home} />
            <main className="h-5/6 overflow-y-auto mt-2 ">
                {children}
            </main>
            <footer className="position absolute bottom-0 content-center w-full">
                <p className="text-gray-400 text-sm w-1/2 text-center content-center mx-auto"><i>LeagueScout™ isn't endorsed by Riot Games and doesn't reflect the views or opinions of Riot Games or anyone officially 
                    involved in producing or managing Riot Games properties. Riot Games, and all associated properties are trademarks or 
                    registered trademarks of Riot Games, Inc</i></p>
            </footer>
        </div>
    )
}