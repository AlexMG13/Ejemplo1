import React from 'react'
import SearchCity from './SearchCity'
import AllCities from './AllCities'
import Hero from './Hero'

export default function MainCities() {
  return (
    <div className='flex flex-col justify-center'>
      <Hero />
      <SearchCity />
      <AllCities />
    </div>
  )
}
