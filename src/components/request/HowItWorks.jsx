import React from 'react'
import { fill, submit, wait, claim } from '../../constants/icons'

const HowItWorks = () => {
  return (
    <div className='container'>
      <h2>How it works?</h2>
      <img src={fill} alt="" />
      <img src={submit} alt="" />
      <img src={wait} alt="" />
      <img src={claim} alt="" />
    </div>
  )
}

export default HowItWorks
