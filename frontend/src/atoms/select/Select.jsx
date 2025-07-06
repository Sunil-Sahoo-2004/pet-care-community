import React from 'react';

const Select = ({ options = [], ...props }) => {
  return (
    <select className="select" {...props}>
      {options.map((opt, i) => (
        <option key={i} value={opt.value || opt}>{opt.label || opt}</option>
      ))}
    </select>
  );
};

export default Select;
