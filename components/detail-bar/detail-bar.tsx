import DetailBarItem from "./detail-bar-item/detail-bar-item"

const tabs: Array<string> = [
    "account",
    "match history",
]

export default function DetailBar(){
    return(
        <div className=" h-8 w-full bg-indigo-900 border-b-2 border-black rounded-t-md flex ">
            {
                tabs.map((tab, index) => (
                    <DetailBarItem key={index} itemText={tab} />
                ))
            }
        </div>
    )
}