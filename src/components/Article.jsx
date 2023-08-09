import React from 'react'
import Button from './Button'

export default function Article() {
  return (
    <div className='flex flex-col w-[60%] justify-center'>
        <h1 className=''>Find the perfect destination</h1>
        <div className='flex flex-row items-center'>
            <div className='flex-col'>
              <p>Our app will help you find the perfect path for your next trip. With an easy-to-use interface and a host of itinerary options, planning your next trip has never been easir.</p>
              <div className='w-40'>
                <Button name='View More'/>
              </div>
            </div>
            <img className='w-60 h-60' src="./montana.png" alt="montana image" />
        </div>
    </div>
  )
}
