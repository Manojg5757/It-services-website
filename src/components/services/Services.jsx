import React from 'react'
import './services.css'

const Services = () => {
  return (
    <section className='services' id='services-section'>
         <div className="services-left">
            <h1>Software Products</h1>
            <p>Static Website</p>
            <p>Ecommerce Website</p>
            <p>Android App</p>
            <p>Ios App</p>
            <p>Custom Software</p>
         </div>
         <div className="services-right">
            <h1>Other Services</h1>
            <p>Website SEO</p>
            <p>Youtube SEO</p>
            <p>Instagram Marketing</p>
            <p>Content Creation</p>
            <p>Lead Generation</p>
         </div>
    </section>
  )
}

export default Services