import React from 'react'
import HeaderOneCSS from './HeaderOne.module.css'
import Profile from '../../../assets/profile.jpg'

const HeaderOne = () => {
  return (
    <div className={HeaderOneCSS.header}>
      <div className={HeaderOneCSS['header-center']}>
        <div className={HeaderOneCSS['header-center-img']}>
          <div></div>
        </div>
        <div className={HeaderOneCSS['header-center-btns']}>
          <a href='https://gray-billie-87.tiiny.site/' target='_blank'>
            <button>view resume</button>
          </a>
          <button>contact me</button>
        </div>
      </div>
    </div>
  )
}

export default HeaderOne