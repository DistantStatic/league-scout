import React, {MouseEvent} from "react"


function Modal({children, show, hide}: {children: React.ReactNode, show: boolean, hide?: Function}){

    function hideModal(e: MouseEvent<HTMLDivElement>){
        hide ? hide() : ""
    }

    return(
        <div id="modalBg" className={`${show ? "": "hidden"} absolute z-10 h-full w-full bg-gray-600 bg-opacity-75 top-0 overflow-y-auto bg-blend-normal`} onClick={(e) => hideModal(e)}>
            <div className="container mx-auto z-10">
                <div className=" mt-14 w-11/12 sm:w-4/5 h-3/5 mx-auto rounded-md relative text-white bg-gray-800 bg-opacity-85 my-14 overflow-y-auto" onClick={e => e.stopPropagation()}>
                    <div className="mx-5 py-0.5">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

function Header({children}: {children: React.ReactNode}){
    return(
        <>
            <div className="h-auto w-full my-6">
                {children}
            </div>
        </>
    )
}

function Body({children}: {children: React.ReactNode}){
    return(
        <>
            <hr />
            <div className="h-auto w-full my-6">
                {children}
            </div>
        </>
    )
}

function Footer({children}: {children: React.ReactNode}){
    return(
        <>
            <hr />
            <div className="h-auto w-full my-6">
                {children}
            </div>
        </>
    )
}

export default Object.assign(Modal, { Header: Header, Body: Body, Footer: Footer})
