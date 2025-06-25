import React, { useState } from 'react';
import './Navbar.css';
import { FaSearch, FaBars, FaTimes } from 'react-icons/fa';
import { assets } from '../../../assets/assets';
import { NavLink } from 'react-router-dom';
import Input from '../../../atoms/input/input';
import Button from '../../../atoms/button/Button';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [menu, setMenu] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false); // for mobile menu toggle

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleMenuClick = (menuName) => {
    setMenu(menuName);
    setMenuOpen(false); // close menu on selection
  };

  return (
    <div className="navbar">
      <div className="navbar-left">
        <div className="logo-part">
          <img src={assets.logo} alt="logo" className="logo" />
          <span className="brand">PetConnect</span>
        </div>

        <div className={`navbar-list ${menuOpen ? 'open' : ''}`}>
          <NavLink to="/" onClick={() => handleMenuClick('home')} className={menu === 'home' ? 'active' : ''}>Home</NavLink>
          <NavLink to="/adoption" onClick={() => handleMenuClick('adoption')} className={menu === 'adoption' ? 'active' : ''}>Adoption</NavLink>
          <NavLink to="/services" onClick={() => handleMenuClick('services')} className={menu === 'services' ? 'active' : ''}>Services</NavLink>
          <NavLink to="/forum" onClick={() => handleMenuClick('forum')} className={menu === 'forum' ? 'active' : ''}>Forum</NavLink>
          <NavLink to="/knowledge" onClick={() => handleMenuClick('knowledge')} className={menu === 'knowledge' ? 'active' : ''}>Knowledge</NavLink>
        </div>
      </div>

      <div className="navbar-right">
        <div className="search-box">
          <FaSearch className="search-icon" />
          <Input
            type="text"
            placeholder="Search for pets, services, and more..."
            className="search-input"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
        <Button text="Login" className="login-button" />
        <Button text="Signup" className="signup-button" />
      </div>

      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </div>
  );
};

export default Navbar;
