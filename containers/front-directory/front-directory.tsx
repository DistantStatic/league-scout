import Account from "../../components/accout/account"
import DetailBar from "../../components/detail-bar/detail-bar"

export default function FrontDirectory(){
    return (
        <div className="container bg-gray-400 rounded-md mx-auto align-middle mt-16 ">
            <DetailBar />
            <Account />
        </div>
    )
}