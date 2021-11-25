import { CurrentMatchDto } from "../../interface-lib/match-lib/match-lib";
import ParticipantList from "../match-history/match/participant-list/participant-list";
import PlayerList from "./player-list/player-list";

export default function CurrentMatch({matchData, playerSelector}: {
    matchData: CurrentMatchDto,
    playerSelector: Function
}){

    return (
        <div>
            <PlayerList playerList={matchData.participants} playerSelector={playerSelector} />
        </div>
    )
}