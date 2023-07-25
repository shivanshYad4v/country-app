import { Outlet } from 'react-router-dom'
import Header from './Header'

const Layout = () => {
  return (
    <div className="wrapper">
      <Header />
      <main className="bg-clr-very-dark-blue-1 text-[14px]">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
