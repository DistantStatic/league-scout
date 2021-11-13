import { ReactNode } from 'react'
import DetailBar from '../detail-bar/detail-bar'

export default function SummonerDetail({ children, summoner }: { children: ReactNode, summoner: string | string[] }) {

    return(
        <div className="h-5/6 w-5/6 mt-6 xl:mt-12 container bg-gray-400 bg-opacity-60 rounded-md mx-auto align-middle text-center relative overflow-y-auto">
            <DetailBar summoner={summoner} />
            {children}
        </div>
    )

}   