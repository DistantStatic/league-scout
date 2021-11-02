import Link from 'next/link'

export default function NavItem({ itemText, itemPath }: {itemText: string, itemPath: string }){
    return (
            <div className="px-5 pb-2 pt-4">
                <Link href={itemPath}>
                    <a className="align-middle text-lg text-white">{itemText}</a>
                </Link>
            </div>
        )
}