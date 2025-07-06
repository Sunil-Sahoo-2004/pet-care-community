import React from 'react';

const Checkbox = ({ label, ...props }) => {
  return (
    <label className="checkbox">
      <input type="checkbox" {...props} />
      {label}
    </label>
  );
};

export default Checkbox;
