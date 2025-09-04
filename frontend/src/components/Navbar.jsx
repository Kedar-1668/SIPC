import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { FaInstagram } from 'react-icons/fa';
// import { FaLinkedin } from 'react-icons/fa';
import { SiX, SiYoutube } from 'react-icons/si';
// import { SiGmail } from 'react-icons/si';
import logo from '../assets/logo1.png';

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

  return (
    <nav className="navbar">
      <div className="nav-left">
        <NavLink to="/" className="logo">
          <img src={logo} alt="SIPC Logo" className="logo-image" />
        </NavLink>
      </div>

      {/* Hamburger button */}
      <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Links */}
      <ul className={`pill-nav ${menuOpen ? 'show' : ''}`}>
        <li>
          <NavLink to="/" className={({ isActive }) => `pill-link${isActive ? " active" : ""}`} onClick={() => setMenuOpen(false)}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => `pill-link${isActive ? " active" : ""}`} onClick={() => setMenuOpen(false)}>
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink to="/events" className={({ isActive }) => `pill-link${isActive ? " active" : ""}`} onClick={() => setMenuOpen(false)}>
            Events
          </NavLink>
        </li>
        <li>
          <NavLink to="/members" className={({ isActive }) => `pill-link${isActive ? " active" : ""}`} onClick={() => setMenuOpen(false)}>
            Members
          </NavLink>
        </li>
        <li>
          <NavLink to="/join" className={({ isActive }) => `pill-link${isActive ? " active" : ""}`} onClick={() => setMenuOpen(false)}>
            Join Us
          </NavLink>
        </li>
      </ul>

      <div className="nav-right">
        <span className="follow-label">Follow:</span>
        <div className="social-icons">
          <a href="https://www.instagram.com/nirmansilicon?igsh=ajZpN2s0amt5bGw4" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          {/* <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a> */}
          {/* <a href="https://gmail.com" target="_blank" rel="noopener noreferrer"><SiGmail /></a> */}
          <a href="https://x.com/nirman_silicon" target="_blank" rel="noopener noreferrer"><SiX /></a>
          <a href="https://youtube.com/@nirmansilicon?si=x4_Qi315jG1FAl1s" target="_blank" rel="noopener noreferrer"><SiYoutube /></a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
