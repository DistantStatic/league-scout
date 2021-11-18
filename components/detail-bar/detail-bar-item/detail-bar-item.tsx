import Link from 'next/link'

export default function DetailBarItem({ itemText, path, summoner }: {
    itemText: string, 
    path: string, 
    summoner: string | string[]
}) {
    return(
        <Link href={`/summoner/${summoner}/${path}`} passHref>
            <div className="bg-opacity-60 cursor-pointer px-4 rounded-t-md subpixel-antialiased bg-purple-300 ">
                <span className="text-lg" >{itemText}</span>
            </div>
        </Link>
    )
}