import Link from 'next/link'

export default function DetailBarItem({ itemText, path, summoner, tabIndex }: {
    itemText: string, 
    path: string, 
    summoner: string | string[],
    tabIndex: number
}) {
    return(
        <Link href={`/summoner/${summoner}/${path}`} passHref>
            <div tabIndex={tabIndex+1} className="
            bg-opacity-60 
            cursor-pointer 
            px-4 
            rounded-t-md 
            subpixel-antialiased 
            bg-purple-300 
            outline-none 
            border-solid 
            border-2 
            border-opacity-0 
            hover:shadow-md 
            hover:border-green-400
            hover:border-opacity-75
            focus:shadow-md 
            focus:border-green-400 
            focus:border-opacity-75">
                <span className="md:text-lg" >{itemText}</span>
            </div>
        </Link>
    )
}