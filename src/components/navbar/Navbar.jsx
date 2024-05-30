import React, { useEffect, useState } from 'react'
import "./navbar.css"

const Navbar = () => {
    const[isOpen,setIsOpen] = useState(false)
    const handleClick=()=>{
        setIsOpen(!isOpen)
    }

    useEffect(()=>{
        const handleResize = ()=>{
            if(window.innerWidth > 576){
                setIsOpen(false)
            }
        }
        window.addEventListener('resize',handleResize)
        // return ()=>window.removeEventListener('resize',handleResize)
    },[])

  
  return (
    <header className='navbar-container'>
        <nav className='navbar'>
            <h1 className='brand'>IT <span>Ground</span></h1>
            <ul className={`menu ${isOpen ? 'open' :''}`}>
                <li><a href="#">Home</a></li>
                <li><a href="#services-section">Services</a></li>
                <li><a href="#about-section">About Us</a></li>
                <li><a href="#contact-section">Contact</a></li>
            </ul>
            <div className="hamburger" onClick={handleClick}>
                <div className='bar-1'></div>
                <div className='bar-2'></div>
                <div className='bar-3'></div>
            </div>
        </nav>
    </header>
  )
}

export default Navbar