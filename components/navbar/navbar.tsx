import NavBrand from './navbrand/navbrand';
import NavItem from "./navitem/navitem";

export default function NavBar() {
    return(
        <div className="w-full h-16 bg-gray-800 flex">
            <NavBrand brandName="League Scout" />
            <NavItem itemText={"Home"} itemPath={"/"} />
        </div>
    )    
}