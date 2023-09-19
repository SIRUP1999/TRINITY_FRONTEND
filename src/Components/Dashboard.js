import React, { useState } from 'react'
import DashHeader from './DashHeader'
import DashWelcome from './DashWelcome'
import Dashtoggle from './Dashtoggle'
import DashTable from './DashTable'
import UseAuth from '../hooks/UseAuth'
import { useNavigate, useLocation } from 'react-router-dom'
const DashHome = () => {
  const { auth, socket } = UseAuth()
  const Navigate = useNavigate()
  const Location = useLocation()
  if (!auth?.accesstoken) {
    Navigate('/Login', { state: { from: Location }, replace: true })
  }

  return (
    <>
      <section>
        <DashHeader />
        <section className='main'>
          <DashWelcome />
          <Dashtoggle />
        </section>
      </section>
      <DashTable />
    </>
  )
}

export default DashHome
