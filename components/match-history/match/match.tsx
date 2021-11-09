import { Match } from "../../../interface-lib/match-lib.tsx/match-lib"
import ParticipantList from "./participant-list/participant-list"

export default function MatchItem({match, matchSelector, matchIndex}: {match: Match, matchSelector: Function, matchIndex: number}) {
    console.log(match)
    const date: Date = new Date(match.info.gameCreation)
    return(
        <div 
            style={{backgroundImage: `url(http://ddragon.leagueoflegends.com/cdn/6.8.1/img/map/map${match.info.mapId}.png)`}} 
            className=" h-60 w-auto my-2.5 bg-no-repeat bg-center bg-cover rounded-xl text-white mx-2 ">
            <div className=" bg-black bg-opacity-30 rounded-2xl border-2 border-black border-opacity-30 w-full h-full">
                <div className="flex flex-row pb-2 space-x-8 justify-center">
                    <span className="text-white">{`${match.info.gameMode} ${match.info.gameType}`}</span>
                    <span className="text-white">{`${date.toLocaleString()}`}</span>
                </div>
                <ParticipantList participants={match.info.participants} />
                <div className="pt-0.5">
                    <button className="bg-blue-500 w-1/4 rounded-md border-2" onClick={() => matchSelector(matchIndex)}>More...</button>
                </div>
            </div>
        </div>
    )
}