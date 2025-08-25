import React from 'react'
import './RegisterPg.css'
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterPg = ({baseUrl}) => {
  const navigate=useNavigate();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    phone: "",
    college: "",
    startedYear: "",
    passedOutYear: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let errs = {};

    if (!/\d/.test(form.username)) {
      errs.username = "Username must contain at least one number";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = "Enter a valid email";
    }

    if (form.password.length < 6) {
      errs.password = "Password must be at least 6 characters";
    }

    if (!/^\d{10}$/.test(form.phone)) {
      errs.phone = "Phone number must be exactly 10 digits";
    }

    if (form.startedYear < 2000) {
      errs.startedYear = "Started year must be 2000 or later";
    }

    if (form.passedOutYear < form.startedYear) {
      errs.passedOutYear = "Passed out year must be greater than Started year";
    }

    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    validateField(name, value);
  };

const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});

      try {
        const res = await fetch("http://localhost:5000/api/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });

        const data = await res.json();

        if (res.ok) {
          localStorage.setItem("userData", JSON.stringify(form)); 
          alert("Registration successful ✅");
          navigate("/");
        } else if (res.status === 409) {
          alert("⚠️ User already exists");
        } else {
          alert("❌ Registration failed. " + (data.message || "Please try again."));
        }
      } catch (err) {
      console.error("Error:", err);
      alert("⚠️ Something went wrong!");
      }
}

  return (
    <div className='register-pg'>
        <form className='reg-form' onSubmit={handleSubmit}>
            <h3 className='text-heading'>Register Here to continue with us</h3>
            <label className='label'>Username:-</label>
            <input
              type='text'
              name='username'
              value={form.username}
              onChange={handleChange}
              placeholder='Enter your user name'
              required
              className='input-element'
            /><br/><br/>
            {errors.username && <p style={{ color: "red" }}>{errors.username}</p>}
            

            <label className='label'>Email:-</label>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder='Enter Your Email'
              required
              className='input-element'
            /><br/><br/>
            {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
            
            <label className='label'>Password:-</label>
            <input
              type='password'
              name='password'
              value={form.password}
              onChange={handleChange}
              placeholder='Enter Your password'
              required
              className='input-element'
            /><br/><br/>
            {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}

            <label className='label'>Phone No:-</label>
            <input
              type='text'
              name='phone'
              value={form.phone}
              onChange={handleChange}
              placeholder='Enter Your valid phone number'
              required
              className='input-element'
            /><br/><br/>
            {errors.phone && <p style={{ color: "red" }}>{errors.phone}</p>}
        
            <label className='label'>College Name:-</label>
            <input
              type='text'
              name='college'
              value={form.college}
              onChange={handleChange}
              placeholder='Enter Your college name'
              required
              className='input-element'
            />
            <br/><br/>

            <label className='label'>StartedYear:-</label>
            <input
              type='number'
              name='startedYear'
              value={form.startedYear}
              onChange={handleChange}
              placeholder='Enter Your Course Started year'
              required
              className='input-element'
              min="2000"
            /><br/><br/>
            {errors.startedYear && <p style={{ color: "red" }}>{errors.startedYear}</p>}

            <label className='label'>PassedOutYear:-</label>
            <input
              type='number'
              name='passedOutYear'
              value={form.passedOutYear}
              onChange={handleChange}
              placeholder='Enter Your passed out year'
              required
              className='input-element'
              min="2000"
            /><br/><br/>
            {errors.passedOutYear && <p style={{ color: "red" }}>{errors.passedOutYear}</p>}

            <Button variant="outline-success" className='login-btn' type='submit'>Register</Button>
        </form>
    </div>
  )
}

export default RegisterPg