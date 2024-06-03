import React from 'react'

const About = () => {
  return (
    <section className='about-company' id='about-section'>
        <div className="insights">
            <div className="projects">
                <h2>Software</h2>
                <p><span>800+</span> Projects Completed</p>
                <p><span>50+</span> Ongoing Projects</p>
                <p><span>2</span> Own Products</p>
            </div>
            <div className="lead">
                <h2>Marketing</h2>
                <p>Our Clients Reached <span>2M+ Leads</span></p>
                <p>Sales Reached So far <span>15M$</span></p>
                <p>Average Sales Everyday <span>150K$</span></p>
            </div>
        </div>
        <div className='goals'>
            <div className='mission'>
                <h1><span>Our M</span>ission</h1>
                <p>Building a International Software that will solve people's problem technically withe the help of AI</p>
            </div>
            <div className='vision'>
                <h1><span>Our V</span>ision</h1>
                <p>Our Vision is to Provide Long term solutions for all software complexities we face in real world</p>
            </div>
        </div>
    </section>
  )
}

export default About