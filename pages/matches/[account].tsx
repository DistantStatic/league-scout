import { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import MainLayout from "../../components/layouts/main-layout";
import Loader from '../../components/loader/loader';
import MatchHistory from '../../components/match-history/match-history';

export default function Matches(){
    const [loading, setLoading] = useState(true)
    const [matches, setMatches] = useState([])
    const router = useRouter()
    const { account } = router.query

    useEffect(() => {
        console.log(account)
        if(typeof(account) === "undefined") return;
        fetchMatchHistory()
    }, [account])

    function fetchMatchHistory() {
        fetch(`/api/matches/${account}`)
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
            { loading ? <Loader /> : <MatchHistory matches={matches} /> }
        </MainLayout>
    )
}
