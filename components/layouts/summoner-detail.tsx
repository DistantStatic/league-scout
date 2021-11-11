import { ReactNode } from 'react'
import DetailBar from '../detail-bar/detail-bar'

export default function SummonerDetail({ children, summoner }: { children: ReactNode, summoner: string | string[] }) {

    return(
        <div className="container bg-gray-400 bg-opacity-60 h-5/6 w-5/6 rounded-md mx-auto align-middle mt-12 text-center relative ">
            <DetailBar summoner={summoner} />
            {children}
        </div>
    )

}   