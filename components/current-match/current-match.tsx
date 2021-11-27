import { CurrentMatchDto } from "../../interface-lib/match-lib/match-lib";
import PlayerList from "./player-list/player-list";

export default function CurrentMatch({matchData, playerSelector}: {
    matchData: CurrentMatchDto,
    playerSelector: Function
}){

    return (
        <div className="mt-6 overflow-y-auto">
            <PlayerList playerList={matchData.participants} playerSelector={playerSelector} />
        </div>
    )
}