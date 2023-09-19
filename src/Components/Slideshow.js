// Slideshow.js

import React, { useState, useEffect } from 'react'

const Slideshow = ({ slides, interval = 3000 }) => {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
    }, interval)

    return () => clearInterval(slideInterval)
  }, [slides.length, interval])

  return (
    <div className='slideshow-container'>
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === currentSlide ? 'active' : ''}`}
        >
          <img src={slide.image} alt={slide.alt} />
          <div className='slide-content'>
            <h2>{slide.title}</h2>
            <p>{slide.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Slideshow
