import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'

const CountryDetail = () => {
  const { countryName } = useParams()

  const [country, setCountry] = useState(null)

  useEffect(() => {
    fetch('../../public/data.json')
      .then((res) => res.json())
      .then((data) =>
        setCountry(data.find((country) => country.name === countryName))
      )
  }, [countryName])

  return (
    <>
      {country && (
        <article className="min-h-[calc(100vh-68px)] w-[85%] max-w-[1200px] mx-auto text-clr-dark-blue-800 py-7 bg-clr-gray-200 dark:bg-clr-dark-blue-600 dark:text-clr-white text-[16px]">
          <Link to=".." className="flex items-center justify-center gap-2 py-2 mt-3 mb-12 rounded-sm back-btn w-28 bg-clr-white dark:bg-clr-dark-blue-400">
              {<FaArrowLeft />}
              <p>Back</p>
          </Link>
          <section className="grid gap-10 lg:grid-cols-2 lg:gap-20">
            <div>
              <img
                className=" h-[280px] lg:h-full"
                src={country.flags.png}
                alt=""
              />
            </div>
            <div className="space-y-7">
              <p className="text-2xl font-extrabold">{country.name}</p>
              <div className="grid gap-5 lg:grid-cols-2 lg:items-start">
                <div className="mb-3 space-y-2">
                  <p>
                    <span className="font-semibold ">Native Name:</span>{' '}
                    {country.nativeName}
                  </p>
                  <p>
                    <span className="font-semibold ">Population:</span>{' '}
                    {country.population.toLocaleString()}
                  </p>
                  <p>
                    <span className="font-semibold ">Region:</span>{' '}
                    {country.region}
                  </p>
                  <p>
                    <span className="font-semibold ">Sub Region:</span>{' '}
                    {country.subregion}
                  </p>
                  <p>
                    <span className="font-semibold ">Capital:</span>{' '}
                    {country.capital}
                  </p>
                </div>
                <div className="space-y-2">
                  <p>
                    <span className="font-semibold ">Top Level Domain:</span>{' '}
                    {country.topLevelDomain}
                  </p>
                  {country.currencies && (
                    <p>
                      <span className="font-semibold ">Currencies:</span>{' '}
                      {country.currencies[0].name}
                    </p>
                  )}
                  <p>
                    <span className="font-semibold ">Languages:</span>{' '}
                    {country.languages.map((lang) => lang.name).join(', ')}
                  </p>
                </div>
              </div>
              {country.borders && (
                <div className="mb-3 space-y-4">
                  <p className="font-semibold ">Border Countries:</p>
                  <div className="flex flex-wrap gap-3">
                    {country.borders.map((border) => {
                      return (
                        <p
                          key={border}
                          className="px-5 py-1 border-country bg-clr-white dark:bg-clr-dark-blue-400"
                        >
                          {border}
                        </p>
                      )
                    })}
                  </div>
                </div>
              )}
            </div>
          </section>
        </article>
      )}
    </>
  )
}

export default CountryDetail
