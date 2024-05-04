// src/components/Button.js
import React from 'react';

function Button({ type, text }) {
  const buttonStyle = 
  type === 'primary' ? 'primary-button' : 'secondary-button';
  return (
    <button className={buttonStyle}>
      {text}
    </button>
  );
}

export default Button;