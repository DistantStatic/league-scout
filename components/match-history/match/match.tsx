import { Match } from "../../../interface-lib/match-lib.tsx/match-lib"
import ParticipantList from "./participant-list/participant-list"

export default function MatchItem({match}: {match: Match}) {
    console.log(match)
    return(
        <div 
            style={{backgroundImage: `url(http://ddragon.leagueoflegends.com/cdn/6.8.1/img/map/map${match.info.mapId}.png)`}} 
            className=" h-60 w-auto my-2.5 bg-no-repeat bg-center bg-cover rounded-xl text-white mx-auto">
            <div className=" bg-black bg-opacity-30">
                <span className="text-white">{`${match.info.platformId} | ${match.info.gameMode} ${match.info.gameType}`}</span>
                <br />
                <span className="text-white">{`Date-Time: ${new Date(match.info.gameCreation)}`}</span>
                <ParticipantList participants={match.info.participants} />
            </div>
        </div>
    )
}