import { BsFillMoonFill } from 'react-icons/bs'

const Navbar = () => {
  return (
    <header className="bg-clr-dark-blue text-clr-white">
      <nav className=" py-7 flex justify-between w-[90%] mx-auto max-w-[1200px]">
        <h1 className="font-extrabold md:text-xl">Where in the world?</h1>
        <button className="flex items-center gap-2">
          <BsFillMoonFill />
          <p className="font-semibold">Dark Mode</p>
        </button>
      </nav>
    </header>
  )
}

export default Navbar
