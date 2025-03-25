import React from 'react'
import Nav from './components/Nav'
import { Outlet } from 'react-router'

function Layout() {
  return (

    <div className='h-screen app-bg flex items-center justify-center'>
    <div className='flex gap-3 h-[95%] w-[90%] max-w-[1666px]'>
    <div className=' flex-1 h-full flex flex-col'><Nav/></div>
    <div className=' flex-5 h-full w-full'><Outlet/></div>
    </div>
    </div>
  )
}

export default Layout