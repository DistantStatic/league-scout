import DetailBarItem from "./detail-bar-item/detail-bar-item"

interface Pages {
    display: string,
    path: string
}

const tabs: Array<Pages> = [
    {display: "Account", path: ""},
    {display: "Matches", path: "matches"},
    {display: "Playing", path:"current"}
]

export default function DetailBar({summoner} : {summoner: string | string[]}){
    return(
        <div className=" h-min w-full bg-indigo-900 rounded-t-md flex space-x-4 relative top-0 ">
            {
                tabs.map((tab, index) => (
                    <DetailBarItem key={index} itemText={tab.display} path={tab.path} summoner={summoner} />
                ))
            }
        </div>
    )
}