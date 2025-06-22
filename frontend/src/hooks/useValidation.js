import { useState } from 'react';

// eslint-disable-next-line no-unused-vars
const useValidation = (initialState) => {
  const [errors, setErrors] = useState({});

  const validate = (data, mode = 'Login') => {
    const newErrors = {};

    if (mode === 'Register' && !data.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!data.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(data.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!data.password.trim()) {
      newErrors.password = 'Password is required';
    } else if (data.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return { errors, validate };
};

export default useValidation;