// src/components/Banner.js
import React from 'react';
import Button from './Button';
import styles from '../css/index.css';


function Banner({ primaryButtonText, secondaryButtonText }) {
  return (
    <div className="banner container">
      <div className='banner-content'>
      <h1>Visionary <span>Optica</span></h1>
      <p>
      <span id='paragraph-span'>Optica</span>: Expertly crafted glasses with 
      precise lens technology. Find your perfect frame from our extensive 
      designer collection.
      </p>
      </div>
      <button className="primary-button">Shop Now</button>
      <button className="secondary-button">Learn More</button>
      <img src='https://images.unsplash.com/photo-1559070081-648fb00b2ed1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGdsYXNzZXN8ZW58MHwwfDB8fHww' alt='Optica' />
    </div>
  );
}

export default Banner;