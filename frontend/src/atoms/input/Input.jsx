import React from 'react';
import './Input.css';

const Input = ({ type = 'text', name = '', placeholder = '', value = '', onChange, className = '' }) => {
  return (
    <input className={`input ${className}`} type={type} name={name} placeholder={placeholder} value={value} onChange={onChange}/>
  );
};

export default Input;
