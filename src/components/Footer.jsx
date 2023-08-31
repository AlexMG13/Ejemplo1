import React from 'react'
import {FiInstagram,FiTwitter,FiFacebook} from 'react-icons/fi'
import { Link as Anchor } from 'react-router-dom'
import Anchors from './Anchors'

export default function Footer() {
  return (
    <footer className='flex flex-row justify-between m-4'>
      <div className='flex flex-row gap-4'>
        <Anchor to='#'><FiInstagram /></Anchor>
        <Anchor to='#'><FiTwitter /></Anchor>
        <Anchor to='#'><FiFacebook /></Anchor>
      </div>
      <div className='flex gap-5'>
        <Anchors />
      </div>
      <p> &copy; 2023</p>
    </footer>
  )
}
