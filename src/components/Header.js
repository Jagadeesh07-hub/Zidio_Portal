import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); // Get the current location

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={`header ${menuOpen ? 'open' : ''}`}>
      <div className="menu-icon" onClick={toggleMenu}>
        <div className={`hamburger ${menuOpen ? 'active' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className="logo">
        <h1>Zidio Development</h1>
      </div>
      <nav className={`nav-menu ${menuOpen ? 'open' : ''}`}>
        <Link to="/" className={location.pathname === '/' ? 'active' : ''} onClick={toggleMenu}>Home</Link>
        <Link to="/timeline" className={location.pathname === '/timeline' ? 'active' : ''} onClick={toggleMenu}>Timeline</Link>
        <Link to="/team" className={location.pathname === '/team' ? 'active' : ''} onClick={toggleMenu}>Team</Link>
        <Link to="/reviews" className={location.pathname === '/reviews' ? 'active' : ''} onClick={toggleMenu}>Reviews</Link>
        <Link to="/achievements" className={location.pathname === '/achievements' ? 'active' : ''} onClick={toggleMenu}>Achievements</Link>
        <Link to="/careers" className={location.pathname === '/careers' ? 'active' : ''} onClick={toggleMenu}>Careers</Link>
        <Link to="/videos" className={location.pathname === '/videos' ? 'active' : ''} onClick={toggleMenu}>Meet the Team</Link>
        <Link to="/about" className={location.pathname === '/about' ? 'active' : ''} onClick={toggleMenu}>About</Link>
        <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''} onClick={toggleMenu}>Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
