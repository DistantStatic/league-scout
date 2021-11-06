import { useState } from 'react';
import { useRouter } from "next/router";
import MainLayout from "../../components/layouts/main-layout";
import Loader from '../../components/loader/loader';

export default function Matches(){
    const [loading, setLoading] = useState(true)
    const [matches, setMatches] = useState([])
    const router = useRouter()
    const { account } = router.query

    function fetchMatchHistory() {
        fetch(`/api/matches/${account}`)
        .then(async (resp) => {
            const data = await resp.json()
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
            {loading ? <Loader /> : ""}
        </MainLayout>
    )
}
