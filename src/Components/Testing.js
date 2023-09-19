import { useState } from 'react'
import React from 'react'
// import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Testing = () => {
  const [userId, setUserId] = useState('')
  const [password, setPasswod] = useState('')
  const Navigate = useNavigate()

  const handleSubmmit = async (e) => {
    e.preventDefault()
    console.log({ userId, password })
    Navigate(`/allstudents/viewFees/${userId}`)
  }

  return (
    <section className='userinfo'>
      <form onSubmit={handleSubmmit}>
        <label htmlFor='ID' className='label_1'>
          ID:
        </label>
        <br />
        <input
          type='number'
          id='ID'
          className='input_log'
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          placeholder='Enter Student Id'
          required
        />
        <label htmlFor='password' className='label_1'>
          password:
        </label>
        <input
          type='password'
          id='password'
          className='input_log'
          value={password}
          onChange={(e) => setPasswod(e.target.value)}
          placeholder='Enter Password'
          required
        />
        <button className='btn'>submmit</button>
      </form>
    </section>
  )
}

export default Testing
