import MatchItem from "./match/match";

export default function MatchHistory({matches}: {matches: Array<any>}){
    return(
        <div className=" mx-auto container flex-col space-y-2 h-full w-1/2 content-center ">
            {
                matches.map((match, index) => (
                    <MatchItem match={match} key={index} />
                ))
            }
        </div>
    )
}