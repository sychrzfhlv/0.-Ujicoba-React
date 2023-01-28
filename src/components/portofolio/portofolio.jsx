import React from 'react'
import './portofolio.css'
import IMG1 from '../../assests/portofolio1.jpeg'
import IMG2 from '../../assests/portofolio2.jpeg'
import IMG3 from '../../assests/portofolio3.jpeg'
import IMG4 from '../../assests/portofolio4.jpeg'
import IMG5 from '../../assests/portofolio5.jpeg'
import IMG6 from '../../assests/portofolio6.jpeg'

// Generate portofolio items dynamically using array map function

const data = [
  {
    id : 1,
    image : IMG1,
    title: 'Crypto Currency Dasboard & Financial Visualization',
    github: 'https://github.com',
    demo: 'https://dribbble.com/'
  },

  {
    id : 2,
    image : IMG2,
    title: 'Charts, templates & infographics in Figma',
    github: 'https://github.com',
    demo: 'https://dribbble.com/'
  },

  {
    id : 3,
    image : IMG3,
    title: 'Figma dashboard UI kit for data design web apps',
    github: 'https://github.com',
    demo: 'https://dribbble.com/'
  },

  {
    id : 4,
    image : IMG4,
    title: 'Maintaining tasks and tracking progress',
    github: 'https://github.com',
    demo: 'https://dribbble.com/'
  },

  {
    id : 5,
    image : IMG5,
    title: 'Charts, templates & infographics in Figma',
    github: 'https://github.com',
    demo: 'https://dribbble.com/'
  },

  {
    id : 6,
    image : IMG6,
    title: 'Crypto Currency Dasboard & Financial Visualization',
    github: 'https://github.com',
    demo: 'https://dribbble.com/'
  },
]

const portofolio = () => {
  return (
    <section id='portofolio'>
      <h5>Pekerjaan Terkini</h5>
      <h2>Portofolio</h2>

      <div className="container portofolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return(
              <article key={id} className="portofolio__item">
                <div className="portofolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portofolio__item-cta">
                  <a href={github} className='btn' target='_blank'>GitHub</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default portofolio