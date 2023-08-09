import React from 'react'
import {FiInstagram,FiTwitter,FiFacebook} from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className='flex flex-row justify-between m-4'>
      <p> &copy; 2023 -Todos los derechos reservados </p>
      <div className='flex flex-row gap-4'>
        <a href='#'><FiInstagram /></a>
        <a href='#'><FiTwitter /></a>
        <a href='#'><FiFacebook /></a>
      </div>
    </footer>
  )
}
