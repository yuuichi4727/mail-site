import { useEffect, useState } from 'react'
import { Button } from 'antd'
import { messages } from '../../database/messages'
import { useParams, useLocation } from 'react-router-dom'


function Index() {
    const { folder, id } = useParams()
    let mailDetail = messages.find(message => message.id == id)




    return (
        <div className="w-3/4 h-full top-14 relative">
            {folder && !id ? (
                <div className="w-full h-full flex items-center justify-center">
                    <span className="text-3xl">Please choose an email</span>
                </div>
            ) : id ? (
                <div className="overflow-y-auto scroll__bar">
                    <div className="p-6">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10">
                                    <img src={mailDetail.from.icon} className="relative w-full pt-full rounded-full" />
                                </div>
                                <div className="flex flex-col">
                                    <h2 className="text-md font-semibold flex-1 mb-0">{mailDetail.from.name}</h2>
                                    <p className="text-sm text-gray-500 font-light mb-0">{mailDetail.from.email}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <p className="text-sm text-gray-500 font-light mb-0">{(new Date(mailDetail.date)).toLocaleString().split(',')[1]}, {(new Date(mailDetail.date)).toLocaleString().split(',')[0]}</p>
                                <div className="flex items-center justify-end gap-2">
                                    <Button className="btn reply__btn">Reply</Button>
                                    <Button className="btn forward__btn">Forward</Button>
                                    <Button className="btn delete__btn">Delete</Button>
                                </div>
                            </div>
                        </div>
                        <div className="py-12">
                            <h2 className="text-4xl font-semibold mb-8">{mailDetail.title}</h2>
                            <div className="border-b pb-8 text-lg">
                                <div>
                                    {mailDetail.body}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="w-full h-full flex items-center justify-center">
                    <span className="text-3xl">Please choose a folder</span>
                </div>

            )}
        </div>
    )
}

export default Index

{/* <div className="w-full h-full flex items-center justify-center text-3xl">
        Please choose an email
      </div> */}


