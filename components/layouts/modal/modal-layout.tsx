import React from "react"
import { PassThrough } from "stream"

function Modal({children, show, hide}: {children: React.ReactNode, show: boolean, hide?: Function}){

    function hideModal(){
        hide ? hide() : ""
    }

    return(
        <div className={`${show ? "": "hidden"} absolute z-100 h-screen w-screen bg-gray-600 bg-opacity-75 top-0`} onClick={() => hideModal()}>
            <div className="container mx-auto">
                <div className=" mt-28 w-3/5 h-3/5 mx-auto rounded-md relative text-white bg-gray-800 bg-opacity-85">
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
            
            <hr />
        </>
    )
}

function Body({children}: {children: React.ReactNode}){
    return(
        <>
            <div className="h-auto w-full my-6">
                {children}
            </div>
            
            <hr />
        </>
    )
}

function Footer({children}: {children: React.ReactNode}){
    return(
        <div className="h-auto w-full my-6">
            {children}
        </div>
    )
}

export default Object.assign (Modal, { Header: Header, Body: Body, Footer: Footer})
