import React from 'react'
import SectionTwo from './sectionTwo/SectionTwo'
import SectionOne from './sectionOne/SectionOne'
import SectionThree from './sectionThree/SectionThree'
import SectionFour from './sectionFour/SectionFour'
import { aboutMe } from '../../data/data'

const Main = () => {
  return (
    <>
      <main>
        <SectionOne aboutMe={aboutMe}/>
        {/* <SectionTwo />
        <SectionThree />
        <SectionFour /> */}
      </main>
    </>
  )
}

export default Main