import React from 'react'
import Carousel from '../components/Carousel'
import Article from '../components/Article'
import CallToAction from '../components/CallToAction'

export default function Home() {
  return (
    <div className='flex flex-col justify-center items-center'>
      <Article />
      <CallToAction />
      <Carousel /> 
    </div>
  )
}
