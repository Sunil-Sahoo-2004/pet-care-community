import React from "react";
import "./Header.css";
import { assets } from "../../../../assets/assets";
import Button from "../../../../atoms/button/Button";

const Header = () => {
  return (
    <div className="header">
      <img src={assets.header} alt="Header-Image" className="header-bg" />
      <div className="header-overlay">
        <h1>PetConnect : Your Community for Happy Pets!</h1>
        <p>
          Join a vibrant community of pet parents, get expert advice, discover
          local events, and share the joy of pet ownership.
        </p>
        <Button text="Join the Community Today!" className="cta-btn" />
      </div>
    </div>
  );
};

export default Header;
