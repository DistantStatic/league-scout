import Match from "./match/match";

export default function MatchHistory({matches}: {matches: Array<any>}){
    return(
        <div>
            {
                matches.map((match, index) => (
                    <Match data={match} key={index} />
                ))
            }
        </div>
    )
}