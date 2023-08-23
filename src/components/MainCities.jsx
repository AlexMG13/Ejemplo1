import React from 'react'
import SearchCity from './SearchCity'
import AllCities from './AllCities'

export default function MainCities() {
  return (
    <div className='flex flex-col justify-center'>
      <SearchCity />
      <AllCities />
    </div>
  )
}
