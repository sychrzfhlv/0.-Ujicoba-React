import React from 'react'
import './about.css'
import ME from '../../assests/1.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const about = () => {
  return (
    <section id='about'>
      <h5>Lebih Tahu</h5>
      <h2>Tentang Saya</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>0 Years working </small>
            </article>

            <article className="about__card">
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>0 Worldwide</small>
            </article>
            
            <article className="about__card">
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>0 Completed</small>
            </article>
          </div>

          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero fuga quaerat modi consequuntur accusantium, quas omnis voluptatum a veniam aut vel exercitationem. Necessitatibus quam cupiditate recusandae saepe illo veniam impedit.
          </p>

          <a href="#contact" className='btn btn-primary'>Hubungi Saya</a>
        </div>
      </div>
    </section>
  )
}

export default about