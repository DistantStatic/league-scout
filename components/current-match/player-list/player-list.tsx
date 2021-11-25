import { CurrentGameParticipant } from "../../../interface-lib/match-lib/match-lib";
import Player from "./player/player";

export default function PlayerList({playerList, playerSelector}: {
    playerList: Array<CurrentGameParticipant>,
    playerSelector: Function
}){
    return(
        <div className="flex w-full space-x-1">
            <div className={`container w-1/2 flex-col bg-opacity-40 text-center rounded-xl `}>
                <div className="flex-col space-y-2">
                {
                    playerList.slice(0, 5).map((participant, index) =>(
                        <Player 
                            key={index}
                            playerIndex={index}
                            player={participant} 
                            team={"red"} 
                            playerSelector={playerSelector}
                            />
                    ))
                }
                </div>
            </div>
            <div className={`container w-1/2 flex-col bg-opacity-40 text-center rounded-xl `}>
                <div className="flex-col space-y-2">
                {
                    playerList.slice(5, 10).map((participant, index) =>(
                        <Player 
                            key={index}
                            playerIndex={index}
                            player={participant} 
                            team={"blue"} 
                            playerSelector={playerSelector}
                            />
                    ))
                }
                </div>
            </div>
        </div>
    )
}