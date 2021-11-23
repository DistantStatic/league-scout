import { useEffect, useState } from "react"
import { useRouter } from 'next/router'
import Loader from "../../../components/loader/loader"

export default function CurrentMatch() {
    const [ inGame, setInGame ] = useState(false)
    const [ loading, setLoading ] = useState(true)
    const router = useRouter()
    const { sid }: { [key: string]: string | string[] } = router.query

    useEffect(() => {

    }, [sid])

    return (
        <>
            {
                loading ? 
                    <Loader /> 
                    :
                    inGame ?
                        ''// show current game data
                        :
                        ''// show not in game message
                    
            }
        </>
    )
}