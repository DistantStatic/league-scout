export default function DetailBarItem({ itemText }: {itemText: string}) {
    return(
        <div className="bg-opacity-60 cursor-pointer px-4 rounded-t-md subpixel-antialiased bg-purple-300 ">
            <span className="text-lg" >{itemText}</span>
        </div>
    )
}