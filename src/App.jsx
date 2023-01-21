import React from 'react'
import Header from './components/header/header'
import Nav from './components/nav/nav'
import About from './components/About/about'
import Experience from './components/experience/experience'
import Service from './components/services/services'
import Portofolio from './components/portofolio/portofolio'
import Testimonials from './components/testimonials/testimonial'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'

const App = () => {
  return (
    <div>
        <Header />
        <Nav />
        <About />
        <Experience />
        <Service />
        <Portofolio />
        <Testimonials />
        <Contact />
        <Footer />
    </div>
  )
}

export default App