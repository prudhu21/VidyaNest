import React, { useState } from 'react';
import { Nav, Tab, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FiAlignJustify } from 'react-icons/fi';
import './TeacherDashboard.css';
import UploadNotes from './UploadNotes';
import UploadVideos from './UploadVideos';
import Dashboard from './Dashboard';



const TeacherDashboard = () => {
  const navigate = useNavigate();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [snippets, setSnippets] = useState([]); 

  const handleToggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className='navbg'>
      <div className='d-flex flex-row'>
        <Tab.Container id="left-tabs-example text-white" defaultActiveKey="dashboard">
          <Row>
            <Col sm={isCollapsed ? 1 : 3} className={`sidebar-container ${isCollapsed ? 'collapsed' : ''}`}>
              <Nav variant="pills" className="flex-column sidenav-bg">
                <div className='d-flex flex-row align-items-center p-2'>
                  
                  {!isCollapsed && (
                    <div className='ms-2'>
                      <p className='text-white mt-3 mb-0'>Attuluri.Prudula Sri</p>
                      <p className='text-white mb-0'>prudhu21</p>
                    </div>
                  )}
                  <FiAlignJustify
                    className='ms-auto back-icon'
                    onClick={handleToggleSidebar}
                    style={{
                      transform: isCollapsed ? 'rotate(180deg)' : 'rotate(0deg)',
                      cursor: 'pointer',
                      marginLeft: isCollapsed ? '0.5rem' : 'auto',
                      color: 'white',
                    }}
                  />
                </div>

                {!isCollapsed && (
                  <>
                    <Nav.Item>
                      <Nav.Link eventKey="dashboard" className='text-white'>Dashboard</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="upload" className='text-white'>Upload Notes</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="progress" className='text-white'>UploadVideos</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="settings" className='text-white'>Settings</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link  className='text-white'
                        onClick={() => {
                          localStorage.clear();
                          navigate('/');
                        }}
                      >
                        Logout
                      </Nav.Link>
                    </Nav.Item>
                  </>
                )}
              </Nav>
            </Col>

            <Col sm={isCollapsed ? 11 : 9} className="p-4">
              <Tab.Content>
                <Tab.Pane eventKey="dashboard"><Dashboard/></Tab.Pane>
                <Tab.Pane eventKey="upload"><UploadNotes/></Tab.Pane>
                <Tab.Pane eventKey="progress"><UploadVideos/></Tab.Pane>
                <Tab.Pane eventKey="settings">
                  <h2>⚙️ Settings</h2>
                  <p>Update your profile and preferences.</p>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    </div>
  );
};

export default TeacherDashboard;
