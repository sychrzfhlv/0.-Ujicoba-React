import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_lmjjj4i', 'template_vuhmaf9', form.current, 'dqjws17Rm6IfypJRY')

    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Informasi Lanjut</h5>
      <h2>Hubungi Saya</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>syachrezafahlevi2001@gmail.com</h5>
            <a href="mailto:syachrezafahlevi@gmail.com" target="_blank">Kirim Pesan</a>
          </article>          
          <article className='contact__option'>
            <BsMessenger className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Reza Fahlevi</h5>
            <a href="https://m.me/reza.fahlevi" target="_blank">Kirim Pesan</a>
          </article>          
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+62895366884046</h5>
            <a href="https://wa.me/+62895366884046" target="_blank">Kirim Pesan</a>
          </article>
        </div>
        {/*End of contact option */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>

    </section>
  )
}

export default Contact