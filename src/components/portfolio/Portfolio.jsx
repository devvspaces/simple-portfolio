/* eslint-disable react/jsx-no-target-blank, jsx-a11y/anchor-is-valid, jsx-a11y/img-redundant-alt, no-unused-vars */
import React from 'react';

import './Portfolio.css';
import img1 from '../../assets/projects-img/tropical.png'
import img2 from '../../assets/projects-img/bookay.png'
import img3 from '../../assets/projects-img/deeplegal.png'
import img4 from '../../assets/projects-img/aimienpay.png'
import img5 from '../../assets/projects-img/cyta.png'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={img1} alt="" />
          </div>
          <h3>Real Time Weather App</h3>
          <p>This is a web and mobile application built with React and Kotlin. The API service is built with FastAPI. I lead a backend team of 8 developers.</p>
          <div className="portfolio__item-cta">
            <a href="https://github.com/workshopapps/tropicalweather.web" className='btn' target='_blank'>GitHub</a>
            <a href="https://tropicalweather.app/" className='btn btn-primary' target='_blank'>Visit</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={img2} alt="" />
          </div>
          <h3>P2P Online Book Store</h3>
          <p>Bookay is an online book store where you can sell and buy books. I worked on this alone using React and NextJS. All of the project is serverless, no need to manage the database.</p>
          <div className="portfolio__item-cta">
            <a href="https://github.com/devvspaces/bookay" className='btn' target='_blank'>GitHub</a>
            <a href="https://bookay.vercel.app/" className='btn btn-primary' target='_blank'>Visit</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={img3} alt="" />
          </div>
          <h3>Deep Legal</h3>
          <p>Turbo search engine for United States Laws. This project is mainly built with Django. Full text search and Indexing is powered with PostgreSQL. Smart response is enabled via a trained GPT3 model.</p>
          <div className="portfolio__item-cta">
            <a href="https://github.com/SingularityUS" className='btn' target='_blank'>GitHub</a>
            <a href="https://www.deeplegal.org/" className='btn btn-primary' target='_blank'>Visit</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={img4} alt="" />
          </div>
          <h3>Aimienpay</h3>
          <p>It can be used to manage business payroll. I developed the interface connecting it to Providus Bank, Deployed it on a VPS, setup CI/CD pipelines for other developers, and setup a Virtual Private Network inteface on Linux for secured connection with Providus.</p>
          <div className="portfolio__item-cta">
            <a href="https://github.com/spacepen-dev/" className='btn' target='_blank' rel="noreferrer noopener">GitHub</a>
            <a href="https://aimienpay.com/" className='btn btn-primary' target='_blank' rel="noreferrer noopener">Visit</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={img5} alt="" />
          </div>
          <h3>Faculty of Agriculture</h3>
          <p>This is a university web application that keeps track of students, lecturers, and courses. A permission based system is built-in. This is built with Django.</p>
          <div className="portfolio__item-cta">
            <a href="https://github.com/devvspaces/faculty" className='btn' target='_blank'>GitHub</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio