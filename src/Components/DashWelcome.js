import React from 'react'
import DateComponent from './DateComponent'
import UseAuth from '../hooks/UseAuth'
import { useState, useEffect } from 'react'
import UseAxiosPrivate from '../hooks/UseAxiosPrivate'
const DashWelcome = () => {
  const { auth, socket } = UseAuth()
  const [updated, setUpdated] = useState([])
  const [updated4, setUpdated4] = useState([])
  const axiosprivate = UseAxiosPrivate()
  useEffect(() => {
    const Handlenotification = async () => {
      try {
        const response = await axiosprivate('/Fees')
        setUpdated(response.data)
      } catch (err) {
        console.log(err)
      }
    }
    const interval = setInterval(() => {
      Handlenotification()
    }, 5000)

    return () => {
      clearInterval(interval)
    }
  }, [axiosprivate])
  useEffect(() => {
    const HandlenotificationTerm = async () => {
      try {
        const response = await axiosprivate('/term')
        setUpdated4(response.data)
      } catch (err) {
        console.log(err)
      }
    }
    const interval = setInterval(() => {
      HandlenotificationTerm()
    }, 5000)

    return () => {
      clearInterval(interval)
    }
  }, [axiosprivate])

  console.log(updated)
  const updatedid = updated.filter(
    (updates) => updates.update2 === true && updates.term === updated4.Term
  )
  // const ids = updatedid.filter((ids) => {
  //   return ids.term === updated4
  // })
  const updatedisplay = updatedid.map((element2) => {
    return element2.student_id
  })

  const WelcomeMessage = <DateComponent />
  const slides = [
    {
      Welcome: 'Welcome!, ' + `${auth?.username || ''} ` + 'is... ',
    },
    {
      Date: WelcomeMessage,
    },
    {
      Notification: updatedisplay.length
        ? updatedisplay.length > 1
          ? "student ID's: " + `${updatedisplay} Updated`
          : 'Student ID: ' + `${updatedisplay} Updated`
        : 'No Updates at the moment',
    },
  ]
  const interval = 5000
  const [currentSlide, setCurrentSlide] = useState(0)
  // Slideshow.js

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
    }, interval)

    return () => clearInterval(slideInterval)
  }, [slides.length, interval])

  // console.log(auth)
  return (
    <div>
      <div className='text3'>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
          >
            {slide.Welcome}
            {slide.Date}
            {slide.Notification}
          </div>
        ))}
      </div>
    </div>
  )
}

export default DashWelcome
