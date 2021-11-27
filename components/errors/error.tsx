export default function ErrorDisplay({title, message}: {title?: string, message?: string}) {
    
    return(
        <div className="mt-7">
            <span className="text-xl">{!title ? 'Something went wrong :(' : title}</span>
            { message ? <span className="pt-28">{message}</span> : ''}
        </div>
    )
}
