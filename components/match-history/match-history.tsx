import MatchItem from "./match/match";

export default function MatchHistory({matches}: {matches: Array<any>}){
    return(
        <div className=" mx-auto container grid grid-cols-3 h-full ">
            {
                matches.map((match, index) => (
                    <MatchItem match={match} key={index} />
                ))
            }
        </div>
    )
}