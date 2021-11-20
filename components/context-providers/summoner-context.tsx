import React, { ReactNode } from "react";

const contextDetail = {
    summoner: ''
}

export const summonerContext = React.createContext(contextDetail)

export default function SummonerContext({summoner, children }: {summoner: string, children: ReactNode}){
    
    contextDetail.summoner = summoner
    
    return(
        <summonerContext.Provider value={contextDetail} >
            {children}
        </summonerContext.Provider>
    )
}