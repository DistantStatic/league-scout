import { useEffect, useState } from "react"
import { useRouter } from 'next/router'

import MainLayout from "../../../components/layouts/main-layout"
import SummonerDetail from "../../../components/layouts/summoner-detail"
import CurrentMatch from "../../../components/current-match/current-match"
import Loader from "../../../components/loader/loader"
import ErrorDisplay from "../../../components/errors/error"

export default function CurrentMatchPage() {
    const [ inGame, setInGame ] = useState(false)
    const [ loading, setLoading ] = useState(true)
    const [ matchData, setMatchData ] = useState()
    
    const router = useRouter()
    const { sid }: { [key: string]: string | string[] } = router.query

    useEffect(() => {
        setLoading(true)
        if (sid === undefined) return
        console.log(sid)
        fetch(`/api/current/${sid}`)
        .then(async resp => {
            resp.status === 200 ? setInGame(true) : setInGame(false)
            setMatchData(await resp.json())
        })
        .catch(err => {
            setInGame(false)
            console.error(err)
        })
        .finally(() => {
            setLoading(false)
        })
    }, [sid])

    return (
        <MainLayout home={false} title={` ${sid} - Current`}>
            <SummonerDetail summoner={sid}>
            {
                loading ? 
                    <Loader /> 
                    :
                    inGame ?
                        // show current game data
                        <CurrentMatch matchData={matchData} playerSelector={()=>{}}/>
                        :
                        <ErrorDisplay title="Not in game" />
            }
            </SummonerDetail>
        </MainLayout>
    )
}