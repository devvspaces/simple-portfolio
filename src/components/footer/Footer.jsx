/* eslint-disable react/jsx-no-target-blank, jsx-a11y/anchor-is-valid, jsx-a11y/img-redundant-alt, no-unused-vars */
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
        <li><a href="#home" rel="noreferrer">home</a></li>
        <li><a href="#about" rel="noreferrer">about</a></li>
        <li><a href="#experience" rel="noreferrer">experience</a></li>
        <li><a href="#service" rel="noreferrer">service</a></li>
        <li><a href="#portfolio" rel="noreferrer">portfolio</a></li>
        <li><a href="#testimonial" rel="noreferrer">testimonial</a></li>
        <li><a href="#contact" rel="noreferrer">contact</a></li>
      </ul>

      <div className="footer__socials" rel="noreferrer">
        <a href="https://facebook.com" rel="noreferrer"><FaFacebookF /></a>
        <a href="https://instagram.com" rel="noreferrer"><FiInstagram /></a>
        <a href="https://twitter.com"  rel="noreferrer"><IoLogoTwitter /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Afolabi Olajide Samuel. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer