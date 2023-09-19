import React from 'react'
import { Link } from 'react-router-dom'
const Missing = () => {
  return (
    <div className='Missing'>
      <h2>
        You are Maybe Not Authorize to visit this route ,Or may not be Available
      </h2>
      <Link to='/'>Go home</Link>
    </div>
  )
}

export default Missing
