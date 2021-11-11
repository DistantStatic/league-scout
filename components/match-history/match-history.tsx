import MatchItem from "./match/match";
import { Match } from "../../interface-lib/match-lib.tsx/match-lib";

export default function MatchHistory({matches, matchSelector}: {
    matches: Array<Match>, 
    matchSelector: Function,
}){
    return(
        <>
            <div className=" mx-auto px-1.5 container grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 h-5/6 mt-2 overflow-y-auto mt-7">
                {
                    matches.map((match, index) => (
                        <MatchItem 
                            match={match} 
                            key={index} 
                            matchSelector={matchSelector} 
                            matchIndex={index}/>
                    ))
                }
            </div>
        </>
    )
}