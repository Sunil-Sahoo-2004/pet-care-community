import React, { useEffect } from 'react';
import Lottie from 'lottie-react';
import './SuccessAnimation.css';
import { assets } from '../../assets/assets';

const SuccessAnimation = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="success-animation">
      <Lottie animationData={assets.successAnimation} loop={false} />
      <p className="success-message">You're in! Redirecting...</p>
    </div>
  );
};

export default SuccessAnimation;
