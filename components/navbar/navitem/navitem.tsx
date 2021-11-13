import Link from 'next/link'

export default function NavItem({ itemText, itemPath }: {itemText: string, itemPath: string }){
    return (
            <div className="px-5 pt-1.5 sm:pb-2 sm:pt-4">
                <Link href={itemPath}>
                    <a className="align-middle text-lg text-white">{itemText}</a>
                </Link>
            </div>
        )
}