import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

const LoginPopup = ({setShowLogin}) => {

  const [currState, setCurrState] = useState("Login")
  return (
    <div className='login-popup'>
      <form className="login-popup-container">
        <div className='popup-left'>
          <div className="top-logo">
            <img src={assets.logo} alt="This is the logo icon" />
          </div>
          <h2>Welcome to<br /><strong>PET CARE COMMUNITY!</strong></h2>
          <p>Register to avail the best deals!</p>

          <div className='features'>
            <div className='feature-box'>
              <h4>Exclusive Deals and Discount</h4>
              <p>Unlock savings with our exclusive deals and discounts.</p>
            </div>
            <div className='feature-box'>
              <h4>Swift Checkout Experience</h4>
              <p>Effortless checkout awaits: swift, seamless, and stress-free!</p>
            </div>
            <div className='feature-box'>
              <h4>Easy Orders Tracking</h4>
              <p>Track your order history with ease, every step of the way!</p>
            </div>
          </div>
        </div>

        <div className='popup-right'>
          <div className="login-popup-title">
            <h2>{currState}</h2>
            
          </div>

          <div className="login-popup-inputes">
            {currState === "Login"?<></>:<input type="text" placeholder='Your name' required />}
            <input type="email" placeholder='Your email' required />
            <input type="password" placeholder='Password' required />
          </div>

          <button>{currState === "Sign Up"?"Create Account":"Login"}</button>
          <div className="login-popup-condition">
            <input type="checkbox" required />
            <p>By continuing, i agree to the terms of use & privacy policy.</p>
          </div>
          {currState==="Login"
            ?<p className="pop">Create a new account? <span onClick={()=>setCurrState("Sign Up")}>Click here</span></p>
            :<p className="pop">Already have an account? <span onClick={()=>setCurrState("Login")}>Login here</span></p>
          }  
        </div>
        
      </form>
      <img onClick={() => setShowLogin(false)} src={assets.cross} alt="This is the cross icon for come back to main page" className='cross' />
      
    </div>
  )
}

export default LoginPopup
