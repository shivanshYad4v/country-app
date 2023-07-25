import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const CountryDetail = () => {
  const { countryName } = useParams()

  const [country, setCountry] = useState(null)

  useEffect(() => {
    fetch('../../data.json')
      .then((res) => res.json())
      .then((data) =>
        setCountry(data.find((country) => country.name === countryName))
      )
  }, [countryName])

  console.log(country)

  return (
    <>
      {country ? (
        <div className="grid py-12 gap-7 bg-clr-very-dark-blue-1 text-clr-light-gray px-7 text-[16px]">
          <Link to="/">
            <div className="flex items-center justify-center gap-2 py-2 rounded-sm w-28 bg-clr-dark-blue ">
              {<FaArrowLeft />}
              <p>Back</p>
            </div>
          </Link>
          <img
            className="max-w-full h-[280px] mb-5"
            src={country.flags.png}
            alt=""
          />
          <p className="text-2xl font-extrabold text-white ">{country.name}</p>
          <div className="grid gap-2 mb-3">
            <p>
              <span className="font-semibold text-clr-white">Native Name:</span>{' '}
              {country.nativeName}
            </p>
            <p>
              <span className="font-semibold text-clr-white">Population:</span>{' '}
              {country.population.toLocaleString()}
            </p>
            <p>
              <span className="font-semibold text-clr-white">Region:</span>{' '}
              {country.region}
            </p>
            <p>
              <span className="font-semibold text-clr-white">Sub Region:</span>{' '}
              {country.subregion}
            </p>
            <p>
              <span className="font-semibold text-clr-white">Capital:</span>{' '}
              {country.capital}
            </p>
          </div>

          <div className="grid gap-2">
            <p>
              <span className="font-semibold text-clr-white">
                Top Level Domain:
              </span>{' '}
              {country.topLevelDomain}
            </p>
            {country.currencies && (
              <p>
                <span className="font-semibold text-clr-white">
                  Currencies:
                </span>{' '}
                {country.currencies[0].name}
              </p>
            )}
            <p>
              <span className="font-semibold text-clr-white">Languages:</span>{' '}
              {country.languages.map((lang) => lang.name).join(', ')}
            </p>
          </div>
          {country.borders && (
            <div className="grid gap-2 mb-3">
              <p className="font-semibold text-clr-white">Border Countries:</p>
              <div className="flex flex-wrap gap-3">
                {country.borders.map((border) => {
                  return (
                    <p key={border} className="px-5 py-1 bg-clr-dark-blue">
                      {border}
                    </p>
                  )
                })}
              </div>
            </div>
          )}
        </div>
      ) : (
        <h2 className="text-3xl font-bold text-clr-dark-blue">Loading...</h2>
      )}
    </>
  )
}

export default CountryDetail
