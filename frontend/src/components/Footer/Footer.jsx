import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img className="logo" src={assets.logo} alt="PetCare Community Logo" />
          <p>
            At PetCare Community, we believe every pet deserves a loving home.
            Whether you're here to adopt, sell, or find helpful pet care
            resources, we’re committed to connecting pet lovers with the best
            services and support.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="Facebook" />
            <img src={assets.twitter_icon} alt="Twitter" />
            <img src={assets.linkedin_icon} alt="LinkedIn" />
          </div>
        </div>

        <div className="footer-content-right">
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Adopt a Pet</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="footer-content-center">
          <h2>Contact Us</h2>
          <ul>
            <li>+91-70290-03624</li>
            <li>support@petcarecommunity.com</li>
          </ul>
        </div>
      </div>

      <hr />

      <p className="footer-copyright">
        © 2025 PetCare Community. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
