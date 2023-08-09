import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Layout({ children }) {
  console.log(children)
  return (
    <div className='w-full min-h-screen flex flex-col'>
        <Header />
          <div className='w-full flex-1'>
            { children }
          </div>
        <Footer />
    </div>
  )
}
