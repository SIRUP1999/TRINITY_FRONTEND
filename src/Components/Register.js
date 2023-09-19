import { useState, useEffect, useRef } from 'react'
import { FaInfoCircle, FaTimes, FaCheck } from 'react-icons/fa'
import { ROLES } from '../config/roles'
import { useNavigate } from 'react-router-dom'
import UseAxiosPrivate from '../hooks/UseAxiosPrivate'
import io from 'socket.io-client'
const USERNAME_REGEX = /^[a-zA-Z][a-zA-Z0-9-_. ]{3,23}$/
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%&]).{8,24}$/
const REGISTER_URL = '/users'
// const socket = io('http://localhost:3500')
const Register = () => {
  const Private = UseAxiosPrivate()
  // refs
  const ErrRef = useRef()
  const UsernameRef = useRef()

  //navigation
  const Navigate = useNavigate()
  // Username
  const [username, setUsername] = useState('')
  const [validUsername, setvalidUsername] = useState(false)
  const [UsernameFocus, setUsernameFocus] = useState(false)
  //password
  const [password, setPassword] = useState('')
  const [Validpassword, setValidPassword] = useState(false)
  const [passwordFocus, setPasswordFocus] = useState(false)

  const [Matchpassword, setMatchPassword] = useState('')
  const [ValidpasswordMatch, setValidPasswordMatch] = useState(false)
  const [MatchpasswordFocus, setMatchPasswordFocus] = useState(false)

  const [active, setActive] = useState(false)
  const [roles, setRoles] = useState(['Employee'])
  const [errMsg, setErrorMsg] = useState('')

  useEffect(() => {
    const result = USERNAME_REGEX.test(username)
    setvalidUsername(result)
  }, [username])

  useEffect(() => {
    const result = PASSWORD_REGEX.test(password)
    setValidPassword(result)
    const match = password === Matchpassword
    setValidPasswordMatch(match)
  }, [password, Matchpassword])

  useEffect(() => {
    UsernameRef.current.focus()
  }, [])

  useEffect(() => {
    setErrorMsg('')
  }, [password, username, Matchpassword])

  const handleSubmmit = async (e) => {
    e.preventDefault()
    // if button is hacked
    const v1 = USERNAME_REGEX.test(username)
    const v2 = PASSWORD_REGEX.test(password)
    console.log({ username, password, active, roles })
    if (!v1 || !v2) {
      setErrorMsg('invalid input fields')
      return
    }
    try {
      const response = await Private.post(
        REGISTER_URL,
        JSON.stringify({ username, password, active, roles }),
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        }
      )
      // console.log(response.json)
      Navigate('/Login')
    } catch (err) {
      if (!err?.response) {
        setErrorMsg('No server response')
      } else if (err.response?.status === 409) {
        setErrorMsg('Username Taken')
      } else {
        setErrorMsg('Registration Failed')
      }
    }
    ErrRef.current.focus()
  }

  const options = Object.values(ROLES).map((role) => (
    <option key={role} value={role}>
      {role}
    </option>
  ))
  const onRolesChanged = (e) => {
    const values = Array.from(
      e.target.selectedOptions, //HTMLCollection
      (option) => option.value
    )
    setRoles(values)
  }
  return (
    <>
      <section className='section1'>
        <p
          ref={ErrRef}
          className={errMsg ? 'error' : 'offscreen'}
          aria-live='assertive'
        >
          {errMsg}
        </p>
        <h1 className='header1'>Register User</h1>
        <form onSubmit={handleSubmmit}>
          <label htmlFor='username'>
            Username:
            <span className={validUsername ? 'valid' : 'hide'}>
              <FaCheck />
            </span>
            <span className={validUsername || !username ? 'hide' : 'invalid'}>
              <FaTimes />
            </span>
          </label>
          <br />
          <input
            type='text'
            id='username'
            autoComplete='off'
            ref={UsernameRef}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder='Username'
            required
            aria-invalid={validUsername ? 'false' : 'true'}
            aria-describedby='usertxt'
            onFocus={() => setUsernameFocus(true)}
            onBlur={() => setUsernameFocus(false)}
          />

          <p
            id='usertxt'
            className={
              UsernameFocus && !validUsername ? 'instructions' : 'offscreen'
            }
          >
            <FaInfoCircle className='info' />
            4 to 24 characters.
            <br />
            Must begin with a letter.
            <br />
            Letters,numbers,underscores,hyphens allowed
          </p>
          <br />
          <label htmlFor='password'>
            Password:
            <span className={Validpassword ? 'valid' : 'hide'}>
              <FaCheck />
            </span>
            <span className={Validpassword || !password ? 'hide' : 'invalid'}>
              <FaTimes />
            </span>
          </label>
          <br />
          <input
            type='password'
            id='Password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            aria-invalid={!Validpassword ? 'true' : 'false'}
            aria-describedby='pwdtxt'
            onFocus={() => setPasswordFocus(true)}
            onBlur={() => setPasswordFocus(false)}
          />
          <p
            id='pwdtxt'
            className={
              passwordFocus && !Validpassword ? 'instructions' : 'offscreen'
            }
          >
            <FaInfoCircle className='info' />
            8 to 24 characters.
            <br />
            Must include Uppercase and lowercase letters, a number and a special
            character.
            <br /> Allowed special characters:
            <span aria-label='exclamation mark'>!</span>,
            <span aria-label='at symbol'>@</span>,
            <span aria-label='hashtag'>#</span>,
            <span aria-label='dollar sign'>$</span>,
            <span aria-label='percent'>%</span>,
          </p>
          <br />
          <label htmlFor='confirm_password'>
            Confirm password:
            <label
              className={
                ValidpasswordMatch || !Matchpassword ? 'hide' : 'invalid'
              }
            >
              <FaTimes />
            </label>
            <label
              className={ValidpasswordMatch && Matchpassword ? 'valid' : 'hide'}
            >
              <FaCheck />
            </label>
          </label>
          <br />
          <input
            type='password'
            id='confirm_password'
            placeholder='Confirm password'
            value={Matchpassword}
            onChange={(e) => setMatchPassword(e.target.value)}
            required
            aria-invalid={ValidpasswordMatch ? 'false' : 'true'}
            aria-describedby='cmpwdtxt'
            onFocus={() => setMatchPasswordFocus(true)}
            onBlur={() => setMatchPasswordFocus(false)}
          />
          <p
            id='cmpwdtxt'
            className={
              MatchpasswordFocus && !Matchpassword
                ? 'instructions'
                : 'offscreen'
            }
          >
            <FaInfoCircle className='info' />
            Must Match The Previouse password Field
          </p>
          <br />
          <div className='checks'>
            <label htmlFor='checkbox' className='check'>
              Active:
            </label>

            <input
              type='checkbox'
              id='checkbox1'
              className='check'
              value={active}
              onChange={() => setActive(!active)}
            />
          </div>
          <br />
          <label htmlFor='roles' className='roles'>
            ASSIGNED ROLES:
          </label>
          <select
            className='select1'
            id='roles'
            name='roles'
            multiple={true}
            size='3'
            value={roles}
            onChange={onRolesChanged}
          >
            {options}
          </select>
          <br />
          <button
            title='Sign him up Pastor'
            className='btn'
            disabled={
              !validUsername || !Validpassword || !ValidpasswordMatch
                ? true
                : false
            }
          >
            Sign up
          </button>
        </form>
      </section>
    </>
  )
}
export default Register
