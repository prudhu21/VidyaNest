import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import './TeacherNavBar.css'

const TeacherNavBar = () => {
    const navigate=useNavigate();
  return (
    <div>
        <Navbar expand="lg" sticky="top" className="navbar-container ">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/teacher-dashboard" className='nav-link text-dark'>Home</Nav.Link>
              <Nav.Link href="/uploadnotes" className='nav-link text-dark'>UploadNotes</Nav.Link>
              <Nav.Link href="/uploadvideos" className='nav-link text-dark'>UploadVideos</Nav.Link>
              <button className='btn btn-outline-success logout-btn' onClick={()=>navigate('/')}>Logout</button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default TeacherNavBar