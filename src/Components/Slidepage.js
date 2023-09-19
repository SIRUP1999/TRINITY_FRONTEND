// HomePage.js

import React from 'react'
import Slideshow from './Slideshow'
import image3 from '../assets/IMG-20230811-WA0004.jpg'
import image4 from '../assets/IMG-20230811-WA0006.jpg'
import image1 from '../assets/IMG-20230811-WA0008.jpg'
import image2 from '../assets/main.jpg'
import image5 from '../assets/IMG-20230811-WA0014.jpg'
import image6 from '../assets/IMG-20230811-WA0011.jpg'
const SlidePage = () => {
  // Sample slide data
  const slides = [
    {
      image: image4,
      alt: 'Slide 1',
      title: 'Welcome to Trinity Christian Mission School!',
      description:
        'We believe in fostering a nurturing and inclusive learning environment...',
    },
    {
      image: image3,
      alt: 'Slide 2',
      title: 'Our Vision',
      description:
        'Our vision is to empower young minds to become confident, compassionate...',
    },
    {
      image: image1,
      alt: 'Slide 2',
      title: 'Our Vision',
      description:
        'Our vision is to empower young minds to become confident, compassionate...',
    },
    {
      image: image2,
      alt: 'Slide 2',
      title: 'Our Vision',
      description:
        'Our vision is to empower young minds to become confident, compassionate...',
    },
    {
      image: image5,
      alt: 'Slide 2',
      title: 'Our Vision',
      description:
        'Our vision is to empower young minds to become confident, compassionate...',
    },
    {
      image: image6,
      alt: 'Slide 2',
      title: 'Our Vision',
      description:
        'Our vision is to empower young minds to become confident, compassionate...',
    },
    // Add more slides as needed
  ]

  return (
    <div>
      <header>
        <h1>Trinity Christian School!</h1>
      </header>
      <main>
        <Slideshow slides={slides} interval={3000} />
      </main>
    </div>
  )
}

export default SlidePage
