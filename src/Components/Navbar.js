import React, { useState } from 'react'
import UseAuth from '../hooks/UseAuth'
import { NavLink } from 'react-router-dom'
import { FaBars, FaTimes, FaArrowCircleRight } from 'react-icons/fa'
import allowedRoles from '../config/AllowedRoles'
const Navbar = () => {
  const { auth } = UseAuth()
  // logic to determine who is accesible for a specific link
  const word = 'hello i am fine and you'
  const Helloworl = () => {
    return word
  }
  const AdminNav = () => {
    if (
      auth?.roles?.find(
        (role) => role === allowedRoles.Admin && auth?.accesstoken
      )
    ) {
      return (
        <>
          <NavLink to='/Logout'>
            {' '}
            <FaArrowCircleRight
              className='Logout'
              title='Logout'
              onClick={() => setNavChange(!navChange)}
            />
          </NavLink>
          <NavLink
            className='nav'
            to='register'
            onClick={() => setNavChange(!navChange)}
          >
            Reg_User
          </NavLink>
          <NavLink
            className='nav'
            to='registerStudent'
            onClick={() => setNavChange(!navChange)}
          >
            Reg_student
          </NavLink>
          <NavLink
            className='nav'
            to='/Dashboard'
            onClick={() => setNavChange(!navChange)}
          >
            Dashboard
          </NavLink>
          <NavLink
            className='nav'
            to='fees'
            onClick={() => setNavChange(!navChange)}
          >
            Fees_form
          </NavLink>
          <NavLink
            className='nav'
            to='allstudents'
            onClick={() => setNavChange(!navChange)}
          >
            All_Students
          </NavLink>
        </>
      )
    }
  }

  const Manager = () => {
    if (
      auth?.roles?.find((role) => role === allowedRoles.Manager) &&
      auth?.accesstoken
    ) {
      return (
        <>
          <NavLink to='/Logout'>
            {' '}
            <FaArrowCircleRight
              className='Logout'
              title='Logout'
              onClick={() => setNavChange(!navChange)}
            />
          </NavLink>
          <NavLink
            className='nav'
            to='allstudents'
            onClick={() => setNavChange(!navChange)}
          >
            All_Students
          </NavLink>
          <NavLink
            className='nav'
            to='fees'
            onClick={() => setNavChange(!navChange)}
          >
            Fees_form
          </NavLink>
          <NavLink
            className='nav'
            to='registerStudent'
            onClick={() => setNavChange(!navChange)}
          >
            Reg_student
          </NavLink>
        </>
      )
    }
  }

  const Employee = () => {
    if (
      auth?.roles?.find((role) => role === allowedRoles.Employee) &&
      auth?.accesstoken
    ) {
      return (
        <>
          <NavLink to='/Logout'>
            {' '}
            <FaArrowCircleRight
              className='Logout'
              title='Logout'
              onClick={() => setNavChange(!navChange)}
            />
          </NavLink>
          <NavLink
            className='nav'
            to='allstudents'
            onClick={() => setNavChange(!navChange)}
          >
            All_Students
          </NavLink>
        </>
      )
    }
  }
  const Public = () => {
    if (!auth?.roles && !auth?.accesstoken) {
      return (
        <>
          <NavLink
            className='nav'
            to='/'
            onClick={() => setNavChange(!navChange)}
          >
            Home
          </NavLink>

          {/* //add up later  */}

          <NavLink
            className='nav'
            to='/StudentLogin'
            onClick={() => setNavChange(!navChange)}
          >
            Stu_Login
          </NavLink>

          {/* //add up later  */}

          <NavLink
            className='nav'
            to='/login'
            onClick={() => setNavChange(!navChange)}
            onMouseOver={Helloworl}
          >
            Emp_Login
          </NavLink>
          <NavLink
            className='nav'
            to='TerminalBill'
            onClick={() => setNavChange(!navChange)}
          >
            TerminalBill
          </NavLink>
        </>
      )
    }
  }

  const [navChange, setNavChange] = useState(true)

  const change = navChange ? (
    <FaBars className='Fabars' />
  ) : (
    <FaTimes className='Fabars' />
  )

  return (
    <>
      <div onClick={() => setNavChange(!navChange)}>{change}</div>

      <section
        className={navChange ? 'navLinks_bar_close' : 'navLinks_bar_Open'}
      >
        <AdminNav />
        <Manager />
        <Employee />
        <Public />
      </section>
    </>
  )
}

export default Navbar
