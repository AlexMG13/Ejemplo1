import React from 'react'
import { BsSearch } from 'react-icons/bs'

export default function SearchCity() {
  return (
    <div className='flex justify-center w-[40%] gap-3 h-10 m-4'>
        <input type="text" placeholder="Search your dream city!" className="input input-bordered input-primary w-full max-w-xs" />
        <div className='self-center'>
          <button className="btn"><BsSearch /></button>
        </div>
    </div>
  )
}
