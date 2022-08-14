/* eslint-disable react/jsx-no-target-blank, jsx-a11y/anchor-is-valid, jsx-a11y/img-redundant-alt, no-unused-vars */
import React from 'react';

import './Portfolio.css';
import img1 from '../../assets/projects-img/weatherinfo-shot.png'
import img2 from '../../assets/projects-img/dashboard-demo-shot.png'
import img3 from '../../assets/projects-img/sunny-cosmetics-shot.png'
import img4 from '../../assets/projects-img/color-library-shot.png'
import img5 from '../../assets/portfolio5.webp'
import img6 from '../../assets/portfolio6.webp'

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
          <h3>Weather Info</h3>
          <p>A Weather application where you can get real-time information on the current weather in any given area.</p>
          <div className="portfolio__item-cta">
            <a href="https://github.com/AfolabiOlajide/weatherInfo-v2" className='btn' target='_blank'>GitHub</a>
            <a href="https://weatherinfo-v2.netlify.app/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={img2} alt="" />
          </div>
          <h3>Admin Dashboard Design</h3>
          <p>A Fictional admin dashboard design built for a fictional E-commerce application.</p>
          <div className="portfolio__item-cta">
            <a href="https://github.com/AfolabiOlajide/dashboard-design" className='btn' target='_blank'>GitHub</a>
            <a href="https://cipherr-dashboard-demo.netlify.app/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={img3} alt="" />
          </div>
          <h3>Sunny Cosmetics</h3>
          <p>A landing page created for a fictional cosmetics E-commerce website.</p>
          <div className="portfolio__item-cta">
            <a href="https://github.com/AfolabiOlajide/sunny-cosmetics" className='btn' target='_blank' rel="noreferrer noopener">GitHub</a>
            <a href="https://cipherr-sunny-cosmetics.netlify.app/" className='btn btn-primary' target='_blank' rel="noreferrer noopener">Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={img4} alt="" />
          </div>
          <h3>Color Library</h3>
          <p>A color palette project where you can choose, create and get any color of your choice.</p>
          <div className="portfolio__item-cta">
            <a href="https://github.com/AfolabiOlajide/Color-Library" className='btn' target='_blank'>GitHub</a>
            <a href="https://color-library.netlify.app/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        {/* <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={img5} alt="" />
          </div>
          <h3>This is a portfolio Item Title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn' target='_blank' rel="noreferrer noopener">GitHub</a>
            <a href="https://dribbble.com/alien_pixels" className='btn btn-primary' target='_blank' rel="noreferrer noopener">Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={img6} alt="" />
          </div>
          <h3>This is a portfolio Item Title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn' target='_blank' rel="noreferrer noopener">GitHub</a>
            <a href="https://dribbble.com/alien_pixels" className='btn btn-primary' target='_blank' rel="noreferrer noopener">Live Demo</a>
          </div>
        </article> */}
      </div>
    </section>
  )
}

export default Portfolio