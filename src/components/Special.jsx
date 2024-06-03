import React from 'react'
import { BsTelephoneForward } from "react-icons/bs";
import { CiTimer } from "react-icons/ci";
import { FaMoneyBill1Wave } from "react-icons/fa6";
import { TbTruckDelivery } from "react-icons/tb";




const Special = () => {
  return (
    <div className='special'>
        <div className="special-top">
            <h1>Here's why you'll love it Jobstack</h1>
            <p>Best services in the Indesutry with professional level output that drive success towards you</p>
        </div>
        <div className="special-bottom">
            <div className="special-details">
                 <BsTelephoneForward className='special-icons' />
                <h3>24/7 Support</h3>
                <p>Need Support Call us anytime</p>
            </div>
            <div className="special-details">
                 <TbTruckDelivery className='special-icons' />
                <h3>Ontime Delivery</h3>
                <p>We manage ourself to deliver Ontime</p>
            </div>
            <div className="special-details">
                 <CiTimer className='special-icons' />
                <h3>Save Time</h3>
                <p>Save Your Time which is more important</p>
            </div>
            <div className="special-details">
                 <FaMoneyBill1Wave className='special-icons' />
                <h3>Save Money</h3>
                <p>Cost cutting is important for your company</p>
            </div>
        </div>
    </div>
  )
}

export default Special