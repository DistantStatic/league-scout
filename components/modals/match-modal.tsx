import { Match } from "../../interface-lib/match-lib/match-lib";
import Modal from "../layouts/modal/modal-layout";
import ParticipantList from "../match-history/match/participant-list/participant-list";
import QueueIds from "../../game-constants/queue-ids.json"

interface QueueDTO {
    queueId: number,
    map: string,
    description: string,
    notes: string | null
}

const defineQueue = function (arr: Array<QueueDTO>, x:number, start:number, end:number) {
    if (start > end) return false
    
    const mid:number = Math.floor((start + end)/2)
    
    if (arr[mid].queueId===x) return arr[mid]
    
    if(arr[mid].queueId > x)
        return defineQueue(arr, x, start, mid - 1);
    else
        return defineQueue(arr, x, mid + 1, end);

}

export default function MatchModal({show, hide, match, playerSelector}: {
    show: boolean, 
    hide?: ()=>void, 
    match: Match,
    playerSelector: Function
}):JSX.Element {
    const queue: QueueDTO = defineQueue(QueueIds, match.info.queueId, 0, QueueIds.length)
    return(
        <Modal show={show} hide={hide}>
            <Modal.Header>
                <span>{queue.description}</span>
                <button onClick={hide} className="bg-red-600 text-white w-10 absolute top-0 right-0 align-middle rounded-tr-md">X</button>
            </Modal.Header>
            <Modal.Body>
                <div>
                    <div className="w-full text-center pb-6">
                        <span className="text-2xl">Team Stats</span>
                    </div>
                    <div className="flex flex-row pb-4">
                        {
                            match.info.teams.map((team, index) => (
                                <div className="flex flex-col w-1/2" key={index}>
                                    <div className="flex flex-col">
                                        <div className="flex flex-col text-center">
                                            <table>
                                                <thead>
                                                    <tr>
                                                        <th>Objective</th>
                                                        <th>First</th>
                                                        <th>Kills</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                {Object.entries(team.objectives).map((entry, index) => {
                                                    return (
                                                            <tr key={index}>
                                                                <td>{`${entry[0]}`}</td>
                                                                <td className={`${entry[1].first? 'text-green-500': 'text-red-500'}`}>{`${entry[1].first}`}</td>
                                                                <td>{`${entry[1].kills}`}</td>
                                                            </tr>
                                                        )})}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <ParticipantList
                        participants={match.info.participants}
                        redWin={match.info.teams[0].win}
                        playerSelector={playerSelector}
                        detailed />
                </div>
            </Modal.Body>
        </Modal>
    )
}