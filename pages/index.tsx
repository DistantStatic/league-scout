import Head from 'next/head'
import NavBar from '../components/navbar/navbar'

export default function Home() {
    return (
        <div className="" style={{backgroundImage: "/CelebrationBg_Arcade_2019.png"}}>
            <Head>
                <title>
                    League Scout
                </title>
            </Head>
            <NavBar />
            
        </div>
    )
}
