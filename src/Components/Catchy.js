import React, { useState } from 'react'
// import Slideshow from './Slideshow'
import image3 from '../assets/main.jpg'
import image4 from '../assets/IMG-20230811-WA0004.jpg'
import image1 from '../assets/IMG-20230811-WA0008.jpg'
import image2 from '../assets/IMG-20230811-WA0014.jpg'
const Catchy = () => {
  const [activeSlide, setActiveSlide] = useState(0)

  const Slides = [
    {
      image: image1,
      title: 'Welcome to our fun world',
      decription: 'exploregames,learn new Things,and have Fun',
    },
    {
      image: image2,
      title: 'Meet Our Friendly Teachers',
      decription: 'Join us on Exciting Adventures With Our Teachers',
    },
    {
      image: image3,
      title: 'Learn More Fun',
      decription: 'Discover educational ContentThat Sparks Curiosity',
    },
    {
      image: image4,
      title: 'Learn More Fun',
      decription: 'Discover educational ContentThat Sparks Curiosity',
    },
  ]

  const handleSlideChange = (direction) => {
    setActiveSlide((prevSlide) => {
      const totalSlide = Slides.length
      let nextSlides = prevSlide + direction
      if (nextSlides < 0) {
        nextSlides = totalSlide - 1
      } else if (nextSlides >= totalSlide) {
        nextSlides = 0
      }
      return nextSlides
    })
  }

  return (
    <div className='home-page'>
      <div className='slider-container'>
        <button
          className='slider-btn left'
          onClick={() => handleSlideChange(-1)}
        >
          &lt;
        </button>
        <div className='slide100'>
          <img src={Slides[activeSlide].image} alt={`Slide ${activeSlide}`} />
          <div className='slide_content'>
            <h2>{Slides[activeSlide].title}</h2>
            <p>{Slides[activeSlide].decription}</p>
          </div>
        </div>
        <button
          className='slider-btn-right'
          onClick={() => handleSlideChange(1)}
        >
          &gt;
        </button>
      </div>
      <div className='cta-section'>
        <h3>Join the fun today!</h3>
        <p>
          explore our games ,learn new things and embark on exciting adventures
        </p>
        <button className='cta-btn'>Get Started</button>
      </div>
    </div>
  )
}

export default Catchy
