import React from "react"
import { PassThrough } from "stream"

function Modal({children, show, hide}: {children: React.ReactNode, show: boolean, hide?: Function}){

    function hideModal(){
        hide ? hide() : ""
    }

    return(
    <div className={`${show ? "visible": "invisible"} absolute z-100 h-screen w-screen bg-gray-600 bg-opacity-75 top-0`} onClick={() => hideModal()}>
        <div className="container">
            <div className=" mt-28 w-3/5 h-3/5 bg-white mx-auto rounded-md">
                {children}
            </div>
        </div>
    </div>)
}

function Header({children}: {children: React.ReactNode}){
    return(
        <div className="h-auto w-full">
            {children}
        </div>
    )
}

function Body({children}: {children: React.ReactNode}){
    return(
        <div className="h-auto w-full">
            {children}
        </div>
    )
}

function Footer({children}: {children: React.ReactNode}){
    return(
        <div className="h-auto w-full">
            {children}
        </div>
    )
}

export default Object.assign (Modal, { Header: Header, Body: Body, Footer: Footer})
