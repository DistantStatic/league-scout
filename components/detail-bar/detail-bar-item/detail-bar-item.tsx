
export default function DetailBarItem({ itemText }: {itemText: string}) {
    return(
        <div className=" bg-opacity-60 cursor-pointer px-4 bg-purple-300 rounded-t-md subpixel-antialiased ">
            <span className="text-lg" >{itemText}</span>
        </div>
    )
}