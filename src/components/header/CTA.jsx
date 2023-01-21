import React from 'react'
import CV from '../../assests/CV_Lepis.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Hubungi Saya</a>
    </div>
  )
}

export default CTA