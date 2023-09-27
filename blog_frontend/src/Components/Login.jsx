import React from 'react'
import logo from '../Images/logo.png'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Login = () => {
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
        const response = await fetch('http://127.0.0.1:8000/loginUser', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json'
            },
            credentials:'include'
        })
        const messageData = await response.json();
        let type = "";
        if (messageData.status) {
            type = "success"
        }
        else {
            type = "error"
        }
        toast(messageData.message, {
            position: "top-center",
            type: type
        })

    }  
    return (
        <div className='login-container'>
            <div className='login-form-box'>
                <h3>Login Here</h3>
                <img className='login-form-img' src={logo} alt='' />

                <form method='post' onSubmit={handleSubmit}>
                    <div className='login-form-field'>
                        <label htmlFor='email'>Email</label>
                        <input type='email' id='email' name='email' onChange={handleChange} required  autoComplete='off'></input>
                    </div>

                    <div className='login-form-field'>
                        <label htmlFor='password'>Password</label>
                        <input type='password' id='password' name='password' onChange={handleChange} required  autoComplete='off'></input>
                    </div>
                    <button className='submit-btn gap' type='submit'>Login</button>
                </form>
            </div>
            <ToastContainer />
        </div>
    )
}

export default Login