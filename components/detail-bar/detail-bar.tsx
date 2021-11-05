import DetailBarItem from "./detail-bar-item/detail-bar-item"

const tabs: Array<string> = [
    "account",
    "match history",
]

export default function DetailBar(){
    return(
        <div className=" h-8 w-full bg-indigo-900 rounded-t-md flex space-x-4 ">
            {
                tabs.map((tab, index) => (
                    <DetailBarItem key={index} itemText={tab} />
                ))
            }
        </div>
    )
}