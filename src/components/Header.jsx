import { useState } from 'react'
import { BsMoon } from 'react-icons/bs'
import { BsMoonFill } from 'react-icons/bs'

const Header = () => {
  const [darkMode, setDarkMode] = useState(false)


  return (
    <header className="sticky top-0 z-10 bg-clr-white text-clr-dark-blue-800 dark:bg-clr-dark-blue-400 dark:text-clr-white">
      <div className="py-5 flex justify-between w-[85%] max-w-[1200px] mx-auto">
        <h1 className="font-extrabold md:text-xl">Where in the world?</h1>
        <button
          className="flex items-center gap-2"
          onClick={() => {
            setDarkMode(prevDarkMode => !prevDarkMode)
            window.document.documentElement.classList.toggle('dark')
          }}
        >
          {darkMode ? <BsMoonFill /> : <BsMoon />}
          <p className="font-semibold">Dark Mode</p>
        </button>
      </div>
    </header>
  )
}

export default Header
