import Image from "next/image"

export default function RankedDetails({rankedSolo, rankedFlex}) {
    return(
        <div className=" justify-center flex">
            {rankedSolo ? 
                <div>
                    <span>Ranked Solo/Duo</span>
                    <br/>
                    <Image src={`/emblems/${rankedSolo['tier']}.png`} width={"100px"} height={"100px"}/> 
                    <br />
                    <span>
                    {rankedSolo['tier']}
                    </span>
                </div>
                : ''}
            {rankedFlex ? 
                <div>
                    <span>Ranked Flex</span>
                    <br/>
                    <Image src={`/emblems/${rankedFlex['tier']}.png`} width={"100px"} height={"100px"}/>   
                    <br />
                    <span>
                    {rankedFlex['tier']}
                    </span>
                </div>
            : ''}
        </div>
    )
}