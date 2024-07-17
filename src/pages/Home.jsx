import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CgSearch } from 'react-icons/cg'
import { IoIosArrowDown } from 'react-icons/io'

const Home = () => {
  const [countriesArray, setCountriesArray] = useState([])
  const [searchInput, setSearchInput] = useState('')
  const [selectedRegion, setSelectedRegion] = useState('')
  const [showRegions, setShowRegions] = useState(false)

  useEffect(() => {
    fetch('../data.json')
      .then((res) => res.json())
      .then((data) => setCountriesArray(data))
  }, [])

  function handleSearchInputChange(e) {
    setSearchInput(e.target.value)
  }

  function handleRegionClick(region) {
    setSelectedRegion(region)
    setShowRegions(false)
  }

  function resetRegionFilter() {
    setSelectedRegion('')
  }

  return (
    <article className="w-[85%] max-w-[1200px] mx-auto py-7">
      <section className="grid gap-12 font-semibold text-clr-dark-blue-800 dark:text-clr-white md:flex md:justify-between md:items-center">
        <form
          action="#"
          className="max-w-[35rem] flex items-center flex-1 px-10 py-4 rounded-md search bg-clr-white gap-7 dark:bg-clr-dark-blue-400"
          onSubmit={(e) => e.preventDefault()}
        >
          <CgSearch className="text-xl text-clr-gray-600 dark:text-clr-white" />
          <input
            type="text"
            placeholder="Search for a country..."
            className="flex-1 bg-transparent outline-none placeholder-clr-gray-600 dark:placeholder-clr-white"
            value={searchInput}
            onChange={handleSearchInputChange}
          />
        </form>
        <div className="space-y-2 ">
          <div
            className="w-[13rem] flex items-center bg-clr-white justify-between px-6 py-4 rounded-md cursor-pointer filter dark:bg-clr-dark-blue-400"
            onClick={() => setShowRegions((prev) => !prev)}
          >
            <p>{selectedRegion || 'Filter by Region'}</p>
            {selectedRegion && (
              <button onClick={resetRegionFilter}>Clear</button>
            )}
            {!selectedRegion && <IoIosArrowDown />}
          </div>
          <div
            className={`${showRegions ? 'grid' : 'hidden'
              } justify-items-start absolute bg-clr-white dark:bg-clr-dark-blue-400 filter-selection w-[13rem] py-4 px-6 rounded-md gap-1.5`}
          >
            <button onClick={() => handleRegionClick('Africa')}>Africa</button>
            <button onClick={() => handleRegionClick('Americas')}>Americas</button>
            <button onClick={() => handleRegionClick('Asia')}>Asia</button>
            <button onClick={() => handleRegionClick('Europe')}>Europe</button>
            <button onClick={() => handleRegionClick('Oceania')}>Oceania</button>
          </div>
        </div>
      </section>
      <section className="grid gap-10 py-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {countriesArray
          .filter(
            (country) =>
              country.name.toLowerCase().includes(searchInput.toLowerCase()) &&
              (!selectedRegion || country.region === selectedRegion)
          )
          .map((country) => (
            <div
              key={country.numericCode}
              className="card max-w-[270px] mx-auto overflow-hidden rounded-md"
            >
              <Link to={`/${country.name}`}>
                <img
                  className="w-[300px] h-[150px]"
                  src={country.flags.png}
                  alt=""
                />
                <div className="h-full px-6 bg-clr-white dark:bg-clr-dark-blue-400 py-7">
                  <p className="mb-4 text-lg font-extrabold">
                    {country.name}
                  </p>
                  <div className="mb-3 space-y-1 text-clr-dark-blue-800 dark:text-clr-white">
                    <p>
                      <span className="font-semibold ">Population:</span>{' '}
                      {country.population.toLocaleString()}
                    </p>
                    <p>
                      <span className="font-semibold ">Region:</span>{' '}
                      {country.region}
                    </p>
                    <p>
                      <span className="font-semibold ">Capital:</span>{' '}
                      {country.capital}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
      </section>
    </article>
  )
}

export default Home
