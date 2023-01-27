import React, {useState} from 'react'
import SectionThreeCSS from './SectionThree.module.css'
import { portfolios } from '../../../data/data'
import gh from '../../../assets/gh-logo.png'

const SectionThree = () => {
  const [newPortfolio, setNewPortfolio] = useState(portfolios)

  const handleHover = id => {
    setNewPortfolio(item => item.map(port => port.id === id ? {...port, isHovered: true} : port))
  }

  const handleLeave = id => {
    setNewPortfolio(item => item.map(port => port.id === id ? {...port, isHovered: false} : port))
  }

  return (
    <section className={SectionThreeCSS['section-3']} id='portfolio'>
      <h2>My Portfolio</h2>
      <div className={SectionThreeCSS['section-3-portfolios']}>
        {newPortfolio.map(item => {
          return <div key={item.id}>
            <h3>{item.project_name}</h3>
            <div
                className={SectionThreeCSS['section-3-portfolios-single']} 
                style={{backgroundImage: `url(${item.image})`}}
                onMouseOver={() => handleHover(item.id)}
                onMouseLeave={() => handleLeave(item.id)}
              >
                <div className={SectionThreeCSS['section-3-portfolios-single-img-cont']}>
                  {item.isHovered && <aside>
                    <aside>
                      <a href={item.github_link} target='_blank' rel="noopener noreferrer"><img src={gh} alt='github logo' width='50%' height='50%'/>
                      <span>Github Link</span></a>
                    </aside>
                    <aside>
                      <a href={item.host_link} target='_blank' rel="noopener noreferrer"><img src={gh} alt='github logo' width='50%' height='50%'/>
                      <span>Host Link</span></a>
                    </aside>
                  </aside>}
                </div>
            </div> 
          </div>
        })}
      </div>
    </section>
  )
}

export default SectionThree