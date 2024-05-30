import React from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import ABout from './components/about/ABout'
import Services from './components/services/Services'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <ABout />
      <Contact />
      <Footer />
    </div>
  )
}

export default App