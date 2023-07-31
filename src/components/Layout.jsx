import Header from './Header'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <Header />
      <main className="min-h-[100vh] bg-clr-gray-200 dark:bg-clr-dark-blue-600 text-[14px] text-clr-dark-blue-800 dark:text-clr-white">
        <Outlet />
      </main>
    </>
  )
}

export default Layout
