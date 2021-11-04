import NavBrand from './navbrand/navbrand';
import NavItem from "./navitem/navitem";

export default function NavBar({ home }: { home: boolean }) {
    return(
        <div className="w-full h-16 bg-gray-800 flex">
            <NavBrand brandName="League Scout" />
            <NavItem itemText={"Home"} itemPath={"/"} />
        </div>
    )    
}