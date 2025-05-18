import React, { useContext, useState } from 'react';
import './LoginPopup.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';

const LoginPopup = ({ setShowLogin }) => {
  const { url, setToken } = useContext(StoreContext);

  const [currState, setCurrState] = useState("Login");
  const [showOtp, setShowOtp] = useState(false);
  const [userId, setUserId] = useState(null);
  const [otp, setOtp] = useState("");

  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setData(prev => ({ ...prev, [name]: value }));
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${url}/api/user/verifyOTP`, { userId, otp });

      if (res.data.success) {
        setToken(res.data.token);
        localStorage.setItem("token", res.data.token);
        alert("Account verified!");
        setShowLogin(false);
      }
      else {
        alert(res.data.message);
      }
    } catch (error) {
      console.error(error);
      alert("Failed to verify OTP");
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const endpoint = currState === "Login" ? "login" : "register";
      const response = await axios.post(`${url}/api/user/${endpoint}`, data);

      if (response.data.status === "PENDING") {
        // OTP Sent - Proceed to verification
        setUserId(response.data.data._id);
        setShowOtp(true);
      } 
      else if (response.data.success) {
        // Login Successful
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
        setShowLogin(false);
      } 
      else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error(error);
      alert("Error during login/register");
    }
  };

  return (
    <div className="login-popup">
      <form onSubmit={showOtp ? handleOtpSubmit : onSubmit} className="login-popup-container">

        <div className="popup-left">
          <div className="top-logo">
            <img src={assets.logo} alt="Logo" />
          </div>

          <h2>Welcome to<br /><strong>PET CARE COMMUNITY!</strong></h2>
          <p>Register to avail the best deals!</p>

          <div className="features">
            <div className="feature-box">
              <h4>Exclusive Deals and Discount</h4>
              <p>Unlock savings with our exclusive deals and discounts.</p>
            </div>

            <div className="feature-box">
              <h4>Swift Checkout Experience</h4>
              <p>Effortless checkout awaits: swift, seamless, and stress-free!</p>
            </div>

            <div className="feature-box">
              <h4>Easy Orders Tracking</h4>
              <p>Track your order history with ease, every step of the way!</p>
            </div>

          </div>
        </div>

        <div className="popup-right">
          <div className="login-popup-title">
            <h2>{showOtp ? "Verify OTP" : currState}</h2>
          </div>

          <div className="login-popup-inputes">
            {!showOtp && currState === "Sign Up" && (
              <input name="name" value={data.name} onChange={onChangeHandler} type="text" placeholder="Your name" required />
            )}
            {!showOtp && (
              <>
                <input name="email" value={data.email} onChange={onChangeHandler} type="email" placeholder="Your email" required />
                <input name="password" value={data.password} onChange={onChangeHandler} type="password" placeholder="Password" required />
              </>
            )}
            {showOtp && (
              <input value={otp} onChange={(e) => setOtp(e.target.value)} type="text" placeholder="Enter OTP" required />
            )}
          </div>

          <button type="submit">{showOtp ? "Verify OTP" : (currState === "Sign Up" ? "Create Account" : "Login")}</button>

          {!showOtp && (
            <>
              <div className="login-popup-condition">
                <input type="checkbox" required />
                <p>By continuing, I agree to the terms of use & privacy policy.</p>
              </div>
              {currState === "Login" ? (
                <p className="pop">Create a new account? <span onClick={() => setCurrState("Sign Up")}>Click here</span></p>
              ) : (
                <p className="pop">Already have an account? <span onClick={() => setCurrState("Login")}>Login here</span></p>
              )}
            </>
          )}
        </div>
      </form>
      <img onClick={() => setShowLogin(false)} src={assets.cross} alt="Close" className="cross" />
    </div>
  );
};

export default LoginPopup;
