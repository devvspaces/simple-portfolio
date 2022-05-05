import React from 'react'
import { FaFacebookF } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { IoLogoTwitter } from 'react-icons/io';

import './Footer.css';

const Footer = () => {
  return (
    <footer id='footer'>
      <a href="#" className="footer__logo">Afolabi Olajide Samuel</a>

      <ul className="permalinks">
        <li><a href="#home">home</a></li>
        <li><a href="#about">about</a></li>
        <li><a href="#experience">experience</a></li>
        <li><a href="#service">service</a></li>
        <li><a href="#portfolio">portfolio</a></li>
        <li><a href="#testimonial">testimonial</a></li>
        <li><a href="#contact">contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com"><FaFacebookF /></a>
        <a href="https://instagram.com"><FiInstagram /></a>
        <a href="https://twitter.com"><IoLogoTwitter /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Afolabi Olajide Samuel. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer