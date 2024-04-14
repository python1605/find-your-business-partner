import React from 'react'
import Navbar from '../Navbar'
import { Outlet } from 'react-router-dom'

const HomeLaout = () => {
  return (
    <div className='overflow-y-auto'>
        <div className='fixed z-10 w-full'><Navbar/></div>
        <div><Outlet/></div>
    </div>
  )
}

export default HomeLaout