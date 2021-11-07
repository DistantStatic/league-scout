import { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import MainLayout from "../../../components/layouts/main-layout";
import Loader from '../../../components/loader/loader';
import MatchHistory from '../../../components/match-history/match-history';
import SummonerDetail from '../../../components/layouts/summoner-detail';

export default function Matches(){
    const [loading, setLoading] = useState(true)
    const [matches, setMatches] = useState([])
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

    return (
        <MainLayout home={false} title="Matches">
            <SummonerDetail summoner={sid}>
                { loading ? <Loader /> : <MatchHistory matches={matches} /> }
            </SummonerDetail>
        </MainLayout>
    )
}
