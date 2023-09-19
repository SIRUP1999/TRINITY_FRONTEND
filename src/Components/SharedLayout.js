import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

const SharedLayout = () => {
  // const { pathname } = useLocation()
  // const Footnav = () => {
  //   if (
  //     pathname !== '/registerstudent' &&
  //     pathname !== '/editregister' &&
  //     pathname !== '/fees'
  //   ) {
  //     return <Footer />
  //   }
  // }
  return (
    <main className='layout_main'>
      <Navbar />
      <Outlet />
    </main>
  )
}

export default SharedLayout
