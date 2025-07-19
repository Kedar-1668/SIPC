import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { SiGmail, SiX, SiYoutube } from 'react-icons/si';
import logo from "../assets/logo1.png";
import Instagram from '../assets/Instagram.png';
import Twitter from '../assets/Twitter.png';
import YouTube from '../assets/Youtube.png';
import Gmail from '../assets/Gmail.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const nav = document.querySelector('.navbar');
    const handleScroll = () => {
      if (window.scrollY > 20) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar ${menuOpen ? 'menu-open' : ''}`}>
      <div className="nav-left">
        <NavLink to="/" className="logo">
          <img src={logo} alt="SIPC Logo" className="logo-image" />
        </NavLink>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <ul className={`pill-nav ${menuOpen ? 'show' : ''}`}>
        <li>
          <NavLink 
            to="/" 
            className={({ isActive }) => `pill-link${isActive ? " active" : ""}`}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/about" 
            className={({ isActive }) => `pill-link${isActive ? " active" : ""}`}
          >
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/events" 
            className={({ isActive }) => `pill-link${isActive ? " active" : ""}`}
          >
            Events
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/members" 
            className={({ isActive }) => `pill-link${isActive ? " active" : ""}`}
          >
            Members
          </NavLink>
        </li>
        {/* <li>
          <NavLink 
            to="/partner" 
            className={({ isActive }) => `pill-link${isActive ? " active" : ""}`}
          >
            Partners
          </NavLink>
        </li> */}
        <li>
          <NavLink 
            to="/join" 
            className={({ isActive }) => `pill-link${isActive ? " active" : ""}`}
          >
            Join Us
          </NavLink>
        </li>
      </ul>

      <div className="nav-right">
        <span className="follow-label">Follow:</span>
        <div className="social-icons">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://gmail.com" target="_blank" rel="noopener noreferrer"><SiGmail /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><SiX /></a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><SiYoutube /></a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
