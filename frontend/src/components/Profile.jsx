import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { PencilSquare } from 'react-bootstrap-icons';
import ProfileImg from '../assets/anochring.jpg';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { FaUserCircle } from 'react-icons/fa'; 

import './Profile.css';

const Profile = () => {
  const [validated, setValidated] = useState(false);
  const [profileImage,setProfileImage]=useState(false);

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    phone: '',
    college: '',
    year: '',
  });

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const handleClear = (field) => {
    setFormData({ ...formData, [field]: '' });
  };

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <div className='d-flex'>
        <div className="relative">
          {profileImage ? (
              <img src={profileImage} className="profile-img rounded-full" alt="Profile" />
            ) : (
              <img src="https://img.freepik.com/premium-vector/vector-flat-illustration-grayscale-avatar-user-profile-person-icon-gender-neutral-silhouette-profile-picture-suitable-social-media-profiles-icons-screensavers-as-templatex9xa_719432-2210.jpg?uid=R163686062&ga=GA1.1.761964938.1707574847&semt=ais_hybrid&w=740"
              className='default-profile'/>
            )}
              <div>
                <DropdownButton
                  title={<PencilSquare />}
                  className="edit-icon"
                  id="dropdown-custom-1"
                >
                  <Dropdown.Item onClick={() => document.getElementById('profileImageInput').click()} 
                      className='btn-outline-primary'>
                    Edit Profile Picture
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => {
                      const confirmDelete = window.confirm("Are you sure you want to delete the profile picture?");
                      if (confirmDelete) {
                        setProfileImage(null);
                        document.getElementById('profileImageInput').value = ""; 
                      }
                    }}
                    className='btn-outline-primary'>
                    Delete Profile Picture
                  </Dropdown.Item>
                </DropdownButton>
              </div>

              <input
                type="file"
                accept="image/*"
                id="profileImageInput"
                style={{ display: 'none' }}
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    const imageUrl = URL.createObjectURL(file);
                    setProfileImage(imageUrl);
                    e.target.value = ""; 
                  }
                }}

              />
          </div>

        <div><h5 className='mt-5 pl-5 profile-txt'>Your Profile!</h5></div>
      </div>
      <Row className="mb-3 flex-column">
        <Form.Group as={Col} md="4" controlId="validationCustom01" className='d-flex align-items-center'>
          <Form.Label className='form-label'>User name</Form.Label>
          <Form.Control className='form-element'
            required
            type="text"
            placeholder="UserName"
            value={formData.username}
            onChange={(e) => handleChange('username', e.target.value)}
          />
           <Button variant="outline-secondary" onClick={() => handleClear('username')}>
              <PencilSquare />
            </Button>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02"  className='d-flex align-items-center'>
          <Form.Label className='form-label ml-3'>Email</Form.Label>
          <Form.Control className='form-element ml-3'
            required
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
            />
            <Button variant="outline-secondary" onClick={() => handleClear('email')}>
              <PencilSquare />
            </Button>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
         <Form.Group as={Col} md="4" controlId="validationCustom02"  className='d-flex align-items-center'>
          <Form.Label className='form-label'>Password</Form.Label>
          <Form.Control className='form-element'
            required
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={(e) => handleChange('password', e.target.value)}
            />
            <Button variant="outline-secondary" onClick={() => handleClear('password')} >
              <PencilSquare />
            </Button>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        
        <Form.Group as={Col} md="4" controlId="validationCustom02" className='d-flex align-items-center'>
          <Form.Label className='form-label'>Phone Number</Form.Label>
          <Form.Control className='form-element'
            required
            type="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
            />
            <Button variant="outline-secondary" onClick={() => handleClear('phone')}>
              <PencilSquare />
            </Button>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02" className='d-flex align-items-center'>
          <Form.Label className='form-label'>College Name</Form.Label>
          <Form.Control className='form-element'
            required
            type="text"
            placeholder="College Name"
            value={formData.college}
            onChange={(e) => handleChange('college', e.target.value)}
            />
            <Button variant="outline-secondary" onClick={() => handleClear('college')}>
              <PencilSquare />
            </Button>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02" className='d-flex align-items-center'>
          <Form.Label className='form-label'>Passed out year</Form.Label>
          <Form.Control className='form-element'
            required
            type="text"
            placeholder="Passed out year"
            value={formData.year}
            onChange={(e) => handleChange('year', e.target.value)}
            />
            <Button variant="outline-secondary" onClick={() => handleClear('year')}>
              <PencilSquare />
            </Button>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Button type="submit">Save</Button>
    </Form>
  );
}
export default Profile;
