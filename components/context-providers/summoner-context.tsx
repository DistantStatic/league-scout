import React, { ReactNode, SetStateAction, useState } from "react";

export const SummonerContext = React.createContext<[string, React.Dispatch<SetStateAction<string>>]>([
    '',
    ()=>{}
])

export default function SummonerContextProvider({ children }: { children: ReactNode }){
    const [summoner, setSummoner] = useState('')

    return(
        <SummonerContext.Provider value={[summoner, setSummoner]} >
            {children}
        </SummonerContext.Provider>
    )
}