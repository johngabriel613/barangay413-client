import { Outlet } from 'react-router-dom'
import Navbar from '../components/header/Navbar'
import Announcement from '../components/header/Announcement'
import Header from '../components/header/Header'

const RootLayout = () => {
  return (
    <>
      <Announcement/>
      <Header/>
      <Navbar/>
      <Outlet/>
    </>
  )
}

export default RootLayout
