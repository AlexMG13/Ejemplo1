import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default function Layout({ children }) {
  return (
    <div className='w-full min-h-screen flex flex-col'>
        <Nav />
          <div className='w-full flex-1'>
            { children }
          </div>
        <Footer />
    </div>
  )
}
