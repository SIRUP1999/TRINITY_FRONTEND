import React from 'react'
import { useRef, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from '../Api/axios'
import UseAuth from '../hooks/UseAuth'
import allowedRoles from '../config/AllowedRoles'
const Login = () => {
  const Navigate = useNavigate()
  //refs
  const LoginRef = useRef()
  const errRef = useRef()
  //states
  const [username, SetUsername] = useState('')
  const [password, SetPassword] = useState('')
  const [errorMsg, setErrorMsg] = useState('')
  // const [successMsg, setSucessMsg] = useState(false)
  const { auth, setAuth } = UseAuth()
  //handleSubmmit
  const handleSubmmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post(
        '/auth/login',
        JSON.stringify({ password, username }),
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        }
      )
      // SetUsername('')
      // SetPassword('')
      // setSucessMsg(true)
      setAuth(response.data)
      // console.log(JSON.stringify(response.data))
      // console.log(JSON.stringify(response.data.roles))
      const accesstoken = response?.data?.accesstoken
      const roles = response?.data?.roles
      setAuth({ username, password, accesstoken, roles })
      if (auth?.roles?.find((role) => role === allowedRoles.Employee)) {
        Navigate('/')
      } else if (auth?.roles?.find((role) => role === allowedRoles.Manager)) {
        Navigate('/allstudents')
      } else if (auth?.roles?.find((role) => role === allowedRoles.Admin)) {
        Navigate('/Dashboard')
      }
    } catch (err) {
      if (!err.response) {
        setErrorMsg('No server Response')
      } else if (err.response.status === 400) {
        setErrorMsg('Missing Username or Password')
      } else if (err.response.status === 401) {
        setErrorMsg('Unauthorize')
      } else {
        setErrorMsg('Login Failed')
      }
      errRef.current.focus()
    }
  }
  //useState
  useEffect(() => {
    LoginRef.current.focus()
  }, [])

  useEffect(() => {
    setErrorMsg('')
  }, [password, username])
  return (
    <main className='main_login'>
      <p
        ref={errRef}
        className={errorMsg ? 'error' : 'offscreen'}
        aria-live='assertive'
      >
        {errorMsg}
      </p>
      <h1 className='sign_in'>Sign In</h1>
      <form className='form' onSubmit={handleSubmmit}>
        <label htmlFor='Username'>Username :</label>
        <br />
        <input
          id='Username'
          type='text'
          className='Input'
          ref={LoginRef}
          value={username}
          onChange={(e) => SetUsername(e.target.value)}
          autoComplete='off'
          required
          placeholder='enter username'
        />
        <br />
        <label htmlFor='password'>Password :</label>
        <br />
        <input
          id='Password'
          type='Password'
          className='Input'
          value={password}
          onChange={(e) => SetPassword(e.target.value)}
          autoComplete='off'
          required
          placeholder='enter Password'
        />
        <br />
        <button className='btn' type='submit' onClick={handleSubmmit}>
          sign in
        </button>
      </form>
    </main>
  )
}

export default Login
