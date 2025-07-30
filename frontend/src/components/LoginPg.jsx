import React, { useState } from 'react'
import './LoginPg.css'
import Button from 'react-bootstrap/Button';
import { useNavigate, useSearchParams } from 'react-router-dom';
const LoginPg = () => {
  const navigate=useNavigate();
  const [role,setRole]=useState("student");

  const handleLogin = () => {
    if (role === 'teacher') {
      navigate('/teacher-dashboard'); 
    } else if (role === 'student') {
      navigate('/sidenav'); 
    }
  };

  return (
    <div className='login-pg'>
    <div className='d-flex flex-row login-container'>
        <div className='form-container'>
          <form className='text-center login-form'>
            <h1 className='text-heading'>Welcome Back!!</h1><br/>
            <label>UserName:-</label><br/>
            <input type='text' placeholder='Enter your UserName' required/><br/><br/>
            <label>Password:-</label><br/>
            <input type='password' placeholder='Enter Your Password' required/><br/><br/>
            <p className='forgot-pwd'>Forgot Password?</p>
            <label>Role:-</label>
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="teacher">Teacher</option>
              <option value="student">Student</option>
            </select><br/><br/>
            <Button variant="outline-primary" onClick={handleLogin}>Login</Button>
            <p>Don't Have an account <Button variant="outline-success" onClick={()=>navigate('/register')}>SignIn</Button></p>
          </form>
        </div>

        <div>
            <img src='https://img.freepik.com/free-vector/forgot-password-concept-illustration_114360-1123.jpg?uid=R163686062&ga=GA1.1.761964938.1707574847&semt=ais_hybrid&w=740'
             alt='login-img' className='login-img'/>
        </div>
    </div>
    </div>
  )
}

export default LoginPg