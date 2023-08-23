import React from 'react'
import { useState,useEffect } from 'react'
import Card from './Card'
import { getAllCities } from '../services/citiesQueries.js'

export default function AllCities() {
  const [cities , setCities] = useState([])
  useEffect(() => {
    getAllCities().then((data) => {
      setCities(data)
    }).catch(err => console.log(err))
  },[]);

  return (
    <div className='flex justify-center'>
      <div className='flex flex-wrap gap-3 m-4'> 
        {cities.map( (city) => 
        <Card key={city._id} props={city} /> )}
      </div>
    </div>
  )
}
