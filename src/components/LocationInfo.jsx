import React from 'react'
import './styles/LocationInfo.css'

const LocationInfo = ({location}) => {


  return (
    <section className='location__container'>
    <article className='location__card'>
        <h2 className='location__title'>{location?.name}</h2>
        <ul className='location__list'>
            <li className='location__item'>
              <span className='location__label'>Type: </span>
              <span className='location__item-value'>{location?.type}</span>
            </li>
            <li className='location__item'>
              <span className='location__label'>Dimension: </span>
              <span className='location__item-value'>{location?.dimension}</span>
            </li>
            <li className='location__item'>
              <span className='location__label'>Population: </span>
              <span className='location__item-value'>{location?.residents.length}</span>
            </li>
        </ul>
    </article>
    </section>

  )
}

export default LocationInfo