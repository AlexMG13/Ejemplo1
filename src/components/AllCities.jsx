import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import Card from './Card'

export default function AllCities() {
  const [cities , setCities] = useState([])
  useEffect(() => {
    axios('http://localhost:3030/api/cities').then(response => {
    setCities(response.data)
    console.log(response.data)
  }).catch(err => console.log(err))
  },[]);
  
  
  return (
    <div className='flex flex-wrap gap-3 m-4'> 
      {cities.map( (city,key) => 
      <Card key={city.id} props={city} /> )}
    </div>
  )
}
