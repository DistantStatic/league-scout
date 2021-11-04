import { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import MainLayout from '../../components/layouts/main-layout';
import BaseDetails from '../../components/account/base-details/base-details';
import RankedDetails from '../../components/account/ranked-details/ranked-details';

export default function AccountDetail(){
    const [baseDetails, setBaseDetails] = useState()
    const [rankedSolo, setRankedSolo] = useState()
    const [rankedFlex, setRankedFlex] = useState()
    
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
                setBaseDetails(data.base)
                setRankedSolo(data.rankedSolo)
                setRankedFlex(data.rankedFlex)
            })
            .catch(err =>{

            })
    }

    return(
        <MainLayout home={false} title={ account }>
            <div className="container bg-gray-400 bg-opacity-60 h-96 rounded-md mx-auto align-middle mt-16 text-center ">
                {typeof(baseDetails) === "undefined" ? <h1>"loading..."</h1>: <BaseDetails baseDetails={baseDetails} />}
                {typeof(rankedSolo) === "undefined" ? '' : <RankedDetails rankedSolo={rankedSolo} rankedFlex={rankedFlex} />}
            </div>
        </MainLayout>
    )
}