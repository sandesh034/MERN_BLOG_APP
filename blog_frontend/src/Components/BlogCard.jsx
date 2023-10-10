import React from 'react'
import { Link } from 'react-router-dom';
import { FaUser, FaCalendar, FaComment, FaHeart,FaShare } from "react-icons/fa6";

import image from '../Images/Fooding.jpeg'
const BlogCard = (props) => {
// console.log(props.data.title)
    return (
        <>
            <div className='card-wrapper'>
                <div className='card-image'>
                    <img src={image} alt='card-img'></img>
                </div>
                <div className='card-content'>
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

                    <div className='card-title'>{props.data.title}</div>
                    <p className='card-description'>{props.data.description}</p>
                    <div className='card-footer'>
                        <Link to='/readBlog' className='card-btn'>Read More</Link>
                        <button className='share-btn'><FaShare/></button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default BlogCard