import React from 'react'
import './Header.css'
import { assets } from '../../assets/assets'

const Header = () => {
  return (
    <div className='header' style={{ backgroundImage: `url(${assets.illustration})`}}>
      <div className='header-contents'>
        <h2>JOIN OUR</h2>
        <h1>Community</h1>
        <p>
        One of the best parts of doing what we do is getting to know dogs, cats and their families from across the country. We've been lucky to meet so many of you and would love to keep this relationship going.
        </p>
        <button type='button' className='btn prymary-btn'>Join Now</button>
      </div>
    </div>
  )
}

export default Header
