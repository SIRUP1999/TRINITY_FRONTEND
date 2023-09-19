import axios from '../Api/axios'
import UseAuth from './UseAuth'
import { useNavigate } from 'react-router-dom'
const UseLogout = () => {
  const { setAuth } = UseAuth()
  const navigate = useNavigate()

  const Logout = async () => {
    setAuth({})
    try {
      await axios.post('/auth/logout', {
        withCredentials: true,
      })
      navigate('/')
    } catch (err) {
      console.log(err)
    }
  }
  return Logout
}

export default UseLogout
