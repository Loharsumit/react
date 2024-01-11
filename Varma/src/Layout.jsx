import React from 'react'
import Footer from './components/Footer/Footer.jsx'
import {Outlet} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'

function Layout() {
  return (
    <>
     <Navbar/>
       <Outlet/>
     <Footer/>
    </>
  )
}

export default Layout