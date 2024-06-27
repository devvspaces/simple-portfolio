/* eslint-disable react/jsx-no-target-blank, jsx-a11y/anchor-is-valid, jsx-a11y/img-redundant-alt, no-unused-vars */
import React from 'react';

import './Portfolio.css';
import { data } from './data'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map((item, index) => {
            return (
              <article className="portfolio__item" key={index}>
                <div className="portfolio__item-image">
                  <img src={item.image} alt="" />
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="portfolio__item-cta">
                  {
                    item.github && <a href = {item.github} className='btn' target='_blank'>GitHub</a>
                  }
                  {
                    item.visit && <a href = {item.visit} className='btn btn-primary' target='_blank'>Visit</a>
                  }
                </div>
              </article>
            )
          })
        }

      </div>
    </section>
  )
}

export default Portfolio