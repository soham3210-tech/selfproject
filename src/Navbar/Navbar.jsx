import logo from '../assets/Sanatan-Path-Logo.png'
import './Navbar.css'
function Navbar() {
  return (
    <nav>
      <div className="logo"><img src={logo} alt="logo" /></div>
      <ul class="nav-links">
        <li><a href="#">HOME</a></li>
        <li><a href="#">SERVICES</a></li>
        <li><a href="#">PORTFOLIO</a></li>
        <li><a href="#">ABOUT</a></li>
      </ul>
      <div class="btns"><button class="btn">Login / Signup</button>


      </div>
    </nav>
  )
}

export default Navbar