import React from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import Footer from '../../07reactRouter/src/components/Footer/Footer'
import {Outlet} from 'react-router-dom'
function Layout() {
  return (
    <>
     <Sidebar/>
         <Outlet/>
     <Footer/>
    </>
  )
}

export default Layout