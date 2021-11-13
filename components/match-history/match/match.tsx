import { Match } from "../../../interface-lib/match-lib/match-lib"
import ParticipantList from "./participant-list/participant-list"
import QueueIds from "../../../game-constants/queue-ids.json"

interface QueueDTO {
    queueId: number,
    map: string,
    description: string,
    notes: string | null
}

const recursiveQueueFind = function (arr: Array<QueueDTO>, x:number, start:number, end:number) {
    if (start > end) return false
    
    const mid:number = Math.floor((start + end)/2)
    
    if (arr[mid].queueId===x) return arr[mid]
    
    if(arr[mid].queueId > x)
        return recursiveQueueFind(arr, x, start, mid - 1);
    else
        return recursiveQueueFind(arr, x, mid + 1, end);

}

export default function MatchItem({match, matchSelector, matchIndex}: {
    match: Match, 
    matchSelector: Function,
    matchIndex: number
}) {
    const date: Date = new Date(match.info.gameCreation)
    const queue: QueueDTO = recursiveQueueFind(QueueIds, match.info.queueId, 0, QueueIds.length)
    return(
        <div
            onClick={() => matchSelector(matchIndex)}
            style={{backgroundImage: `url(http://ddragon.leagueoflegends.com/cdn/6.8.1/img/map/map${match.info.mapId}.png)`}} 
            className={` h-auto w-auto my-2.5 bg-no-repeat bg-center bg-cover rounded-xl text-white mx-2 cursor-pointer`}>
            <div className=" bg-black bg-opacity-30 rounded-2xl border-2 border-black border-opacity-30 w-full h-full">
                <div className="flex flex-row pb-2 space-x-8 justify-center">
                    <span className="text-white">{`${queue.description}`}</span>
                    <span className="text-white">{`${date.toLocaleString()}`}</span>
                </div>
                <ParticipantList participants={match.info.participants} redWin={match.info.teams[0].win}/>
            </div>
        </div>
    )
}