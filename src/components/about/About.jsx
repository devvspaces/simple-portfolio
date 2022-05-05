import React from 'react';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';

import './About.css'
import meImg from "../../assets/about-img.jpeg";

const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={meImg} alt="" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card"> 
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>3+ Years Experience</small>
            </article>

            <article className="about__card"> 
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>300+ Worldwide</small>
            </article>

            <article className="about__card"> 
              <VscFolderLibrary className='about__icon' />
              <h5>projects</h5>
              <small>80+ Completed</small>
            </article>
          </div>

          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda sed, cumque quis in eum molestias asperiores aperiam rem dolorum fugiat perferendis minus laudantium illo placeat sit consectetur minima laboriosam cupiditate!
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About