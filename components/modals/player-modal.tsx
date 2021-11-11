import Modal from '../../components/layouts/modal/modal-layout'
import { ParticipantDto } from '../../interface-lib/match-lib.tsx/match-lib'

export default function PlayerModal({show, hide, participant}:{show: boolean, hide: ()=>void, participant: ParticipantDto}){

    return(
        <Modal show={show} hide={hide}>
            <Modal.Header>
                <div>
                    <span className="text-3xl">
                        {participant.summonerName}
                    </span>
                </div>
            </Modal.Header>
            <Modal.Body>

            </Modal.Body>
            <Modal.Footer>
                
            </Modal.Footer>
        </Modal>
    )
}