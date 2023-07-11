import './App.css'
import { useState, useEffect } from 'react'
import getRandomNumber from './utils/getRandomNumber'
import LocationInfo from './components/LocationInfo'
import ResidentCard from './components/ResidentCard'
import FormLocation from './components/FormLocation'
import useFetch from './hooks/useFetch'


function App() {
  
  const [idLocation, setIdLocation] = useState(getRandomNumber(126))

  const url = `https://rickandmortyapi.com/api/location/${idLocation}`
  const [ location, getSingleLocation, hasError, isLoading  ] = useFetch(url)

  useEffect (() => {
    getSingleLocation()
      }, [idLocation])
  
  
  return (
    <div className='father__container'>

      <h1 className='header__img'>
      <img href="https://github.com/fabryfh/Rick_-_Morty_FHR/blob/main/public/Header/RyM1.jpg" alt="" />
      </h1>

      <FormLocation setIdLocation={setIdLocation} />
      {isLoading ? (
        <h2 className='loader'>
          <img href="https://github.com/fabryfh/Rick_-_Morty_FHR/blob/main/public/Header/icono.png"  alt="" className='icon__loader' />
        </h2>
      ) : hasError ? (
        <h1 className='error__text'>❌ Hey! you must provide an id from 1 to 126 😥</h1>
      ) : (
        <>
          <LocationInfo location={location} />
          <div className="resident-container">
            {location?.residents.map((url) => (
              <ResidentCard key={url} url={url} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default App
