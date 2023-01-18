import React from 'react'
import LoadingCSS from './Loading.module.css'

const Loading = () => {
  return (
    <div className={LoadingCSS.parent}>
      <div className={LoadingCSS.loading}>
        <div className={LoadingCSS.dot}></div>
        <div className={LoadingCSS.dot}></div>
        <div className={LoadingCSS.dot}></div>
        <div className={LoadingCSS.dot}></div>
        <div className={LoadingCSS.dot}></div>
      </div>
      <h1 className={LoadingCSS.title}>J.Abuashvili</h1>
    </div>
  )
}

export default Loading