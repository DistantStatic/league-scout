import Image from 'next/image'
import { useEffect, useState } from 'react'

import Champions from '../../game-constants/champions.json'

export default function Champion({name, cid, height, width}: {
    name?: string,
    cid?: number,
    height: string | number,
    width: string | number
}){
    const [champName, setChampName ] = useState('')

    useEffect(() => {
        name && name.length > 0 ? setChampName(name) :
        Object.keys(Champions.data).forEach( champ =>{
            if (Champions.data[champ].id === cid){
                setChampName(champ)
                return
            }
        })
    }, [name, cid])

    return(
        <Image
        src={`/static/champions/${champName}.png`}
        height={height}
        width={width}
        alt={`${champName}`}
        />
    )
}