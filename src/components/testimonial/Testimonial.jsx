import React from 'react'

import './Testimonial.css'
import avtr1 from '../../assets/avtr1.jpg';
import avtr2 from '../../assets/avtr2.jpg';
import avtr3 from '../../assets/avtr3.jpg';
import avtr4 from '../../assets/avtr4.jpg';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Testimonial = () => {
  return (
    <section id='testimonial'>
      <h5>Review From Client</h5>
      <h2>Testimonial</h2>

      <Swiper modules={[Pagination]} spaceBetween={40} slidesPerView={1} pagination={{clickable: true}} className="container testimonial__container">
        <SwiperSlide className='testimonial'>
            <div className="client__avatar">
              <img src={avtr1} alt="" />
            </div>
            <h5 className="client__name">John Doe</h5>
            <small className="client__review">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quod expedita eveniet et asperiores temporibus consequatur incidunt fugit praesentium ipsa voluptatibus consequuntur, ex ad quibusdam alias maiores placeat cumque deserunt?</small>
          </SwiperSlide>
          <SwiperSlide className='testimonial'>
            <div className="client__avatar">
              <img src={avtr2} alt="" />
            </div>
            <h5 className="client__name">John Doe</h5>
            <small className="client__review">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quod expedita eveniet et asperiores temporibus consequatur incidunt fugit praesentium ipsa voluptatibus consequuntur, ex ad quibusdam alias maiores placeat cumque deserunt?</small>
          </SwiperSlide>
          <SwiperSlide className='testimonial'>
            <div className="client__avatar">
              <img src={avtr3} alt="" />
            </div>
            <h5 className="client__name">John Doe</h5>
            <small className="client__review">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quod expedita eveniet et asperiores temporibus consequatur incidunt fugit praesentium ipsa voluptatibus consequuntur, ex ad quibusdam alias maiores placeat cumque deserunt?</small>
          </SwiperSlide>
          <SwiperSlide className='testimonial'>
            <div className="client__avatar">
              <img src={avtr4} alt="" />
            </div>
            <h5 className="client__name">John Doe</h5>
            <small className="client__review">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quod expedita eveniet et asperiores temporibus consequatur incidunt fugit praesentium ipsa voluptatibus consequuntur, ex ad quibusdam alias maiores placeat cumque deserunt?</small>
          </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Testimonial