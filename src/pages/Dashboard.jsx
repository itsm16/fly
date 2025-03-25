import React from 'react'
import BottomDashboard from '../components/Dashboard/BottomDashboard'
import TopDashboard from '../components/Dashboard/TopDashboard'

function Dashboard() {
  return (
    <div className='flex flex-col w-full h-full gap-4'>
      <div className='h-[45%]'>
      <TopDashboard/>
      </div>
      <div className='h-[55%]'><BottomDashboard/></div>
    </div>
  )
}

export default Dashboard