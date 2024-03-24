import React from 'react'
import navbar from "../assets/images/nav.png"

function Navbar() {
  return (
    <nav >
      <div className='img--div'>
      <img src={navbar} alt="NAVbar" className='nav--img' />

      </div>
      <h1 className='nav--head'> My travel journel.</h1>

    </nav>
  )
}

export default Navbar 