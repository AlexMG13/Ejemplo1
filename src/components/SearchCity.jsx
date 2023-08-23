import React from 'react'
import { BsSearch } from 'react-icons/bs'

export default function SearchCity() {
  return (
    <div className='flex justify-center w-[40%] gap-3 h-10 m-4'>
        <div className='self-center'>
            <BsSearch />
        </div>
        <input type="text" placeholder="Search your dream city!" className="" />
    </div>
  )
}
