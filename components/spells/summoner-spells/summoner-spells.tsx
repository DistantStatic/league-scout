import Image from 'next/image'

import Spells from '../../../game-constants/summoner-spells.json'

//may be useful later
interface SummonerSpellDTO {
        id: string,
        name: string,
        description: string,
        tooltip: string,
        maxrank: 1,
        cooldown: [180],
        cooldownBurn: "180",
        cost: [0],
        costBurn: "0",
        datavalues: any,
        effect: Array<Array<number>|null>,
        effectBurn: Array<string|null>,
        vars: [],
        key: string,
        summonerLevel: 4,
        modes: Array<string>,
        costType: string,
        maxammo: string,
        range: Array<number>,
        rangeBurn: string,
        image: {
            full: string,
            sprite: string,
            group: string,
            x: number,
            y: number,
            w: number,
            h: number
        },
        resource: string
}

//Binary search won't work as spells are unordered, would have to sort then BS but with such small arrays it wont be of much use
function findSpell(spellNumber: number){
    let imagePath: string = ""
    Object.keys(Spells.data).forEach(spell => {
        if (Number(Spells.data[spell].key) === spellNumber ) {
            imagePath = Spells.data[spell].image.full
        }
    })
    return imagePath
}

export default function SummonerSpell({spellKey, spellSize}: {spellKey: number, spellSize: string}){
    const spellImg = findSpell(spellKey)
    return(
        <div>
            <Image src={`/static/spells/summoner/${spellImg}`} width={spellSize} height={spellSize}></Image>
        </div>
    )
}
