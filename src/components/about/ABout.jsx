import React from 'react'
import './about.css'
import { FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
const ABout = () => {
  return (
    <section className='about' id='about-section'>
        <div className="box box-1">
          <img src="https://cdn.pixabay.com/photo/2018/04/05/09/32/portrait-3292287_1280.jpg" alt="" />
          <p className='names'>Sara Kon</p>
          <div className='star'>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem perspiciatis atque reprehenderit tempora quo vel inventore? Quia ducimus consequuntur, deserunt doloremque eius, praesentium qui facere fugiat sint veritatis cum quam?</p>
        </div>
        <div className="box box-2">
          <img src="https://cdn.pixabay.com/photo/2018/01/22/07/31/portrait-3098319_1280.jpg" alt="" />
          <p className='names'>Zalia Moon</p>
          <div className='star'>
          <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalfAlt />
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem perspiciatis atque reprehenderit tempora quo vel inventore? Quia ducimus consequuntur, deserunt doloremque eius, praesentium qui facere fugiat sint veritatis cum quam?</p>
        </div>
        <div className="box box-3">
          <img src="https://cdn.pixabay.com/photo/2015/12/20/20/31/m-john-d-1101635_1280.jpg" alt="" />
          <p className='names'>Dante Vel</p>
          <div className='star'>
          <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <CiStar />
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem perspiciatis atque reprehenderit tempora quo vel inventore? Quia ducimus consequuntur, deserunt doloremque eius, praesentium qui facere fugiat sint veritatis cum quam?</p>
        </div>
        <div className="box box-4">
          <img src="https://cdn.pixabay.com/photo/2016/03/29/03/14/portrait-1287413_1280.jpg" alt="" />
          <p className='names'>Lock Lambert</p>
          <div className='star'>
          <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalfAlt />
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem perspiciatis atque reprehenderit tempora quo vel inventore? Quia ducimus consequuntur, deserunt doloremque eius, praesentium qui facere fugiat sint veritatis cum quam?</p>
        </div>
    </section>
  )
}

export default ABout