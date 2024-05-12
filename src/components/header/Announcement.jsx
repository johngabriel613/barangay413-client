import React from 'react'
import { megaphone } from '../../constants/icons'

const Announcement = () => {
  return (
      <div className='bg-green-100 text-green-800 py-2'>
        <div className='marquee'>
          <div className='moving flex'>
            <img src={megaphone} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo pariatur alias vitae corporis, at officia, aliquam voluptate ipsum hic in aperiam repudiandae ratione esse, rerum ut quidem doloribus tempore officiis. Sunt, temporibus!</p>
          </div>
        </div>
      </div>
  )
}

export default Announcement
