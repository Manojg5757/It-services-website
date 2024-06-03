import React, { useEffect, useState } from 'react'
import { review } from '../data/review'
const Testimonial = () => {
  const [currentIndex,setCurrentIndex] = useState(0)
  useEffect(()=>{
    const interval = setInterval(()=>{
       setCurrentIndex(prev=>(prev + 1) % review.length)
    },6000)

    return ()=> clearInterval(interval)
},[])
  return (
    
    <section className="card-container" id='testimonial-section'>
        {
           review.map((item,index)=>{
            return(
              <div className={`card ${index === currentIndex ? 'active' : ''}`} key={item.id}>
                <img src={item.image} alt="" />
                <h3>{item.name}</h3>
                <p>{item.desc}</p>
              </div>
            )
           })
        }
      
    </section>
  )
}

export default Testimonial