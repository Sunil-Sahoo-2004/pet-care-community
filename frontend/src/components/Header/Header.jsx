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
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, perspiciatis modi! Veniam optio, dolorem blanditiis asperiores praesentium magnam at sint laudantium! Quam, voluptatum labore voluptate blanditiis totam reprehenderit? Rerum est numquam ut aspernatur autem quasi? Modi voluptatem quos iure odio aspernatur, consequuntur dolorum cupiditate? Dicta nostrum possimus hic odit atque?
        </p>
        <button type='button' className='btn prymary-btn'>Join Now</button>
      </div>
    </div>
  )
}

export default Header
