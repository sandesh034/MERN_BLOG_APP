import React, { useState, useEffect } from 'react'
import logo from '../Images/logo.png'
import { BiSearchAlt } from 'react-icons/bi'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [status, setStatus] = useState(false)
    
    useEffect(() => {
        const checkLogin = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/checkLogin', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    credentials: 'include'
                })
                const responseData = await response.json();
                setStatus(responseData.status)
            } catch (error) {
                console.error('Error checking login status:', error);
            }
        }
        checkLogin()
    }, [])


    return (
        <div className='navbar'>
            <div className='logo'>
                <img src={logo} alt='logo' />
            </div>
            <div className='search-bar'>
                <BiSearchAlt className='search-icon' />
            </div>
            <div className='nav-button'>
                {status ? (
                    <button className='btn'><Link to='/logout'>Logout</Link></button>
                ) : (
                    <button className='btn'><Link to='/registerUser'>Register/Login</Link></button>
                )}
            </div>
        </div>
    )
}

export default Navbar
