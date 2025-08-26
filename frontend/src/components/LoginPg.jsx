import React, { useState } from 'react'
import './LoginPg.css'
import Button from 'react-bootstrap/Button';
import { useNavigate, useSearchParams } from 'react-router-dom';
const LoginPg = ({baseUrl}) => {
  const navigate = useNavigate();
  const [role, setRole] = useState("student");
  const [username, setUsername] = useState(""); 
  const [password, setPassword] = useState(""); 

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await fetch(`${baseUrl}/api/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password, role }),
    });

  if (res.ok) {
  const data = await res.json();
  alert("✅ Login Successful!");

  // ✅ Save token in localStorage
  localStorage.setItem("token", data.token);

  if (role === "teacher") {
    navigate("/teacher-dashboard");
  } else if (role === "student") {
    navigate("/sidenav");
  }
  }else {
      const errorData = await res.json();
      alert(`❌  ${errorData.message || "Invalid credentials"}`);
  }
  } catch (err) {
    alert("⚠️ Something went wrong. Please try again later.");
  }
};
  
  return (
    <div className='login-pg'>
    <div className='d-flex flex-row login-container'>
        <div className='form-container'>
          <form className='text-center login-form' onSubmit={handleSubmit}>
            <h1 className='text-heading' style={{marginTop:"50px"}}>Welcome Back!!</h1><br/>
            <label>UserName:-</label><br/>
            <input
                className='inputs'
                type='text'
                placeholder='Enter your UserName'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              /><br/><br/>
              <label>Password:-</label><br/>
                <input
                  className='inputs'
                  type='password'
                  placeholder='Enter Your Password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                /><br/><br/>
            <p className='forgot-pwd'>Forgot Password?</p>
            <label>Role:-</label>
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="teacher">Teacher</option>
              <option value="student">Student</option>
            </select><br/><br/>
            <Button variant="outline-primary" type='submit'>Login</Button>
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