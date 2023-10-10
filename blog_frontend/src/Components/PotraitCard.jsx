import React from 'react'
import image from '../Images/Fooding.jpeg'
import { Link } from 'react-router-dom';
import { FaUser, FaCalendar, FaComment, FaHeart, FaShare } from "react-icons/fa6";

const PotraitCard = () => {
  return (
    <>
      <div className="potrait-card">
        <div className="potrait-card-img-container">
          <img src={image} alt="" srcset="" />
        </div>
        <div className='card-header'>

          <div className='icon-text'>
            <span className='icon'>
              <FaCalendar />
            </span>
            <span className='text'>26/Sep/2023</span>
          </div>

          <div className='icon-text'>
            <span className='icon'>
              <FaUser />
            </span>
            <span className='text'>Sandesh</span>
          </div>

          <div className='icon-text'>
            <span className='icon'>
              <FaComment />
            </span>
            <span className='text'>20</span>
          </div>

          <div className='icon-text'>
            <span className='icon'>
              <FaHeart />
            </span>
            <span className='text'>20</span>
          </div>
        </div>
        <div className='potrait-card-body'>
          <div className="potrait-card-title">
            <p>What Machine Learning | Advantages | Disadvantages</p>
          </div>
          <div className='card-footer'>
            <Link to='/readBlog' className='card-btn'>Read More</Link>
            <button className='share-btn'><FaShare /></button>
          </div>
        </div>
      </div>

    </>
  )
}

export default PotraitCard