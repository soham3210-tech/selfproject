import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/Sanatan-Path-Logo.png';

function Navbar() {
  return (
    <nav>
      <div className="logo">
        <Link to="/"><img src={logo} alt="logo" /></Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/service">SERVICES</Link></li>
        <li><Link to="/contact">CONTACT</Link></li>
        <li><Link to="/blog">BLOG</Link></li>
        <li><Link to="/book">BOOKS</Link></li>
        <li><Link to="/about">ABOUT</Link></li>
      </ul>
      <div className="btns">
        <button className="btn">Login / Signup</button>
      </div>
    </nav>
  );
}

export default Navbar;