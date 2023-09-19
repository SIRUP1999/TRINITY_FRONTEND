// built_in_imports
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import allowedRoles from './config/AllowedRoles'
import RequireAuth from './Components/RequireAuth'
import Missing from './Components/Missing'
import PersistLogin from './Components/PersistLogin'
//components
import SharedLayout from './Components/SharedLayout'
import Home from './Components/Home'
import Login from './Components/Login'
import Register from './Components/Register'
import RegisterStudent from './Components/RegisterStudent'
import TerminalBill from './Components/TerminalBill'
import DisplayStudent from './Components/DisplayStudent'
import ViewStudentForm from './Components/ViewStudentForm'
import ViewFees from './Components/ViewFees'
import Testing from './Components/Testing'
import FeesForm from './Components/FeesForm'
import EditFees from './Components/EditFees'
import EditStudent from './Components/EditStudent'
import Dashboard from './Components/Dashboard'
import Logout from './Components/Logout'

//hooks
// import UseAuth from './hooks/UseAuth'

const App = () => {
  // const { auth } = UseAuth()

  return (
    <main className='app'>
      <Routes>
        {/* public routes */}
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/StudentLogin' element={<Testing />} />
          <Route path='/Logout' element={<Logout />} />
          <Route path='StudentLogin/viewFees/:userId' element={<ViewFees />} />
          <Route path='/TerminalBill' element={<TerminalBill />} />

          {/* *****************Protected************** */}
          {/************************************* ********************************************************************************** */}
          {/* protected Routes */}
          <Route element={<PersistLogin />}>
            <Route
              element={
                <RequireAuth
                  allowedRoles={[
                    allowedRoles.Admin,
                    allowedRoles.Manager,
                    allowedRoles.Employee,
                  ]}
                />
              }
            >
              <Route path='registerStudent' element={<RegisterStudent />} />

              <Route
                path='allstudents/viewStudents/:student_id'
                element={<ViewStudentForm />}
              />
              <Route path='allstudents' element={<DisplayStudent />} />
              <Route
                path='allstudents/viewFees/:student_id'
                element={<ViewFees />}
              />

              <Route path='fees' element={<FeesForm />} />
              <Route
                path='allstudents/ViewFees/:student_id/editFee/:student_id'
                element={<EditFees />}
              />
              <Route
                path='allstudents/ViewStudents/:id/EditStudent/:id'
                element={<EditStudent />}
              />
              {/* *********************************************************** */}

              {/* //only Admin permit */}
              <Route
                element={<RequireAuth allowedRoles={[allowedRoles.Admin]} />}
              >
                <Route path='register' element={<Register />} />
                <Route path='/Dashboard' element={<Dashboard />} />
                <Route
                  path='Dashboard/ViewFees/:student_id'
                  element={<ViewFees />}
                />
                <Route
                  path='Dashboard/ViewFees/:student_id/editFee/:student_id'
                  element={<EditFees />}
                />
              </Route>
              {/* Admin permit ends */}
              {/* ******************************************************** */}
            </Route>
            {/* Employee login  */}
          </Route>
        </Route>
        {/* end of protected routes */}

        <Route path='*' element={<Missing />} />
      </Routes>
    </main>
  )
}

export default App
