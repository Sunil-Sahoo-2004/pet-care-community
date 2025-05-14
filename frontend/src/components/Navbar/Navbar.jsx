import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';

const Navbar = ({setShowLogin}) => {
  const [menu, setMenu] = useState("home");
  return (
    <div className='navbar'>
        <Link to='/'><img src={assets.logo} alt="This is the logo of our website that is the indetion of our website" className='logo' /></Link>

        <div className="search-bar">
          <img src={assets.search} alt="This is the search icon" />
          <input type="text" placeholder='Search for a pet...' id='searchInput' />
        </div>

        <ul className="navbar-menu">
          <Link to='/' onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>home</Link>
          <a href='#about-section' onClick={()=>setMenu("about")} className={menu==="about"?"active":""}>about</a>
          <a onClick={()=>setMenu("services")} className={menu==="services"?"active":""}>services</a>
          <a className={`explore-dropdown ${menu === "explore" ? "active" : ""}`} onMouseEnter={() => setMenu("explore")} onMouseLeave={() => setMenu("")} >explore
            <ul className="dropdown-menu">
              <li>buy</li>
              <li>adopt</li>
              <li>book hostel</li>
              <li>hospital</li>
            </ul>
          </a>
          <a onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>contact us</a>
        </ul>

        <div className="navbar-right">
          <div className="navbar-cart-icon">
            <Link to='/cart'><img src={assets.cart} alt="This is the Cart that stored the marked item" /></Link>
            <div className="dot"></div>
          </div>
          <button onClick={()=>setShowLogin(true)}>sign in</button>
        </div>
      </div>
  )
}

export default Navbar
