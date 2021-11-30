import { useEffect, useState } from 'react'
import { useRouter } from 'next/router';

import MainLayout from '../../../components/layouts/main-layout';
import BaseDetails from '../../../components/account/base-details/base-details';
import RankedDetails from '../../../components/account/ranked-details/ranked-details';
import SummonerDetail from '../../../components/layouts/summoner-detail';
import Loader from '../../../components/loader/loader';
import ErrorDisplay from '../../../components/errors/error'
import axios from 'axios';

export default function AccountDetail(){
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)
    const [summonerInfo, setSummonerInfo] = useState({
        name: '',
        profileIconId: '',
        summonerLevel: '',
        rankedQueues: []
    })
    const router = useRouter()
    const { sid } = router.query

    useEffect(() => {
        if(typeof(sid) === "undefined") return;
        fetch(`/api/account/${ sid }`)
            .then(async (resp) => {
                if (resp.status !== 200) return setError(true)  
                const data = await resp.json()
                setSummonerInfo(data)
            })
            .catch(err =>{
                console.log(err);
                setError(true)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [sid])

    function updateData(){
        fetch(`/api/account/${ sid }`, {method: "PUT"})
            .then(async (resp) => {
                if (resp.status !== 200) return setError(true)  
                const data = await resp.json()
                setSummonerInfo(data)
            })
            .catch(err =>{
                console.log(err);
                setError(true)
            })
            .finally(() => {
                setLoading(false)
            })
    }

    return(
        <MainLayout title={ sid }>
            <SummonerDetail summoner={sid}>
                    {loading ? <Loader /> : 
                        !error ? 
                            <div className="mt-7">
                                <button 
                                    name="refreshData" 
                                    onClick={() => updateData()}
                                    className="
                                        bg-blue-400
                                        outline-none
                                        p-2
                                        rounded
                                        "
                                    >
                                    Refresh Data    
                                </button>
                                <BaseDetails baseDetails={summonerInfo} /> 
                                <RankedDetails queues={summonerInfo['rankedQueues']} />
                            
                            </div>
                        : <ErrorDisplay />
                    }
            </SummonerDetail>
        </MainLayout>
    )
}