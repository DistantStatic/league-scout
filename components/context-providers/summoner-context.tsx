import React, { ReactNode, SetStateAction, useState, useEffect } from "react";

export const SummonerContext = React.createContext<[string, React.Dispatch<SetStateAction<string>>]>([
    '',
    ()=>{}
])

export default function SummonerContextProvider({summonerName, children }: {summonerName: string | string[] | undefined, children: ReactNode }){
    const [summoner, setSummoner] = useState('')

    useEffect(() => {
        summonerName !== undefined ? setSummoner(summonerName.toString()) : null
    }, [summonerName])

    return(
        <SummonerContext.Provider value={[summoner, setSummoner]} >
            {children}
        </SummonerContext.Provider>
    )
}