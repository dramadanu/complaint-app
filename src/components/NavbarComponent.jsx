
// import React from 'react'
import { Link } from 'react-router-dom';
import telkomselLogo from '../assets/mainlogo-rev.png';


const NavbarComponent = () => {
  return (
    <>
        <nav>
        <div className="logo">
          <a href="https://www.telkomsel.com/" target="_blank" rel="noopener noreferrer">
            <img src={telkomselLogo} alt="logo" />
          </a>
        </div>

        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/layanan">Layanan</Link></li>
            <li><Link to="/contact">Laporan</Link></li>
            <li><Link to="/bantuan">Bantuan</Link></li>
            <li><Link to="/signIn" className="sign-in"><button>Sign In</button></Link></li>
        </ul>

        <div className="menu-toggle">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </nav>
    </>
  )
}

export default NavbarComponent