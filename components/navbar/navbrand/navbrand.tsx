import Link from 'next/link'

export default function NavBrand({ brandName }: {brandName: string}){
    return(
        <div className="px-10 pt-2.5 sm:pt-5 sm:pb-2">
            <Link href="#">
                <a className="text-blue-300 ">
                    {brandName}
                </a>
            </Link>
        </div>
    )
}