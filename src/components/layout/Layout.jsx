import React, { Fragment } from 'react'
import About from '../about/About'
import Contact from '../contact/Contact'
import Experience from '../experience/Experience'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import HeroSection from '../hero-section/HeroSection'
import Portfolio from '../portfolio/Portfolio'
import Services from '../services/Services'
import Testimonial from '../testimonial/Testimonial'

const Layout = () => {
  return (
    <Fragment>
      <Header/>
      <HeroSection/>
      <About/>
      <Services/>
      <Experience/>
      <Portfolio/>
      <Testimonial/>
      <Contact/>
      <Footer/>
    </Fragment>
  )
}

export default Layout