import { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import MainLayout from '../../../components/layouts/main-layout';
import BaseDetails from '../../../components/account/base-details/base-details';
import RankedDetails from '../../../components/account/ranked-details/ranked-details';
import Loader from '../../../components/loader/loader';
import SummonerDetail from '../../../components/layouts/summoner-detail';


export default function AccountDetail(){
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)
    const [summonerInfo, setSummonerInfo] = useState({})
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

    return(
        <MainLayout title={ sid }>
            <SummonerDetail summoner={sid}>
                    {loading ? <Loader /> : 
                        !error ? 
                            <div className="mt-7">
                                <BaseDetails baseDetails={summonerInfo['base']} /> 
                                <RankedDetails queues={summonerInfo['rankedQueues']} />
                            
                            </div>
                        : <h1>Something went wrong :(</h1>
                    }
            </SummonerDetail>
        </MainLayout>
    )
}