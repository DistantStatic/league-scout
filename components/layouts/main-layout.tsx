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
            <main className="h-5/6 overflow-y-scroll pt-4">
                {children}
            </main>
        </div>
    )
}