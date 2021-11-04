import { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import MainLayout from '../../components/layouts/main-layout';
import BaseDetails from '../../components/account/base-details/base-details';
import { PassThrough } from 'stream';

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
                setBaseDetails(data)
                setRankedSolo(data['0'])
                setRankedFlex(data['1'])

            })
            .catch(err =>{

            })
    }

    return(
        <MainLayout home={false} title={ account }>
            {typeof(baseDetails) === "undefined"? <h1>"loading..."</h1>: <BaseDetails baseDetails={baseDetails} />}
        </MainLayout>
    )
}