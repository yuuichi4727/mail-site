import { FaHome, FaUser, FaEnvelope } from "react-icons/fa";
import SideBarActiveList from '../../components/SideBarActiveList/Index'
import { NavLink, Outlet } from 'react-router-dom'
import { useParams } from 'react-router-dom'


function Index() {
    const { category } = useParams()
    

    return (
        <div className="h-screen w-1/6 flex flex-col items-center fixed z-50 top-0 left-0">
            <div className="h-14 flex-shrink-0 bg-blue-900 w-full text-white flex items-center justify-start">
                <img className="w-full" src={require('../../img/menulogo.svg').default} alt='logo' className="max-w-full w-3/4 h-4/6" />
            </div>
            <div className="h-full flex items-center w-full">
                <div className="w-1/5 h-full bg-blue-900 flex flex-col items-center justify-start">
                    <NavLink to={`home`}  className={`text-white flex w-full h-14 items-center justify-center text-md font-bold text-lg` + (category === 'home' ? ' sidebar__active' : '')}>
                        <FaHome />
                    </NavLink>
                    <NavLink to={`inbox`} className={`text-white flex w-full h-14 items-center justify-center text-md font-bold text-lg` + (category === 'inbox' ? ' sidebar__active' : '')}>
                        <FaEnvelope />
                    </NavLink>
                    <NavLink to={`user`} className={`text-white flex w-full h-14 items-center justify-center text-md font-bold text-lg` + (category === 'user' ? ' sidebar__active' : '')}>
                        <FaUser />
                    </NavLink>
                </div>
                <Outlet />
            </div>


        </div>
    )
}

export default Index