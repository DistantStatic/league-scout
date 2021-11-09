import { Match } from "../../interface-lib/match-lib.tsx/match-lib";
import Modal from "../layouts/modal/modal-layout";

export default function MatchModal({show, hide, match}: {show: boolean, hide?: ()=>void, match: Match}) {
    return(
        <Modal show={show} hide={hide}>
            <Modal.Header>
                <span>{match.info.gameMode}</span>
                <button className="bg-red-600 text-white w-10 right-0 relative align-middle">X</button>
            </Modal.Header>
            <Modal.Body>
                <div>
                    {match.info.participants[0].summonerName}
                </div>
            </Modal.Body>
            <Modal.Footer>
                <h1>some text</h1>
            </Modal.Footer>
        </Modal>
    )
}