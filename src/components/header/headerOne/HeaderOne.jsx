import React from 'react'
import HeaderOneCSS from './HeaderOne.module.css'

const HeaderOne = () => {
  return (
      <div className={HeaderOneCSS.header}>
        <div className={HeaderOneCSS['header-center']}>
          <div className={HeaderOneCSS['header-center-img']}>
            <div className={HeaderOneCSS['header-center-img-profile']}></div>
          </div>
          <div className={HeaderOneCSS['header-center-btns']}>
            <a href='#footer'>
              <button>contact me</button>
            </a>
          </div>
        </div>
      </div>
  )
}

export default HeaderOne