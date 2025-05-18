import React, { useContext, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from '../../context/StoreContext'

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const [showResponsiveMenu, setShowResponsiveMenu] = useState(false);
  const {getTotalCartAmount, token, setToken}=useContext(StoreContext);
  const navigate = useNavigate();

  const toggleResponsiveMenu = () => {
    setShowResponsiveMenu(!showResponsiveMenu);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/")
  }
  return (
    <div className="navbar">
      <Link to="/" onClick={() => setMenu("home")}>
        <img src={assets.logo} alt="This is the logo of our website that is the indetion of our website" className="logo"/>
      </Link>

      <div className="search-bar">
        <img src={assets.search} alt="This is the search icon" />
        <input type="text" placeholder="Search for a pet..." id="searchInput" />
      </div>

      <ul className="navbar-menu">
        <Link to="/" onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>home</Link>
        <a href="#about-section" onClick={() => setMenu("about")} className={menu === "about" ? "active" : ""}>about</a>
        <a href="#services-section" onClick={() => setMenu("services")} className={menu === "services" ? "active" : ""}>services</a>
        <div className={`explore-dropdown ${menu === "explore" ? "active" : ""}`} onClick={() => setMenu("explore")}>explore
          <ul className="dropdown-menu">
            <Link
              to="/explore-buy-pet"
              onClick={() => setMenu("buy")}
              className={`dropdown-item ${menu === "buy" ? "active" : ""}`}
            >
              buy
            </Link>
            <Link className="dropdown-item">adopt</Link>
            <Link className="dropdown-item">book hostel</Link>
            <Link className="dropdown-item">hospital</Link>
          </ul>
        </div>
        <a onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>contact us</a>
      </ul>

      <div className="navbar-right">
        <div className="navbar-cart-icon">
          <Link to="/cart"><img src={assets.cart} alt="This is the Cart that stored the marked item"/></Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>

        {!token?<button onClick={() => setShowLogin(true)}>sign in</button>
        :<div className="navbar-profile">
          <img src={assets.profile_icon} alt="" />
          <ul className="nav-profile-dropdown">
            <li><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
            <hr />
            <li onClick={logout}><img src={assets.logout_icon} alt="" />Logout</li>
          </ul>
        </div>}
      </div>

      <div className="menu-icon" onClick={toggleResponsiveMenu}>
        <img src={assets.menu} alt="Menu Icon" />
      </div>
      <div className={`responsive-menu ${showResponsiveMenu ? "active" : ""}`}>
        <img src={assets.cross} alt="close_menu icon" className="close-icon" onClick={toggleResponsiveMenu}/>
        <div className="responsive-menu-title">Explore</div>
        <Link
          to="/explore-buy-pet"
          onClick={() => {
            setMenu("buy");
            setShowResponsiveMenu(false);
          }}
          className={`dropdown-item ${menu === "buy" ? "active" : ""}`}
        >
          buy
        </Link>
        <Link
          className="dropdown-item"
          onClick={() => setShowResponsiveMenu(false)}
        >
          adopt
        </Link>
        <Link
          className="dropdown-item"
          onClick={() => setShowResponsiveMenu(false)}
        >
          book hostel
        </Link>
        <Link
          className="dropdown-item"
          onClick={() => setShowResponsiveMenu(false)}
        >
          hospital
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
