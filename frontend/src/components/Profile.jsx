import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { PencilSquare } from 'react-bootstrap-icons';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import './Profile.css';

const Profile = () => {
  const DEFAULT_PROFILE_IMAGE =
    "https://img.freepik.com/premium-vector/vector-flat-illustration-grayscale-avatar-user-profile-person-icon-gender-neutral-silhouette-profile-picture-suitable-social-media-profiles-icons-screensavers-as-templatex9xa_719432-2210.jpg";

  const [validated, setValidated] = useState(false);
  const [profileImage, setProfileImage] = useState(null);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    phone: "",
    college: "",
    year: ""
  });

  useEffect(() => {
  const savedProfileImg = localStorage.getItem("profileImage");
  if (savedProfileImg) setProfileImage(savedProfileImg);

  const savedUserData = JSON.parse(localStorage.getItem("userData"));
  if (savedUserData) {
    setFormData(prev => ({
      ...prev,
      ...savedUserData   
    }));
  }
  }, []);


  const triggerUpdate = () => {
    window.dispatchEvent(new Event("profileUpdated"));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
        localStorage.setItem("profileImage", reader.result);
        triggerUpdate();
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDeleteImage = () => {
    const confirmDelete = window.confirm("Are you sure you want to delete the profile picture?");
    if (confirmDelete) {
      setProfileImage(null);
      localStorage.removeItem("profileImage");
      triggerUpdate();
    }
  };

  const handleChange = (field, value) => {
    setFormData((prev) => {
      const updated = { ...prev, [field]: value };
      localStorage.setItem("userData", JSON.stringify(updated));
      triggerUpdate();
      return updated;
    });
  };

  const handleClear = (field) => {
    setFormData((prev) => {
      const updated = { ...prev, [field]: "" };
      localStorage.setItem("userData", JSON.stringify(updated));
      triggerUpdate();
      return updated;
    });
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      localStorage.setItem("userData", JSON.stringify(formData));
      triggerUpdate();
    }
    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <div className='d-flex'>
        <div className="relative">
          {profileImage ? (
            <img src={profileImage} className="profile-img rounded-full" alt="Profile" />
          ) : (
            <img
              src={DEFAULT_PROFILE_IMAGE}
              className='default-profile'
              alt="Default Profile"
            />
          )}
          <div>
            <DropdownButton
              title={<PencilSquare />}
              className="edit-icon"
              id="dropdown-custom-1"
            >
              <Dropdown.Item
                onClick={() => document.getElementById('profileImageInput').click()}
              >
                Edit Profile Picture
              </Dropdown.Item>
              <Dropdown.Item onClick={handleDeleteImage}>
                Delete Profile Picture
              </Dropdown.Item>
            </DropdownButton>
          </div>

          <input
            type="file"
            accept="image/*"
            id="profileImageInput"
            style={{ display: 'none' }}
            onChange={handleImageUpload}
          />
        </div>
        <div><h5 className='mt-5 pl-5 profile-txt'>Your Profile!</h5></div>
      </div>

      <Row className="mb-3 flex-column">
        {[
          { key: 'username', label: 'User Name', type: 'text', placeholder: 'UserName' },
          { key: 'email', label: 'Email', type: 'email', placeholder: 'Email' },
          { key: 'password', label: 'Password', type: 'password', placeholder: 'Password' },
          { key: 'phone', label: 'Phone Number', type: 'tel', placeholder: 'Phone Number' },
          { key: 'college', label: 'College Name', type: 'text', placeholder: 'College Name' },
          { key: 'year', label: 'Passed out year', type: 'text', placeholder: 'Passed out year' }
        ].map(({ key, label, type, placeholder }) => (
          <Form.Group key={key} as={Col} md="4" controlId={`form-${key}`} className='d-flex align-items-center'>
            <Form.Label className='form-label'>{label}</Form.Label>
            <Form.Control
              className='form-element'
              required
              type={type}
              placeholder={placeholder}
              value={formData[key] ?? ""} 
              onChange={(e) => handleChange(key, e.target.value)}
            />

            <Button variant="outline-secondary" onClick={() => handleClear(key)}>
              <PencilSquare />
            </Button>
          </Form.Group>
        ))}
      </Row>
      <Button type="submit">Save</Button>
    </Form>
  );
};

export default Profile;
