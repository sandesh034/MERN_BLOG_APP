import React from 'react'
import logo from '../Images/logo.png'
import{BiSearchAlt} from 'react-icons/bi'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='logo'>
            <img src={logo} alt='logo'></img>
        </div>
        <div className='search-bar'>
            <BiSearchAlt className='search-icon'/>
        </div>
        <div className='nav-button'>
            <button className='btn'><Link to='/registerUser'>Register/Login</Link></button>
        </div>
    </div>
  )
}

export default Navbar