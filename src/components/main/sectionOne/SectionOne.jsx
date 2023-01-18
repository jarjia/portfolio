import { useEffect } from 'react'
import SectionOneCSS from './SectionOne.module.css'

const SectionOne = ({aboutMe}) => {
  return (
    <section className={SectionOneCSS['section-1']}>
      <div className={SectionOneCSS['section-1-1']}>
        <h1>basic information</h1>
        <div className={SectionOneCSS['section-1-1-div']}>
          <strong>Fullname: </strong>
          <span>{aboutMe.fullName}</span>
        </div>
        <div className={SectionOneCSS['section-1-1-div']}>
          <strong>Email: </strong>
          <span>{aboutMe.email}</span>
        </div>
        <div className={SectionOneCSS['section-1-1-div']}>
          <strong>Age: </strong>
          <span>{aboutMe.age}</span>
        </div>
        <div className={SectionOneCSS['section-1-1-div']}>
          <strong>Phone: </strong>
          <span>{aboutMe.phone}</span>
        </div>
        <div className={SectionOneCSS['section-1-1-div']}>
          <strong>Location: </strong>
          <span>{aboutMe.residentOf}</span>
        </div>
        <div className={SectionOneCSS['section-1-1-div']}>
          <strong>Languages: </strong>
          <span>
            {aboutMe.languages.map(item => {
              return <span key={item}>{(aboutMe.languages.indexOf(item) === aboutMe.languages.length - 1) 
                ? `${item}` : `${item}, `}</span>
            })}
          </span>
        </div>
        <a href='https://yinkci.github.io/portfolio/'><button>contact me</button></a>
      </div>
      <div className={SectionOneCSS['section-1-2']}>
        <h1>about me</h1>
        <h4>Hello, I am Jarji Abuashvili a web developer.</h4>
        <p>I have been developing web apps for year and half, I am motivated and always looking out for new oppurtunities.I have experience of developing web apps mainly using React.js and JavaScript. </p>
        <p>My Objective is to find stable company where I can improve my skills and experience as a junior web developer or as an intership candidate. I have created various React.js projects and in conclusion while doing this projects I find myself very determined and consistent.</p>
      </div>
      <div className={SectionOneCSS['section-1-3']}></div>
    </section>
  )
}

export default SectionOne