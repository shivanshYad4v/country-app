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
    fetch('../../data.json')
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
    <div className="w-[90%] mx-auto max-w-[1200px] py-7">
      <article className="space-y-12 text-clr-white">
        <form
          action="#"
          className="flex items-center px-10 py-4 rounded-md gap-7 bg-clr-dark-blue"
          onSubmit={(e) => e.preventDefault()}
        >
          <CgSearch className="text-xl" />
          <input
            type="text"
            placeholder="Search for a country..."
            className="bg-transparent outline-none placeholder-clr-white"
            value={searchInput}
            onChange={handleSearchInputChange}
          />
        </form>
        <div className="space-y-2">
          <div
            className="flex w-[13rem] bg-clr-dark-blue items-center justify-between px-6 py-4 rounded-md cursor-pointer"
            onClick={() => setShowRegions((prev) => !prev)}
          >
            <p>{selectedRegion || 'Filter by Region'}</p>
            {selectedRegion && (
              <button onClick={resetRegionFilter}>Clear</button>
            )}
            {!selectedRegion && <IoIosArrowDown />}
          </div>
          <div
            className={`${
              showRegions ? 'grid' : 'hidden'
            } justify-items-start absolute bg-clr-dark-blue w-[13rem] py-4 px-6 rounded-md gap-1.5`}
          >
            <button onClick={() => handleRegionClick('Africa')}>Africa</button>
            <button onClick={() => handleRegionClick('America')}>
              America
            </button>
            <button onClick={() => handleRegionClick('Asia')}>Asia</button>
            <button onClick={() => handleRegionClick('Europe')}>Europe</button>
            <button onClick={() => handleRegionClick('Oceania')}>
              Oceania
            </button>
          </div>
        </div>
      </article>
      <article className="grid gap-10 py-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {countriesArray
          .filter(
            (country) =>
              country.name.toLowerCase().includes(searchInput.toLowerCase()) &&
              (!selectedRegion || country.region === selectedRegion)
          )
          .map((country) => (
            <section
              key={country.numericCode}
              className="max-w-[300px] mx-auto overflow-hidden rounded-md text-clr-light-gray"
            >
              <Link to={`/${country.name}`}>
                <img
                  className="w-[300px] h-[150px]"
                  src={country.flags.png}
                  alt=""
                />
                <div className="px-6 bg-clr-dark-blue py-7">
                  <p className="mb-4 text-lg font-extrabold text-white name">
                    {country.name}
                  </p>
                  <div className="grid gap-1 mb-3">
                    <p>
                      <span className="font-semibold text-clr-white">
                        Population:
                      </span>{' '}
                      {country.population.toLocaleString()}
                    </p>
                    <p>
                      <span className="font-semibold text-clr-white">
                        Region:
                      </span>{' '}
                      {country.region}
                    </p>
                    <p>
                      <span className="font-semibold text-clr-white">
                        Capital:
                      </span>{' '}
                      {country.capital}
                    </p>
                  </div>
                </div>
              </Link>
            </section>
          ))}
      </article>
    </div>
  )
}

export default Home
