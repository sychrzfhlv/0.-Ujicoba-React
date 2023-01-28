import React from 'react'
import './testimonial.css'
import AVTR1 from '../../assests/Cli1.jpeg'
import AVTR2 from '../../assests/Cli2.jpeg'
import AVTR3 from '../../assests/Cli3.jpeg'
import AVTR4 from '../../assests/Cli4.jpeg'

// import Swiper core and required modules
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: 'Uni',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat quas sed ab quisquam maxime sequi nemo libero quo dolorum cum quia quam placeat corporis fugit doloribus ea voluptas, illo officia!'
  },

  {
    avatar: AVTR2,
    name: 'Unayy',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat quas sed ab quisquam maxime sequi nemo libero quo dolorum cum quia quam placeat corporis fugit doloribus ea voluptas, illo officia!'
  },

  {
    avatar: AVTR3,
    name: 'Nia',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat quas sed ab quisquam maxime sequi nemo libero quo dolorum cum quia quam placeat corporis fugit doloribus ea voluptas, illo officia!'
  },

  {
    avatar: AVTR4,
    name: 'Kur',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat quas sed ab quisquam maxime sequi nemo libero quo dolorum cum quia quam placeat corporis fugit doloribus ea voluptas, illo officia!'
  },
]

const testimonial = () => {
  return (
    <section id='testimonial'>
      <h5>Ulasan dari klien</h5>
      <h2>Testimoni</h2>

      <Swiper className="container testimonial__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) => {
            return(
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar}/>
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default testimonial