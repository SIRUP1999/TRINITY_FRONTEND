import UseLogout from '../hooks/UseLogout'
import { useNavigate, useLocation } from 'react-router-dom'
const Logout = () => {
  const Logout = UseLogout()
  const Navigate = useNavigate()
  const Fallback = () => {
    return Navigate(-1)
  }
  return (
    <div className='logoutcontainer'>
      <div className='confirm'>
        <p>Do You Want To Logout?</p>
        <button className='btn' onClick={Logout}>
          Confirm
        </button>
        <button className='btn' onClick={Fallback}>
          Cancel
        </button>
      </div>
    </div>
  )
}

export default Logout
