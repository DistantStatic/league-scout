import { Match } from "../../../interface-lib/match-lib.tsx/match-lib"

export default function MatchItem({match}: {match: Match}) {
    console.log(match)
    return(
        <div 
            style={{backgroundImage: `url(http://ddragon.leagueoflegends.com/cdn/6.8.1/img/map/map${match.info.mapId}.png)`}} 
            className="h-96 bg-no-repeat bg-center bg-cover rounded-xl ">
            <div className="opacity-400" style={{opacity: "100%"}}>
                <span className="text-white">{`${match.info.platformId} | ${match.info.gameMode} ${match.info.gameType}`}</span>
                <br />
                <span className="text-white">{`Date-Time: ${new Date(match.info.gameCreation)}`}</span>
            </div>
        </div>
    )
}