import React from 'react'
import './Nav.css'

export const Nav = () => (
  <div id='main'>
    <ul id='navigationMenu'>
      <li>
        <a className='home' href='#'>
          <span>Home</span>
        </a>
      </li>
      <li>
        <a className='about' href='#'>
          <span>About</span>
        </a>
      </li>
      <li>
        <a className='services' href='#'>
          <span>Services</span>
        </a>
      </li>
      <li>
        <a className='portfolio' href='#'>
          <span>Portfolio</span>
        </a>
      </li>
      <li>
        <a className='contact' href='#'>
          <span>Contact us</span>
        </a>
      </li>
    </ul>
  </div>
)

export default Nav
