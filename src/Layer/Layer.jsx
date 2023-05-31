import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer/Footer'
import Navbar from './Navbar/Navbar'
import "./Layer.scss"

const Layer = () => {
  return (
    <div className="Layer">
    <Navbar/>
    <Outlet/>
    <Footer/>
    </div>
    
  )
}

export default Layer