import { axiosPrivate } from '../Api/axios'
import { useEffect } from 'react'
import UseAuth from './UseAuth'
import UseRefreshToken from './UseRefreshToken'
const UseAxiosPrivate = () => {
  const { auth } = UseAuth()
  const refresh = UseRefreshToken()

  useEffect(() => {
    const requestInterceptor = axiosPrivate.interceptors.request.use(
      (config) => {
        if (!config.headers['Authorization']) {
          config.headers['Authorization'] = `Bearer ${auth?.accesstoken}`
        }
        return config
      },
      (error) => Promise.reject(error)
    )

    const responseIntercept = axiosPrivate.interceptors.response.use(
      (response) => response,
      async (error) => {
        const prevRequest = error?.config
        if (error?.response?.status === 403 && !prevRequest?.sent) {
          prevRequest.sent = true
          const newAccessToken = await refresh()
          prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`
          return axiosPrivate(prevRequest)
        }
        return Promise.reject(error)
      }
    )
    return () => {
      axiosPrivate.interceptors.response.eject(responseIntercept)
      axiosPrivate.interceptors.request.eject(requestInterceptor)
    }
  }, [auth, refresh])

  return axiosPrivate
}

export default UseAxiosPrivate
