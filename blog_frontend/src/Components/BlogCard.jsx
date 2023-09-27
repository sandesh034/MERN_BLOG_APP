import React from 'react'
import { FaUser, FaCalendar, FaComment, FaHeart,FaShare } from "react-icons/fa6";

import image from '../Images/Fooding.jpeg'
const BlogCard = () => {
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

                    <div className='card-title'>Recipe Of Burger</div>
                    <p className='card-description'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum non illo qui laborum! At eos excepturi culpa ab consequatur accusamus architecto quae? Eum laborum, praesentium cupiditate reiciendis nisi ut! Mollitia cum porro molestiae optio nam alias doloribus maxime 
                    </p>
                    <div className='card-footer'>
                        <a href='www.abc.com' className='card-btn'>Read More</a>
                        <button className='share-btn'><FaShare/></button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default BlogCard