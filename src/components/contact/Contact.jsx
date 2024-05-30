import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <div className='container-form' id='contact-section'>
        <h1>Contact Us</h1>
        <form className='contact' action="">
            <div className='form-inside'>
            <label htmlFor="name">Name</label>
            <input name='name' type="text" placeholder='name' />
            </div>
           <div className='form-inside'>
           <label htmlFor="Email">Email</label>
            <input type="email" name="number" id="number" placeholder='Email Id' />
           </div>
            <div className='form-inside'>
            <label htmlFor="mobile">Mobile Number</label>
            <input type="tel" placeholder='mobile' name='mobile' />
            </div>
      <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Contact