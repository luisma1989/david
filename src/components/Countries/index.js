import React from 'react'

import './countries.css'
import background from './assets/countries-bg.jpg'

const Countries = ({ countriesData }) => {
  return (
    <section className='countries'>
      <img
        src={background}
        className='wow slideInLeft'
        data-wow-duration='2s'
        alt='Countries section background'
      />
      <div
        className='wow slideInRight text-section'
        data-wow-duration='2s'
      >
        <article>
          <h3>{countriesData.es.title}</h3>
          <p>{countriesData.es.text}</p>
        </article>
        <article>
          <h3>{countriesData.ru.title}</h3>
          <p>{countriesData.ru.text}</p>
        </article>
      </div>
    </section>
  )
}

export default Countries
