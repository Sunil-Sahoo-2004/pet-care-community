import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = ({setShowLogin}) => {
  const [menu, setMenu] = useState("home");
  return (
    <div className='navbar'>
        <img src={assets.logo} alt="This is the logo of our website that is the indetion of our website" className='logo' />

        <div className="search-bar">
          <img src={assets.search} alt="This is the search icon" />
          <input type="text" placeholder='Search for a pet...' id='searchInput' />
        </div>

        <ul className="navbar-menu">
          <li onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>home</li>
          <li onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>Menu</li>
          <li onClick={()=>setMenu("services")} className={menu==="services"?"active":""}>Services</li>
          <li onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>contact us</li>
        </ul>

        <div className="navbar-right">
          <div className="navbar-cart-icon">
            <img src={assets.cart} alt="This is the Cart that stored the marked item" />
            <div className="dot"></div>
          </div>
          <button onClick={()=>setShowLogin(true)}>sign in</button>
        </div>
      </div>
  )
}

export default Navbar
