import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div className='w-full min-h-screen'>
        <Nav />
          <div>
            <Outlet />
          </div>
        <Footer />
    </div>
  )
}
