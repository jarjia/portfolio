import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import HeaderOne from './headerOne/HeaderOne'
import Navbar from './navbar/Navbar'
import SideBar from './sidebar/SideBar'

const Header = () => {
  const [sideBar, setSideBar] = useState(false)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  });

  const handleSideBar = () => {
    setSideBar(prev => !prev)
  }

  return (
    <header>
        <Navbar handleSideBar={handleSideBar}/>
        {windowWidth <= 820 && <SideBar handleSideBar={handleSideBar} sideBar={sideBar ? 'show-aside' : 'aside'}/>}
        <HeaderOne handleSideBar={handleSideBar} sideBar={sideBar}/>
    </header>
  )
}

export default Header