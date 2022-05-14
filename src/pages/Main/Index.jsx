import React from 'react'
import Sidebar from '../../components/Sidebar/Index'
import MainContainer from '../../components/MainContainer/Index'

function Index() {
  return (
    <div className="w-full min-h-screen flex items-center relative">
      <Sidebar />
      <MainContainer />
    </div>
  )
}

export default Index