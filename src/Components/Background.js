import React from 'react'

import image1 from '../assets/main.jpg'
import image2 from '../assets/IMG-20230811-WA0006.jpg'
import image3 from '../assets/IMG-20230811-WA0008.jpg'
import image4 from '../assets/IMG-20230811-WA0011.jpg'
import image5 from '../assets/IMG-20230811-WA0014.jpg'
const Background = () => {
  return (
    <div className='home-page-container'>
      <div className='background-images'>
        <div
          className='background-image'
          style={{ backgroundImage: `url(${image1})` }}
        />
        <div
          className='background-image'
          style={{ backgroundImage: `url(${image2})` }}
        />
        <div
          className='background-image'
          style={{ backgroundImage: `url(${image3})` }}
        />
        <div
          className='background-image'
          style={{ backgroundImage: `url(${image4})` }}
        />
        <div
          className='background-image'
          style={{ backgroundImage: `url(${image5})` }}
        />
      </div>
    </div>
  )
}

export default Background
