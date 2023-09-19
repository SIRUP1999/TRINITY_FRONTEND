import { useState, useEffect } from 'react'

const Time = () => {
  const [CurrentTime, setCurrentTime] = useState(new Date())
  useEffect(() => {
    const Interval = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    return () => clearInterval(Interval)
  }, [])

  return (
    <div>
      <p className='time'>{CurrentTime.toLocaleTimeString()}</p>
    </div>
  )
}

export default Time
