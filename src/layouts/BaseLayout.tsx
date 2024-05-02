import { Header } from '../components'
import { Outlet } from 'react-router-dom'

const BaseLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default BaseLayout
