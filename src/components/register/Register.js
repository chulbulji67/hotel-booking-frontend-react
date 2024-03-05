import React from 'react'
import "../register/Register.css"

export default function Register() {
  return (
    <div className='register'>
        <div className='container'>
            <input type="email" name="email" placeholder='Enter Your Email Address' required/>
            <input type="password" name="password" placeholder='Enter Your password' required/>
            <input type="text" name="username" placeholder='Enter Your username' required/>
            <button type='submit'>Register</button>
        </div>
    </div>
  )
}
