import { FaImages, FaNewspaper } from 'react-icons/fa'
// import { NavLink } from 'react-router-dom'
import Time from './Time'
import UseAuth from '../hooks/UseAuth'
import { useState, useEffect } from 'react'
import UseAxiosPrivate from '../hooks/UseAxiosPrivate'
//component
const DashHeader = () => {
  const axiosprivate = UseAxiosPrivate()
  const [term, setTerm2] = useState([])

  useEffect(() => {
    const GetTerm = async () => {
      try {
        const response = await axiosprivate.get('/term')
        // console.log(response.data.Term)
        setTerm2(response.data.Term)
      } catch (err) {
        console.log(err)
      }
    }
    GetTerm()
    const Interval = setInterval(GetTerm, 3000)
    return () => {
      clearInterval(Interval)
    }
  }, [])
  return (
    <div className='dash'>
      <Time className='time' />

      <FaImages className='Images' title='change home images' />
      <FaNewspaper className='Newspaper' title='anouncement' />
    </div>
  )
}

export default DashHeader
