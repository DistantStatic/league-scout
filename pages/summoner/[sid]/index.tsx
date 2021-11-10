import { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import MainLayout from '../../../components/layouts/main-layout';
import BaseDetails from '../../../components/account/base-details/base-details';
import RankedDetails from '../../../components/account/ranked-details/ranked-details';
import Loader from '../../../components/loader/loader';
import SummonerDetail from '../../../components/layouts/summoner-detail';

export default function AccountDetail(){
    const [loading, setLoading] = useState(true)
    const [summonerInfo, setSummonerInfo] = useState({})
    const router = useRouter()
    const { sid } = router.query

    useEffect(() => {
        if(typeof(sid) === "undefined") return;
        getAccountDetails()
    }, [sid])

    function getAccountDetails() {
        console.log('called')
        fetch(`/api/account/${ sid }`)
            .then(async (resp) => {
                const data = await resp.json()
                console.log(data)
                setSummonerInfo(data)
            })
            .catch(err =>{
                console.log(err);
            })
            .finally(() => {
                setLoading(false)
            })
    }

    return(
        <MainLayout title={ sid }>
            <SummonerDetail summoner={sid}>
                <div className="mt-7">
                    {loading ? <Loader /> : 
                        <>
                            <BaseDetails baseDetails={summonerInfo['base']} /> 
                            <RankedDetails queues={summonerInfo['rankedQueues']} />
                        </>
                    }
                </div>
            </SummonerDetail>
        </MainLayout>
    )
}