import React, { useState, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './LoginPopup.css';
import Input from '../../../atoms/input/input';
import Button from '../../../atoms/button/Button';
import { assets } from '../../../assets/assets';
import useValidation from '../../../hooks/useValidation';
import { toast } from 'react-toastify';
import { loginUser, registerUser, verifyOtp,  } from '../../../services/authService';

const LoginPopup = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const initialState = location.pathname === '/register' ? 'Register' : 'Login';
  const [currState, setCurrState] = useState(initialState);
  const [data, setData] = useState({ 
    name: '', 
    email: '', 
    password: '' 
  });
  const [otpArray, setOtpArray] = useState(['', '', '', '']);
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [userId, setUserId] = useState(null);
  const { errors, validate } = useValidation();
  const inputRefs = useRef([]);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setData(prev => ({ ...prev, [name]: value }));
  };

  // submit for sending otp
  const onSubmit = async (e) => {
    e.preventDefault();
    if (!validate(data, currState)) return;

    try {
      let response;
      if (currState === 'Register') {
        response = await registerUser(data);
        toast.success('Registered! OTP sent to your email.');
      } else {
        response = await loginUser({ email: data.email, password: data.password });
        toast.info('OTP sent to your email.');
      }

      setShowOtpInput(true);
      setUserId(response.data.data._id);
    } catch (error) {
      const msg = error.response?.data?.message || 'Unexpected error';
      toast.error(msg);
    }
  };

  const handleOtpChange = (index, value) => {
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otpArray];
    newOtp[index] = value;
    setOtpArray(newOtp);

    if (value && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleOtpKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otpArray[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  // Handle OTP
  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    const otp = otpArray.join('');
    if (otp.length < 4) return toast.warn('Please enter complete OTP');

    try {
      console.log("Sending OTP verification", { userId, otp });
      const response = await verifyOtp(userId, otp);
      
      if (response.data.status === 'VERIFIED') {
        toast.success('OTP verified successfully!');
        setShowOtpInput(false);
        setOtpArray(['', '', '', '']);
        setData({ name: '', email: '', password: '' });
      }
    } catch (error) {
      const msg = error.response?.data?.message || 'OTP verification failed';
      toast.error(msg);
    }
  };

  const handleSocialLogin = (provider) => {
    console.log(`Login with ${provider}`);
  };

  return (
    <div className="login-page">
      <div className="left-side">
        <img src={assets.loginBback} alt="Pet" className='login-background' />
        <div className="overlay">
          <div className="logo"><img src={assets.logo} alt="logo" /></div>
          <h2>Connect with Pet Lovers</h2>
          <p>Join a caring community dedicated to happy, healthy pets. Share stories, tips, and find support.</p>
        </div>
      </div>

      <div className="right-side">
        <div className="form-box">
          <div className="logo"><img src={assets.logo} alt="logo" /></div>
          <h2>{showOtpInput ? 'Verify OTP' : (currState === 'Login' ? 'Welcome Back!' : 'Join Our Community')}</h2>
          <p className='login-desc'>
            {showOtpInput ? 'Enter the 4-digit code sent to your email.' : 'Log in to continue your pet care journey.'}
          </p>

          {!showOtpInput ? (
            <>
              <div className="button-group">
                <Button
                  text={<span className="social-btn-content"><img src={assets.googleLogo} alt="google" /> Login with Google</span>}
                  className="google-btn"
                  onClick={() => handleSocialLogin('Google')}
                />
                <Button
                  text={<span className="social-btn-content"><img src={assets.facebookLogo} alt="facebook" /> Login with Facebook</span>}
                  className="facebook-btn"
                  onClick={() => handleSocialLogin('Facebook')}
                />
              </div>

              <div className="divider">or</div>

              <form onSubmit={onSubmit}>
                {currState === 'Register' && (
                  <>
                    <Input type="text" name="name" placeholder="Enter your name" value={data.name} onChange={onChangeHandler} />
                    {errors.name && <p className="error-text">{errors.name}</p>}
                  </>
                )}

                <Input type="email" name="email" placeholder="Enter your email" value={data.email} onChange={onChangeHandler} />
                {errors.email && <p className="error-text">{errors.email}</p>}

                <Input type="password" name="password" placeholder="Enter your password" value={data.password} onChange={onChangeHandler} />
                {errors.password && <p className="error-text">{errors.password}</p>}

                <Button type="submit" text={currState} className='login-btn' />
              </form>

              <p className="toggle-text">
                {currState === 'Login' ? "Don't have an account? " : "Already have an account? "}
                <span
                  onClick={() => {
                    const next = currState === 'Login' ? 'Register' : 'Login';
                      setCurrState(next);
                      navigate(next === 'Login' ? '/login' : '/register');
                    }}
                  >
                  {currState === 'Login' ? 'Register' : 'Login'}
                </span>
              </p>
            </>
          ) : (
            <form onSubmit={handleOtpSubmit}>
              <div className="otp-box">
                {otpArray.map((digit, i) => (
                  <input key={i} type="text" maxLength="1" value={digit} ref={(el) => (inputRefs.current[i] = el)} onChange={(e) => handleOtpChange(i, e.target.value)} onKeyDown={(e) => handleOtpKeyDown(i, e)} className="otp-input"/>
                ))}
              </div>
              <Button type="submit" text="Verify OTP" className="login-btn" />
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginPopup;