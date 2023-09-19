import React from 'react'
import { useState } from 'react'
import UseAxiosPrivate from '../hooks/UseAxiosPrivate'
import UseAuth from '../hooks/UseAuth'
const TermlyFees = () => {
  const { setAuth } = UseAuth()
  const [TermlyFees, setTermlyFees] = useState(0)
  const axiosPrivate = UseAxiosPrivate()
  const TermlyEnd = '/Termly'
  const handleFees = (e) => {
    e.preventDefault()
    try {
      const response = axiosPrivate.post(
        TermlyEnd,
        JSON.stringify(TermlyFees),
        {
          header: {
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        }
      )
      setAuth(response.data)
      console.log(JSON.stringify(response.data))
    } catch (err) {}
  }
  return (
    <>
      <form>
        <label htmlFor='Termlyfee'>School Fees</label>
        <input
          id='Termlyfee'
          type='number'
          value={TermlyFees}
          onChange={(e) => setTermlyFees(e.target.value)}
        />
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default TermlyFees
