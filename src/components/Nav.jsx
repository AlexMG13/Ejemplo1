import React from 'react'
import Anchors from './Anchors'
import Button from './Button'


export default function Nav() {
  return (
    <div className='flex flex-row justify-around h-24'>
        <img className='w-40' src="./logo-mytinerary-re.png" alt="logo My Tynerary" />
        <nav className='flex h-full items-center gap-4 mx-4'>
          <Anchors />
          <Button name='Login'/>
        </nav>
    </div>
  )
}
