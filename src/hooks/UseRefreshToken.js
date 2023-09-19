import axios from '../Api/axios'
import UseAuth from './UseAuth'
const UseRefreshToken = () => {
  const { setAuth } = UseAuth()

  const handleRefresh = async () => {
    const response = await axios.get('/auth/refresh', {
      withCredentials: true,
    })
    setAuth((prev) => {
      console.log(JSON.stringify(prev))
      console.log(response.data.accesstoken)
      return {
        ...prev,
        roles: response.data.roles,
        accesstoken: response.data.accesstoken,
      }
    })

    return response.data.accesstoken
  }
  return handleRefresh
}

export default UseRefreshToken
