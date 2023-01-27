import SectionTwoCSS from './SectionTwo.module.css'
import { skills1, skills2, skills3, skills4 } from '../../../data/data'
import { useState } from 'react'

const SectionTwo = () => {
  const [skillOne, setSkillOne] = useState(skills1)
  const [skillTwo, setSkillTwo] = useState(skills2)
  const [skillThree, setSkillThree] = useState(skills3)
  const [skillFour, setSkillFour] = useState(skills4)

  const handleHover = (id) => {
    setSkillOne(item => item.map(skill => skill.id === id ? {...skill, isHovered: true} : skill))
    setSkillTwo(item => item.map(skill => skill.id === id ? {...skill, isHovered: true} : skill))
    setSkillThree(item => item.map(skill => skill.id === id ? {...skill, isHovered: true} : skill))
    setSkillFour(item => item.map(skill => skill.id === id ? {...skill, isHovered: true} : skill))
  }

  const handleLeave = (id) => {
    setSkillOne(item => item.map(skill => skill.id === id ? {...skill, isHovered: false} : skill))
    setSkillTwo(item => item.map(skill => skill.id === id ? {...skill, isHovered: false} : skill))
    setSkillThree(item => item.map(skill => skill.id === id ? {...skill, isHovered: false} : skill))
    setSkillFour(item => item.map(skill => skill.id === id ? {...skill, isHovered: false} : skill))
  }

  return (
    <section className={SectionTwoCSS['section-2']} id='skills'>
      <h2>Main Skills</h2>
      <div className={SectionTwoCSS['section-2-1']}>
        <div className={`${SectionTwoCSS['section-2-1-skills']}`}>
          <div>
            <ul>
              <div>
                <h3>Programming</h3>
              </div>
              {skillOne.map(item => {
                let listClass = item.isHovered ? 'list-animation' : 'list-without-animation'
                return <li
                    key={item.id}
                    className={SectionTwoCSS[`${listClass}`]} 
                    onMouseOver={() => handleHover(item.id)}
                    onMouseLeave={() => handleLeave(item.id)}
                  >{item.skill} <br></br>
                  {item.isHovered && <span>{item.desc}</span>}
                  </li>
              })}
            </ul>
            <ul>
              <div>
                <h3>Libraries & Frameworks</h3>
              </div>
              {skillTwo.map(item => {
                let listClass = item.isHovered ? 'list-animation' : 'list-without-animation'
                return <li
                    key={item.id}
                    className={SectionTwoCSS[`${listClass}`]} 
                    onMouseOver={() => handleHover(item.id)}
                    onMouseLeave={() => handleLeave(item.id)}
                  >{item.skill} <br></br>
                  {item.isHovered && <span>{item.desc}</span>}
                  </li>
              })}
            </ul>
          </div>
        </div>
        <div className={SectionTwoCSS['section-2-1-skills']}>
          <div>
          <ul>
              <div>
                <h3>Styling & Design</h3>
              </div>
              {skillThree.map(item => {
                let listClass = item.isHovered ? 'list-animation' : 'list-without-animation'
                return <li
                    key={item.id}
                    className={SectionTwoCSS[`${listClass}`]}
                    onMouseOver={() => handleHover(item.id)}
                    onMouseLeave={() => handleLeave(item.id)}
                  >{item.skill} <br></br>
                  {item.isHovered && <span>{item.desc}</span>}
                  </li>
              })}
            </ul>
            <ul>
              <div>
                <h3>Others</h3>
              </div>
              {skillFour.map(item => {
                let listClass = item.isHovered ? 'list-animation' : 'list-without-animation'
                return <li
                    key={item.id}
                    className={SectionTwoCSS[`${listClass}`]} 
                    onMouseOver={() => handleHover(item.id)}
                    onMouseLeave={() => handleLeave(item.id)}
                  >{item.skill} <br></br>
                  {item.isHovered && <span>{item.desc}</span>}
                  </li>
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionTwo