import React from 'react'
import Button from './Button'

export default function Article() {
  return (
    <div className='flex flex-col'>
        <h1>Find the perfect destination</h1>
        <div className='flex flex-row '>
            <p>Our app will help you find the perfect path for your next trip. With an easy-to-use interface and a host of itinerary options, planning your next trip has never been easir.</p>
            <img className='w-60' src="./montana.png" alt="montana image" />
        </div>
        <Button name='View More'/>
    </div>
  )
}
