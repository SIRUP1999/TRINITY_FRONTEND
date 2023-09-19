import { Outlet } from 'react-router-dom'
import { useState, useEffect } from 'react'
import UseRefreshToken from '../hooks/UseRefreshToken'
import UseAuth from '../hooks/UseAuth'
import { PropagateLoader } from 'react-spinners'

const PersistLogin = () => {
  const [isloading, setIsloading] = useState(true)
  const { auth } = UseAuth()
  const refresh = UseRefreshToken()

  useEffect(() => {
    const VerifyRefresh = async () => {
      try {
        await refresh()
      } catch (err) {
        console.log(err)
      } finally {
        setIsloading(false)
      }
    }
    !auth?.accesstoken ? VerifyRefresh() : setIsloading(false)
  }, [auth, refresh])
  return <>{isloading ? <PropagateLoader color='red' /> : <Outlet />}</>
}

export default PersistLogin
