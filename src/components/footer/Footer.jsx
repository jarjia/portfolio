import React from 'react'
import BottomNav from './bottomNav/BottomNav'
import FooterOne from './footer/FooterOne'

const Footer = ({aboutMe}) => {
  return (
    <footer>
        <FooterOne aboutMe={aboutMe}/>
        <BottomNav />
    </footer>
  )
}

export default Footer