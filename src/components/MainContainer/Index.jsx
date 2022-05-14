import { Button } from 'antd';
import 'antd/dist/antd.css';
import { useContext, useState } from 'react';
import { FaRegAngry } from "react-icons/fa";
import { useLocation, useParams } from 'react-router-dom';
import { AuthContext } from "../../context/AuthContext";
import { user } from '../../database/user';
import Details from '../Details/Index';
import Summary from '../Summary/Index';



function Index() {
    const location = useLocation()
    const currentPath = location.pathname
    const { category } = useParams()
    const { currentUser, dispatch } = useContext(AuthContext)
    
    const handleLogout = () => {
        dispatch({ type: "LOGOUT" })
    }

    



    return (
        <>
            <div className="fixed top-0 right-0 w-5/6 h-14 bg-white border-b z-20">
                <div className="w-full h-full flex items-center justify-between pl-4 pr-6 gap-3">
                    <div className="text-lg">
                        <span>Pathname: </span>
                        <span className="font-semibold">{currentPath}</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="flex flex-col justify-end items-end">
                            <h6 className="font-bold text-sm mb-0">{user.name}</h6>
                            <p className="text-sm text-gray-500 mb-0">{user.email}</p>
                        </div>
                        <div>
                            <div className="relative h-10 w-10 rounded-full user__icon" style={{ background: `url(${user.icon}) center center / cover no-repeat rgb(238, 238, 238)` }}></div>
                        </div>
                        <Button className="logout__btn" onClick={handleLogout}>
                            <FaRegAngry />
                        </Button>
                    </div>
                </div>
            </div>
            <div className="w-1/6"></div>
            <div className="w-5/6 h-screen flex flex-col justify-start items-center relative overflow-hidden">
                {category !== 'inbox'
                    ? (
                        <div className="flex items-center justify-center h-full w-full">
                            <img src="https://i.imgur.com/yIG75Ed.png" alt="notfound" />
                        </div>
                    )
                    : (
                        <div className="flex items-center h-full w-full">
                            <Summary />
                            <Details />
                        </div>
                    )}

            </div>
        </>
    )
}

export default Index