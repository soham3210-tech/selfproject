import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/Sanatan-Path-Logo.png';

function Navbar() {
  // State to track if the mobile side-menu is open or closed
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Helper function to close the menu when a link is clicked
  const closeMenu = () => setIsMenuOpen(false);

  return (
    // 'nav-active' class is toggled based on isMenuOpen state for CSS animations
    //const navClass = isMenuOpen ? 'nav-active' : '';
    //<nav className={navClass}></nav>
    <nav className={isMenuOpen ? 'nav-active' : ''}>
      <div className="logo">
        <Link to="/" onClick={closeMenu}><img src={logo} alt="logo" /></Link>
      </div>

      {/* Hamburger / Close Icon toggles the menu state */}
      <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? '✕' : '☰'}
      </div>

      {/* Navigation Links - will slide in from the right on mobile */}
      <ul className="nav-links">
        <li><Link to="/" onClick={closeMenu}>HOME</Link></li>
        <li><Link to="/service" onClick={closeMenu}>SERVICES</Link></li>
        <li><Link to="/contact" onClick={closeMenu}>CONTACT</Link></li>
        <li><Link to="/blog" onClick={closeMenu}>BLOG</Link></li>
        <li><Link to="/book" onClick={closeMenu}>BOOKS</Link></li>
        <li><Link to="/about" onClick={closeMenu}>ABOUT</Link></li>
      </ul>

      {/* Action Buttons - also hidden/shown with the side-menu on mobile */}
      <div className="btns">
        <Link to="/login" onClick={closeMenu}><button className="btn" >Login / Signup</button></Link>
      </div>
    </nav>
  );
}

export default Navbar;