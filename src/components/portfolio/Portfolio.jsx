/* eslint-disable react/jsx-no-target-blank, jsx-a11y/anchor-is-valid, jsx-a11y/img-redundant-alt, no-unused-vars */
import React from 'react';

import './Portfolio.css';
import img1 from '../../assets/portfolio1.webp'
import img2 from '../../assets/portfolio2.webp'
import img3 from '../../assets/portfolio3.webp'
import img4 from '../../assets/portfolio4.webp'
import img5 from '../../assets/portfolio5.webp'
import img6 from '../../assets/portfolio6.webp'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My recnt Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={img1} alt="" />
          </div>
          <h3>This is a portfolio Item Title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn' target='_blank'>GitHub</a>
            <a href="https://dribbble.com/alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={img2} alt="" />
          </div>
          <h3>This is a portfolio Item Title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn' target='_blank'>GitHub</a>
            <a href="https://dribbble.com/alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={img3} alt="" />
          </div>
          <h3>This is a portfolio Item Title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn' target='_blank' rel="noreferrer noopener">GitHub</a>
            <a href="https://dribbble.com/alien_pixels" className='btn btn-primary' target='_blank' rel="noreferrer noopener">Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={img4} alt="" />
          </div>
          <h3>This is a portfolio Item Title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn' target='_blank'>GitHub</a>
            <a href="https://dribbble.com/alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
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
        </article>
      </div>
    </section>
  )
}

export default Portfolio