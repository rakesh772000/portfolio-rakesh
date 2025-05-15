import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the hamburger menu
  const toggleMenu = () => setIsOpen(!isOpen);

  // Close the menu after a link click
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <h1 className="logo">RAKESH PERAM</h1>

      <div 
        className="hamburger" 
        onClick={toggleMenu} 
        aria-expanded={isOpen ? 'true' : 'false'} 
        aria-label="Toggle menu"
      >
        <span className={`bar ${isOpen ? 'open' : ''}`}></span>
        <span className={`bar ${isOpen ? 'open' : ''}`}></span>
        <span className={`bar ${isOpen ? 'open' : ''}`}></span>
      </div>

      <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
        <li><Link to="/" onClick={closeMenu}>Home</Link></li>
        <li><Link to="/about" onClick={closeMenu}>About</Link></li>
        <li><Link to="/projects" onClick={closeMenu}>Projects</Link></li>
        <li><Link to="/skills" onClick={closeMenu}>Skills</Link></li>
        <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
        <li>
          <a href="/RAKESH PERAM.pdf" download className="button">Resume</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
