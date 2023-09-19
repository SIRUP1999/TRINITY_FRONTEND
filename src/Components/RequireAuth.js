import React from 'react'
import { useLocation, Navigate, Outlet } from 'react-router-dom'
import UseAuth from '../hooks/UseAuth'
const RequireAuth = ({ allowedRoles }) => {
  const { auth } = UseAuth()
  const Location = useLocation()

  return auth?.roles?.find((role) => allowedRoles?.includes(role)) ? (
    <Outlet />
  ) : auth?.username ? (
    <Navigate to='/unauthorize' state={{ from: Location }} replace />
  ) : (
    <Navigate to='/login' state={{ from: Location }} replace />
  )
}

export default RequireAuth
