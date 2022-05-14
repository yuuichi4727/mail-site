import { useEffect, useState } from 'react'
import { NavLink, useParams, useLocation } from 'react-router-dom'
import { messages } from '../../database/messages'



const test = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function Index() {
    const [summaryItems, setSummaryItems] = useState([])
    const { folder, category } = useParams()
    const location = useLocation()
    const currentId = location.pathname.split("/")[4]

    useEffect(() => {
        const items = messages.filter(message => message.folder === folder)
        setSummaryItems(items)
    }, [folder])


    return (
        <div className="w-1/4 h-full border-r border-gray-300 relative overflow-hidden top-14 ">
            {folder ? (
                <div className="overflow-scroll scroll__bar">
                    {summaryItems.map((item, index) => (
                        <NavLink to={`${category}/${folder}/${item.id}`} key={index} className={`flex justify-start items-start w-full px-4 py-4 gap-4 border-b border-gray-300 cursor-pointer hover:bg-gray-200` + (currentId == item.id ? ' seletcted__mail' : '')}>
                            <div className="w-1/6">
                                <img src={`${item.from.icon}`} className="relative w-full pt-full rounded-full" />
                            </div>
                            <div className="w-5/6 flex flex-col items-start justify-between">
                                <div className="flex items-center justify-between w-full text-sm text-gray-500 font-medium">
                                    <p>{item.from.name}</p>
                                    <p>{(new Date(item.date)).toLocaleString().split(',')[0]}</p>
                                </div>
                                <div>
                                    <h3 className="text-md font-bold w-full line-clamp-1">
                                        {item.title}
                                    </h3>
                                </div>
                                <div className="w-full">
                                    <div className="w-full text-sm line-clamp-3 text-gray-500 ">
                                        {item.body.substring(0, 250)}...
                                    </div>
                                </div>
                            </div>
                        </NavLink>
                    ))}
                </div>
            ) : (
                <div className="flex items-center justify-center h-full">
                    <p className="text-3xl text-center">Please choose a folder</p>
                </div>
            )}
        </div>
    )
}

export default Index