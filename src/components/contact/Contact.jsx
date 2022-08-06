/* eslint-disable react/jsx-no-target-blank, jsx-a11y/anchor-is-valid, jsx-a11y/img-redundant-alt, no-unused-vars */
import React, { useRef, useState } from 'react';
import { MdOutlineMail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';
import emailjs from 'emailjs-com';

import './Contact.css'

const Contact = () => {
  const form = useRef()
  // const [inputDetails, setInputDetails] = useState({
  //   name: '',
  //   email: '',
  //   message: ''
  // })

  // const onChangeHandler = (present) => {
  //   setInputDetails((prev) => {
  //     return {...prev, }
  //   })
  // }

  const sendEmail = (e)=> {
    e.preventDefault();

    emailjs.sendForm('service_nygil76', 'template_hoxtinu', form.current, 'XJ79SURdkZH9DkRqw');

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
            <h5 className='text-light'> samolajide20@gmail.com</h5>
            <a href="mailto:samolajide@gmail.com" rel="noreferrer">Send a message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon' />
            <h4>Messanger</h4>
            <h5 className='text-light'>Afolabi Olajide Samuel</h5>
            <a href="https://m.me/afolabiOlajide" target="_blank" rel="noreferrer">Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon' />
            <h4>whatsapp</h4>
            {/* <h5 className='text-light'>+234 701 3890 879</h5> */}
            <a href="https://wa.link/glt1x5" target="_blank" rel="noreferrer">Send a message</a>
          </article>
        </div>
        {/* end of conatct options */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your Full Name' required />
          <input type="email" name="email" placeholder='E-mail Address' required  />
          <textarea name="message" rows="10" placeholder='message' required ></textarea>
          <button type="submit" className='btn btn-primary'>Send a message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact