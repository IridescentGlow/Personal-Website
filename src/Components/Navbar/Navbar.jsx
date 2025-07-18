import React, { useState } from 'react';
import logo from '../Assets/Logo.png';
import './Navbar.css'
// import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark, faBars } from '@fortawesome/free-solid-svg-icons'

function Navbar() {

  // Menu functionality

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='navbar'>
        <nav>
            <a href='/#header'>
                <img src={logo} alt="Andres-Choque-Logo" className='logo'/>
            </a>
            <ul className={menuOpen ? "active" : ""}>
                <li><a href="/#header">Home</a></li>
                <li><a href="/#about">About</a></li>
                
                <li><a href="/#services">Services</a></li>
                <li><a href="/#portfolio">Portfolio</a></li>
                <li><a href="/#contact">Contact</a></li>
                <FontAwesomeIcon icon={faCircleXmark} onClick={toggleMenu}/>
            </ul>
            <FontAwesomeIcon icon={faBars} onClick={toggleMenu}/>
        </nav>
    </div>
  )
}

export default Navbar