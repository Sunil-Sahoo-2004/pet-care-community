import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import { assets } from '../../../assets/assets';
import Button from '../../../atoms/button/Button';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menu, setMenu] = useState('home');
  const navigate = useNavigate();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const handleMenuClick = (section) => {
    setMenu(section);
    setMenuOpen(false);
  };

  const handleLoginClick = () => {
    navigate('/login'); // ✅ Corrected navigation
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-left">
          <div className="logo-nav">
            <img src={assets.logo} alt="logo" className="logo-icon" />
            <span className="brand">PetCare</span>
          </div>

          {/* Nav Links */}
          <div className={`navbar-list ${menuOpen ? 'open' : ''}`}>
            <NavLink
              to="/"
              onClick={() => handleMenuClick('home')}
              className={menu === 'home' ? 'active' : ''}
            >
              Home
            </NavLink>
            <NavLink
              to="/adoption"
              onClick={() => handleMenuClick('adoption')}
              className={menu === 'adoption' ? 'active' : ''}
            >
              Adoption
            </NavLink>
            <NavLink
              to="/services"
              onClick={() => handleMenuClick('services')}
              className={menu === 'services' ? 'active' : ''}
            >
              Services
            </NavLink>
            <NavLink
              to="/forum"
              onClick={() => handleMenuClick('forum')}
              className={menu === 'forum' ? 'active' : ''}
            >
              Forum
            </NavLink>
            <NavLink
              to="/knowledge"
              onClick={() => handleMenuClick('knowledge')}
              className={menu === 'knowledge' ? 'active' : ''}
            >
              Knowledge
            </NavLink>
          </div>
        </div>

        {/* Right Side */}
        <div className="navbar-right">
          <div className="notification">
            <img src={assets.ringing} alt="notification" />
          </div>
          <Button
            text="Login"
            className="login-btn" // ✅ Matches CSS class
            onClick={handleLoginClick}
          />
          <div className="hamburger" onClick={toggleMenu}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>

      {/* Overlay */}
      {menuOpen && <div className="overlay-nav" onClick={() => setMenuOpen(false)} />}
    </nav>
  );
};

export default Navbar;
