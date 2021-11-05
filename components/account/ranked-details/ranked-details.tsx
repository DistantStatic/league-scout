import Image from "next/image"

export default function RankedDetails({rankedSolo, rankedFlex}) {
    return(
        <div className=" justify-center flex space-x-10 text-center">
            {rankedSolo ? 
                <div>
                    <span className="text-xl">Ranked Solo/Duo</span>
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
                    <span className="text-xl">Ranked Flex</span>
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