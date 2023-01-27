import React from 'react'
import SectionTwo from './sectionTwo/SectionTwo'
import SectionOne from './sectionOne/SectionOne'
import SectionThree from './sectionThree/SectionThree'
import SectionFour from './sectionFour/SectionFour'
import { aboutMe } from '../../data/data'

const Main = ({github}) => {
  return (
    <>
      <main>
        <SectionOne aboutMe={aboutMe} github={github}/>
        <SectionTwo />
        <SectionThree />
        <SectionFour />
      </main>
    </>
  )
}

export default Main