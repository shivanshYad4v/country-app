import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  const [countriesArray, setCountriesArray] = useState([])

  useEffect(() => {
    fetch('../../data.json')
      .then((res) => res.json())
      .then((data) => setCountriesArray(data))
  }, [])

  return (
    <article className="w-[90%] mx-auto max-w-[1200px] grid gap-10 py-20 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {countriesArray.map((country) => (
        <section
          key={country.numericCode}
          className="max-w-[270px] mx-auto overflow-hidden rounded-md text-clr-light-gray"
        >
          <Link to={`/${country.name}`}>
            <img
              className="w-[300px] h-[150px]"
              src={country.flags.png}
              alt=""
            />
            <div className="px-6 bg-clr-dark-blue py-7">
              <p className="mb-4 text-lg font-extrabold text-white">
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
                  <span className="font-semibold text-clr-white">Region:</span>{' '}
                  {country.region}
                </p>
                <p>
                  <span className="font-semibold text-clr-white">Capital:</span>{' '}
                  {country.capital}
                </p>
              </div>
            </div>
          </Link>
        </section>
      ))}
    </article>
  )
}

export default Home
