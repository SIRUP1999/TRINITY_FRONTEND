import { createContext, useState } from 'react'
import io from 'socket.io-client'
const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({})
  const [Reference0, setReference0] = useState([])

  const socket = io('http://localhost:3500')
  return (
    <AuthContext.Provider
      value={{ auth, setAuth, socket, setReference0, Reference0 }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
