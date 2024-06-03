import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Testimonial from './components/Testimonial'
import About from './components/About'
import Special from './components/Special'
import './App.css'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Special />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  )
}

export default App