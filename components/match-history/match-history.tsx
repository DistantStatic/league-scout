import MatchItem from "./match/match";

export default function MatchHistory({matches}: {matches: Array<any>}){
    return(
        <div className=" mx-auto px-1.5 container grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 h-5/6 mt-8 overflow-y-auto ">
            {
                matches.map((match, index) => (
                    <MatchItem match={match} key={index} />
                ))
            }
        </div>
    )
}