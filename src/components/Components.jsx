import React from 'react'
import Footer from './footer/Footer'
import Header from './header/Header'
import Main from './main/Main'
import { aboutMe } from '../data/data'

const Components = ({github}) => {
  return (
    <div>
        <Header />
        <Main github={github}/>
        <Footer aboutMe={aboutMe}/>
    </div>
  )
}

export default Components