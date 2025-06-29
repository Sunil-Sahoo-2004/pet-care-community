import React from 'react';
import './Footer.css';
import { assets } from '../../../assets/assets';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-grid">

        {/* Brand Info */}
        <div className="footer-brand">
          <img src={assets.logo} alt="PetConnect Logo" className="footer-logo" />
          <h3>PetConnect</h3>
          <p>
            PetConnect is your trusted companion for all things pets. From adoption to care,
            our platform brings pet lovers together in a joyful and informative space.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/adoption">Adoption</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/forum">Forum</a></li>
            <li><a href="/knowledge">Knowledge Hub</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div className="footer-section">
          <h4>Resources</h4>
          <ul>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/help">Help Center</a></li>
            <li><a href="/terms">Terms & Conditions</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Contact & Newsletter */}
        <div className="footer-section">
          <h4>Stay Connected</h4>
          <p>📧 support@petconnect.com</p>
          <p>📞 +91 98765 43210</p>

          <div className="footer-social">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} PetConnect. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
