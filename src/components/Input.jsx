// src/components/Input.jsx
import React from 'react';

const Input = ({ type, placeholder, value, onChange, name }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
      className="input"
    />
  );
};

export default Input;