import React from 'react'
import { useState } from 'react'
import HeaderOne from './headerOne/HeaderOne'
import Navbar from './navbar/Navbar'
import SideBar from './sidebar/SideBar'

const Header = () => {
  const [sideBar, setSideBar] = useState(false)

  const handleSideBar = () => {
    setSideBar(prev => !prev)
  }

  return (
    <header>
        <Navbar handleSideBar={handleSideBar}/>
        <SideBar handleSideBar={handleSideBar} sideBar={sideBar ? 'show-aside' : 'aside'}/>
        <HeaderOne handleSideBar={handleSideBar} sideBar={sideBar}/>
    </header>
  )
}

export default Header