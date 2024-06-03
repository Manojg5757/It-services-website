import React, { useEffect, useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Navbar = () => {
  const timeline =useRef( gsap.timeline({paused:true}))
  const menuTimeline = useRef(gsap.timeline({paused:true}))
  
  useGSAP(()=>{
   
  })
 
  useGSAP(() => {
    timeline.current.to('.bar-container', {
        y: 400,
        rotation: 360,
        duration: 1,
        borderRadius:20,
        ease: 'back.inOut'
    }).to('.bar-container', {
        y: 0,
        rotation: 0,
        duration: 1,
        borderRadius:'50%',
        ease: 'power1.inOut'
    });
})
    const[isOpen,setIsOpen] = useState(false)
    const handleClick=()=>{
        setIsOpen(!isOpen)
    }

    useEffect(()=>{
        if(isOpen){
            menuTimeline.current.from('.menu-items',{
                y:400,
                rotation:360,
                duration:0.5,
                stagger:0.2,
                
            })
            timeline.current.play()
            menuTimeline.current.play()
          }
        const handleResize = ()=>{
            if(window.innerWidth > 576){
                setIsOpen(false)
            }
        }
        window.addEventListener('resize',handleResize)
        // return ()=>window.removeEventListener('resize',handleResize)
    },[isOpen,timeline])

  
  return (
    <header className='navbar-container'>
        <nav className='navbar'>
            <h1 className='brand'>IT <span>Ground</span></h1>
            <ul className={`menu ${isOpen ? 'open' :''}`}>
                <li className='menu-items'><a href="#">Home</a></li>
                <li className='menu-items'><a href="#about-section">About</a></li>
                <li className='menu-items'><a href="#services-section">Services</a></li>
                <li className='menu-items'><a href="#testimonial-section">Testimonials</a></li>
                <li className='menu-items'><a href="#contact-section">Contact</a></li>
            </ul>
            <div className="hamburger" onClick={handleClick}>
                <div className='bar-1'></div>
                <div className='bar-2'></div>
                <div className='bar-3'></div>
            </div>
            <div className={`close-icon ${isOpen ? 'close-icon-show': ''}`}>
                <div className='bar-container' onClick={()=>setIsOpen(!isOpen)}>
                <div className="close-bar-1"></div>
                <div className="close-bar-2"></div>
                </div>
            </div>
        </nav>
    </header>
  )
}

export default Navbar