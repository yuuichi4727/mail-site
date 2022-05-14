import React from 'react'
import { NavLink,  useParams, useLocation, Outlet} from 'react-router-dom'



const folderList = [
    "inbox",
    "sent",
    "reminder",
    "spam",
    "favorite",
    "junks",
    "drafts"
]

function Index() {
    const {category} = useParams()
    const location = useLocation()
    const currentFolder = location.pathname.split("/")[3]



    return (
        <div className="w-4/5 h-full bg-blue-800 flex flex-col items-start justify-start">
            {category === 'inbox'
                ? (
                    <>
                        {folderList.map((folder, index) => (
                            <NavLink key={index} to={`${folder}`} className={`capitalize text-white flex w-full h-14 items-center justify-start pl-12 font-light text-md text-lg` + (currentFolder === folder ? ' sidebar__active-folder': '')}>{folder}</NavLink>
                        ))}
                    </>
                )
                : (
                    <div className="text-white text-center w-full py-16 text-lg">Construction</div>
                )}
        </div>
    )
}

export default Index