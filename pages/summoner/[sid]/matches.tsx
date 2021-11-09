import { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import MainLayout from "../../../components/layouts/main-layout";
import Loader from '../../../components/loader/loader';
import MatchHistory from '../../../components/match-history/match-history';
import SummonerDetail from '../../../components/layouts/summoner-detail';
import Modal from '../../../components/layouts/modal/modal-layout';
import MatchModal from '../../../components/modals/match-modal';

export default function Matches(){
    const [loading, setLoading] = useState(true)
    const [matches, setMatches] = useState([])
    const [matchModal, setMatchModal] = useState(true)
    const [selectedMatch, setSelectedMatch] = useState(0)
    const router = useRouter()
    const { sid } = router.query

    useEffect(() => {
        console.log(sid)
        if(typeof(sid) === "undefined") return;
        fetchMatchHistory()
    }, [sid])

    function fetchMatchHistory() {
        fetch(`/api/matches/${sid}`)
        .then(async (resp) => {
            const data = await resp.json()
            console.log(data)
            setMatches(data)
        })
        .catch(err => {
            console.log(err)
        })
        .finally(() => {
            setLoading(false)
        })
    }

    function matchSelection(index: number) {
        setSelectedMatch(index)
        setMatchModal(true)
    }

    return (
        <MainLayout home={false} title={` ${sid} - Matches`}>
            <SummonerDetail summoner={sid}>
                { loading ? <Loader /> : <MatchHistory matchSelector={matchSelection} matches={matches} /> }
            </SummonerDetail>
                { loading ? '' : <MatchModal show={matchModal} hide={() => setMatchModal(false)} match={matches[selectedMatch]}/>}
        </MainLayout>
    )
}
