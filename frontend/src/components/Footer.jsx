import React from 'react';
import './Footer.css';
import { FaInstagram } from 'react-icons/fa';
// import { FaLinkedin } from 'react-icons/fa';
import {  SiX, SiYoutube } from 'react-icons/si';
// import { SiGmail } from 'react-icons/si';
import sipcLogo from '../assets/logo1.png'; // Replace with your IEEE logo path
import siliconLogo from '../assets/Silicon_logo.png'; // Replace with your Silicon University logo path

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">

          <div className="footer-section">
            <a href="/">
              <img src={sipcLogo} alt="SIPC Logo" className="footer-logo" />
            </a>
            <p className="contact-title">Contact Us :</p>
            <p className="contact-email">Sipc@silicon.ac.in</p>
          </div>

          <div className="footer-section footer-center">
            <p className="follow-text">Follow us</p>
            <div className="social-icons">
              <a href="https://www.instagram.com/nirmansilicon?igsh=ajZpN2s0amt5bGw4" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              {/* <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a> */}
              {/* <a href="https://gmail.com" target="_blank" rel="noopener noreferrer"><SiGmail /></a> */}
              <a href="https://x.com/nirman_silicon" target="_blank" rel="noopener noreferrer"><SiX /></a>
              <a href="https://youtube.com/@nirmansilicon?si=x4_Qi315jG1FAl1s" target="_blank" rel="noopener noreferrer"><SiYoutube /></a>
            </div>
          </div>

          <div className="footer-section">
            <img src={siliconLogo} alt="SIPC Logo" className="footer-logo" />
            <p className="university-name">Silicon University</p>
            <p className="university-location">
              Silicon Hills, Patia<br />
              Bhubaneswar, Odisha, India
            </p>
          </div>
        </div>

      <div className="footer-bottom">
        &copy; 2025 SIPC Silicon. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
