// src/Header.js
import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import './Header.css';

const Header = ({ setPage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div className="hamburger" onClick={toggleMenu}>
          <FaBars />
        </div>
        <ul className={`nav-items ${isOpen ? 'open' : ''}`}>
          <li onClick={() => setPage('one')}>One</li>
          <li onClick={() => setPage('two')}>Two</li>
          <li onClick={() => setPage('three')}>Three</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
