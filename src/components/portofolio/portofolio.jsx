import React from 'react'
import './portofolio.css'
import IMG1 from '../../assests/2.png'

const portofolio = () => {
  return (
    <section id='portofolio'>
      <h5>Pekerjaan Terkini</h5>
      <h2>Portofolio</h2>

      <div className="container portofolio__container">
        
        <article className="portofolio__item">
          <div className="portofolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>This is a portofolio item title</h3>
          <div className="portofolio__item-cta"></div>
            <a href="https://github.com" className='btn' target='_blank'>GitHub</a>
            <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
        </article>

        <article className="portofolio__item">
          <div className="portofolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>This is a portofolio item title</h3>
          <div className="portofolio__item-cta"></div>
            <a href="https://github.com" className='btn' target='_blank'>GitHub</a>
            <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
        </article>

        <article className="portofolio__item">
          <div className="portofolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>This is a portofolio item title</h3>
          <div className="portofolio__item-cta"></div>
            <a href="https://github.com" className='btn' target='_blank'>GitHub</a>
            <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
        </article>

        <article className="portofolio__item">
          <div className="portofolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>This is a portofolio item title</h3>
          <div className="portofolio__item-cta"></div>
            <a href="https://github.com" className='btn' target='_blank'>GitHub</a>
            <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
        </article>

        <article className="portofolio__item">
          <div className="portofolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>This is a portofolio item title</h3>
          <div className="portofolio__item-cta"></div>
            <a href="https://github.com" className='btn' target='_blank'>GitHub</a>
            <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
        </article>

        <article className="portofolio__item">
          <div className="portofolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>This is a portofolio item title</h3>
          <div className="portofolio__item-cta"></div>
            <a href="https://github.com" className='btn' target='_blank'>GitHub</a>
            <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
        </article>
        
      </div>

    </section>
  )
}

export default portofolio