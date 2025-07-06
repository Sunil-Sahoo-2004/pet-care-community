import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import Cookies from 'js-cookie';
import { assets } from '../../../assets/assets';
import Button from '../../../atoms/button/Button';
import { logoutUser } from '../../../services/authService';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menu, setMenu] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = Cookies.get('loggedIn');
    setIsAuthenticated(isLoggedIn === 'true');
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleMenuClick = (section) => {
    setMenu(section);
    setMenuOpen(false);
  };

  const handleLoginClick = () => navigate('/login');

  const handleLogout = async () => {
    await logoutUser();
    Cookies.remove('loggedIn');
    setIsAuthenticated(false);
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Left */}
        <div className="navbar-left">
          <div className="logo-nav">
            <img src={assets.logo} alt="logo" className="logo-icon" />
            <span className="brand">PetCare</span>
          </div>

          <div className={`navbar-list ${menuOpen ? 'open' : ''}`}>
            <NavLink to="/" onClick={() => handleMenuClick('home')} className={menu === 'home' ? 'active' : ''}>Home</NavLink>
            <NavLink to="/adoption" onClick={() => handleMenuClick('adoption')} className={menu === 'adoption' ? 'active' : ''}>Adoption</NavLink>
            <NavLink to="/services" onClick={() => handleMenuClick('services')} className={menu === 'services' ? 'active' : ''}>Services</NavLink>
            <NavLink to="/forum" onClick={() => handleMenuClick('forum')} className={menu === 'forum' ? 'active' : ''}>Forum</NavLink>
            <NavLink to="/knowledge" onClick={() => handleMenuClick('knowledge')} className={menu === 'knowledge' ? 'active' : ''}>Knowledge</NavLink>
          </div>
        </div>

        {/* Right */}
        <div className="navbar-right">
          <div className="notification">
            <img src={assets.ringing} alt="notification" />
          </div>

          {!isAuthenticated ? (
            <Button text="Login" className="login-btn" onClick={handleLoginClick} />
          ) : (
            <div className="user-profile">
              <img
                src={assets.user}
                alt="profile"
                className="user-avatar"
                onClick={() => setShowDropdown(!showDropdown)}
              />
              {showDropdown && (
                <div className="dropdown-menu">
                  <p onClick={() => navigate('/profile')}>My Profile</p>
                  <p onClick={handleLogout}>Logout</p>
                </div>
              )}
            </div>
          )}

          <div className="hamburger" onClick={toggleMenu}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>

      {menuOpen && <div className="overlay-nav" onClick={() => setMenuOpen(false)} />}
    </nav>
  );
};

export default Navbar;