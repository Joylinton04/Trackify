import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import Menu from '../component/Menu'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='flex w-full font-text'>
      <Menu/>
      <div className='grow flex flex-col'>
        <div className='sticky top-0 bg-bg z-30'>
          <Navbar/>
        </div>
        <div className='grow'><Outlet/></div>
        <Footer/>
      </div>
    </div>
  )
}

export default Layout;