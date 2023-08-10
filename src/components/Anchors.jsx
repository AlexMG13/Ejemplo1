import React from 'react'
import { Link as Anchor } from 'react-router-dom'

export default function Anchors() {
  return (
      <>
        <Anchor to='/' >Home</Anchor>
        <Anchor to='/cities'>Cities</Anchor>
      </>
  )
}
