import React from 'react'
import './RegisterPg.css'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const RegisterPg = () => {
  const navigate=useNavigate();

  return (
    <div className='register-pg'>
        <form className='reg-form'>
            <h3 className='text-heading'>Register Here to continue with us</h3>
            <label>Username:-</label>
            <input type='text' placeholder='Enter your user name' required className='input-element'/><br/><br/>
            <label>Email:-</label>
            <input type='email' placeholder='Enter Your Email' required  className='input-element'/><br/><br/>
            <label>Password:-</label>
            <input type='password' placeholder='Enter Your password' required  className='input-element'/><br/><br/>
            <label>Phone No:-</label>
            <input type='phone' placeholder='Enter Your valid phone number' required  className='input-element'/><br/><br/>
            <label>College Name:-</label>
            <input type='text' placeholder='Enter Your college name' required  className='input-element'/><br/><br/>
            <label>Year:-</label>
            <input type='text' placeholder='Enter Your passed out year' required  className='input-element' min="2000"/><br/><br/>
            <Button variant="outline-success" className='login-btn'onClick={()=>navigate('/')}>Register</Button>
        </form>
    </div>
  )
}

export default RegisterPg