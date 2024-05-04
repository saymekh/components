// src/components/Header.js
import React from 'react';
import styles from '../css/index.css'

function Header() {
  return (
    <header className="header container">
      <h2>Optica</h2>
      <nav>
        <ul className="nav-list">
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;