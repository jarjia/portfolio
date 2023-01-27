import React from 'react'
import SectionFourCSS from './SectionFour.module.css'
import { workExperience, education } from '../../../data/data'

const SectionFour = () => {
  return (
    <section className={SectionFourCSS['section-4']} id='experience'>
      <div className={SectionFourCSS['section-4-work']}>
        <h2>Work Experience</h2>
        {workExperience.length < 1 && <h3>No Work Experience For Now...</h3>}
      </div>
      <div className={SectionFourCSS['section-4-edu']}>
        <h2>Education</h2>
        {education.map(edu => {
          return <div key={edu.name_of_residence} className={SectionFourCSS['section-4-edu-single']}>
            <div className={SectionFourCSS['section-4-edu-single-1']}>
              <h3>{edu.education_residence}</h3>
              <span>{edu.duration}</span>
            </div>
            <div className={SectionFourCSS['section-4-edu-single-2']}>
              <h3>{edu.name_of_residence}</h3>
              <span>{edu.location}</span>
            </div>
          </div>
        })}
      </div>
    </section>
  )
}

export default SectionFour