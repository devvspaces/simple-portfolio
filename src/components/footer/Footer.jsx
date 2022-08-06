/* eslint-disable react/jsx-no-target-blank, jsx-a11y/anchor-is-valid, jsx-a11y/img-redundant-alt, no-unused-vars */
import React from 'react'
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';

import './Footer.css';

const Footer = () => {
  return (
    <footer id='footer'>
      <a href="#" className="footer__logo">Afolabi Olajide Samuel</a>

      <ul className="permalinks">
        <li><a href="#" rel="noreferrer">home</a></li>
        <li><a href="#about" rel="noreferrer">about</a></li>
        <li><a href="#skills" rel="noreferrer">skills</a></li>
        {/* <li><a href="#service" rel="noreferrer">service</a></li> */}
        <li><a href="#portfolio" rel="noreferrer">portfolio</a></li>
        {/* <li><a href="#testimonial" rel="noreferrer">testimonial</a></li> */}
        <li><a href="#contact" rel="noreferrer">contact</a></li>
      </ul>

      <div className="footer__socials" rel="noreferrer">
        <a href="https://linkedIn.com/in/afolabiolajide" target='_blank' rel="noreferrer noopener"><BsLinkedin/></a>
        <a href="https://github.com/afolabiolajide" target='_blank' rel="noreferrer noopener"><BsGithub/></a>
        <a href="https://twitter.com/officialcipherr" target='_blank' rel="noreferrer noopener"><BsTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Afolabi Olajide Samuel. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer