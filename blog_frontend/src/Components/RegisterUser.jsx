import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import register from '../Images/Technology.jpeg'
import logo from '../Images/logo.png'

const RegisterUser = () => {
    const [formData, setFormData] = useState({})
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
        // console.log(JSON.stringify(formData))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        // console.log("Submitted")
        const response = await fetch('http://127.0.0.1:8000/registerUser', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const messageData = await response.json();
        let type="";
        if(messageData.status){
            type="success"
        }
        else{
            type="error"
        }
    
        toast(messageData.message,{
            position:"top-center",
            type:type
        })
        // console.log(messageData)
    }

    return (
        <div className='container'>
            <div className='form-wrapper'>
                <div className='form-img'>
                    <img src={register} alt='' />
                </div>
                <div className='form'>
                    <div className='company-logo'>
                        <img src={logo} alt='' />
                    </div>
                    <p>Create Your Account Here</p>
                    <form method='post' onSubmit={handleSubmit}>
                        <div className='form-field'>
                            <label htmlFor='username'>Username</label>
                            <input type='text' id='username' name='username' onChange={handleChange} required autoComplete='off'></input>
                        </div>

                        <div className='form-field'>
                            <label htmlFor='phone'>Phone</label>
                            <input type='text' id='phone' name='phone' onChange={handleChange} required  autoComplete='off'></input>
                        </div>

                        <div className='form-field'>
                            <label htmlFor='email'>Email</label>
                            <input type='email' id='email' name='email' onChange={handleChange} required  autoComplete='off'></input>
                        </div>


                        <div className='form-field'>
                            <label htmlFor='password'>Password</label>
                            <input type='password' id='password' name='password' onChange={handleChange} required  autoComplete='off'></input>
                        </div>
                        <button className='submit-btn' type='submit'>Register</button>
                        <p>Already have an account ? <Link to='/login'>login</Link></p>
                    </form>
                </div>
            </div>
            <ToastContainer/>
        </div>
    )
}

export default RegisterUser