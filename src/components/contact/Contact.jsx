/* eslint-disable react/jsx-no-target-blank, jsx-a11y/anchor-is-valid, jsx-a11y/img-redundant-alt, no-unused-vars */
import React, { useRef, useState } from 'react';
import { MdOutlineMail } from 'react-icons/md';
import { BsWhatsapp } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import emailjs from 'emailjs-com';

import './Contact.css'

const Contact = () => {
  const form = useRef()

  const sendEmail = (e)=> {
    e.preventDefault();

    emailjs.sendForm('service_oh07hqa', 'template_23cqgrh', form.current, 'jkfyjw0FYqxGIMSW4');

    e.target.reset();
  }

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail className='contact__option-icon' />
            <h4>E-mail</h4>
            <h5 className='text-light'>sketcherslodge@gmail.com</h5>
            <a href="mailto:sketcherslodge@gmail.com" rel="noreferrer">Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon' />
            <h4>Whatsapp</h4>
            <a href="https://wa.me/0903329516" target="_blank" rel="noreferrer">Send a message</a>
          </article>
          <article className="contact__option">
            <BsLinkedin className='contact__option-icon' />
            <h4>LinkedIn</h4>
            <a href="https://www.linkedin.com/in/ayomide-ayanwola/" target="_blank" rel="noreferrer">Send a message</a>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Contact