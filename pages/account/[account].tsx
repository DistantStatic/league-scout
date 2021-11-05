import { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import MainLayout from '../../components/layouts/main-layout';
import DetailBar from '../../components/detail-bar/detail-bar';
import BaseDetails from '../../components/account/base-details/base-details';
import RankedDetails from '../../components/account/ranked-details/ranked-details';
import Loader from '../../components/loader/loader';

export default function AccountDetail(){
    const [loading, setLoading] = useState(true)
    const [summonerInfo, setSummonerInfo] = useState({})
    const router = useRouter()
    const { account } = router.query

    useEffect(() => {
        console.log(account)
        if(typeof(account) === "undefined") return;
        getAccountDetails()
    }, [account])

    function getAccountDetails() {
        console.log('called')
        fetch(`/api/account/${ account }`)
            .then(async (resp) => {
                const data = await resp.json()
                console.log(data)
                setSummonerInfo(data)
                setLoading(false)
            })
            .catch(err =>{
                console.log(err);
                setLoading(false)
            })
    }

    return(
        <MainLayout home={false} title={ account }>
            <div className="container bg-gray-400 bg-opacity-60 h-96 rounded-md mx-auto align-middle mt-16 text-center ">
                <DetailBar />
                {loading ? <Loader /> : <><BaseDetails baseDetails={summonerInfo['base']} /> <RankedDetails queues={summonerInfo['rankedQueues']} /></>}
            </div>
        </MainLayout>
    )
}