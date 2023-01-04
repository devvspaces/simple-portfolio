import React from 'react'

import './Testimonial.css'
import avtr1 from '../../assets/avr1.png';
import avtr2 from '../../assets/avr2.jpg';
import avtr3 from '../../assets/avr3.png';
import avtr4 from '../../assets/avr4.webp';
import avtr5 from '../../assets/avr5.webp';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Testimonial = () => {
  return (
    <section id='testimonial'>
      <h5>Reviews From Clients</h5>
      <h2>Testimonial</h2>

      <h5 className='more_reviews'>More Reviews on <a href="https://www.fiverr.com/netrobedev">Fiverr</a></h5>

      <Swiper modules={[Pagination]} spaceBetween={40} slidesPerView={1} pagination={{clickable: true}} className="container testimonial__container">
        <SwiperSlide className='testimonial'>
            <div className="client__avatar">
              <img src={avtr1} alt="" />
            </div>
            <h5 className="client__name">Hddbsy</h5>
            <small className="client__review">Very good experience. The seller truly made my vision come to life.</small>
          </SwiperSlide>
          <SwiperSlide className='testimonial'>
            <div className="client__avatar">
              <img src={avtr2} alt="" />
            </div>
            <h5 className="client__name">Landynlmao</h5>
            <small className="client__review">Amazing developer, very fast response time. Great work and amazing communication skills. I 100% recommend this developer!!</small>
          </SwiperSlide>
          <SwiperSlide className='testimonial'>
            <div className="client__avatar">
              <img src={avtr3} alt="" />
            </div>
            <h5 className="client__name">Aescolan</h5>
            <small className="client__review">He has proven to be very knowledgeable and has quickly resolved any minor issues that have arisen. He is a great professional that I absolutely recommend.</small>
          </SwiperSlide>
          <SwiperSlide className='testimonial'>
            <div className="client__avatar">
              <img src={avtr4} alt="" />
            </div>
            <h5 className="client__name">endingben</h5>
            <small className="client__review">Netrobedev did outstanding work! He delivered exactly what I asked for and was so kind to even get things set up with my domain! He went above and beyond, and I really appreciate all that he did! This is an A+++ Seller and developer and I next time I need something done, I am going to him!</small>
          </SwiperSlide>
          <SwiperSlide className='testimonial'>
            <div className="client__avatar">
              <img src={avtr5} alt="" />
            </div>
            <h5 className="client__name">bendjmercer</h5>
            <small className="client__review">Punctual, good communicator, great work. You should definitely hire.</small>
          </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Testimonial