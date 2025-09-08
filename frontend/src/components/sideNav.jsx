import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Button from 'react-bootstrap/Button';
import Courses from './Courses';
import InterviewQuestions from './InterviewQuestions';
import Videos from './Videos';
import Editor from '../EditorComponents/Editor';
import Profile from './Profile';
import Contact from './Contact';
import Dashboard from '../components/Dashboard';
import QuizHomePg from '../QuizComponents/QuizHomePg';
import Job from './Job';
import { FiAlignJustify } from "react-icons/fi";
import { useEffect, useState } from 'react';
import { BsBoxArrowInLeft } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import './sideNav.css';
import StudentResources from './StudentResources';
import Logo from "../assets/logo.jpg";

function LeftTabsExample() {
  const navigate = useNavigate();

  const DEFAULT_PROFILE_IMAGE =
    "https://img.freepik.com/premium-vector/vector-flat-illustration-grayscale-avatar-user-profile-person-icon-gender-neutral-silhouette-profile-picture-suitable-social-media-profiles-icons-screensavers-as-templatex9xa_719432-2210.jpg";

  const [profileImage, setProfileImage] = useState(DEFAULT_PROFILE_IMAGE);
  const [userData, setUserData] = useState({ username: "", email: "" });
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    const savedProfileImg = localStorage.getItem("profileImage");
    if (savedProfileImg) setProfileImage(savedProfileImg);

    const savedUserData = JSON.parse(localStorage.getItem("userData"));
    if (savedUserData) setUserData(savedUserData);
  }, []);

  useEffect(() => {
    const handleStorageChange = () => {
      const savedProfileImg = localStorage.getItem("profileImage");
      setProfileImage(savedProfileImg || DEFAULT_PROFILE_IMAGE);

      const savedUserData = JSON.parse(localStorage.getItem("userData"));
      setUserData(savedUserData || { username: "", email: "" });
    };

    window.addEventListener("profileUpdated", handleStorageChange);
    return () => window.removeEventListener("profileUpdated", handleStorageChange);
  }, []);

  const handleToggleSidebar = () => {
    setIsCollapsed((prev) => !prev);
  };

  return (
    <div className='navbg'>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={isCollapsed ? 1 : 3} className={`sidebar-container ${isCollapsed ? 'collapsed' : ''}`}>
            <Nav variant="pills" className="flex-column sidenav-bg">
              <div className='d-flex flex-row align-items-center'>
                <img
                  src={Logo}
                  alt="Profile"
                  className="sidenav-profile-img"
                />
                {/*
                {!isCollapsed && (
                  <div className='ms-2'>
                    <p className='text-white mt-3'>{userData.username || "Guest User"}</p>
                    <p className='text-white'>{userData.email || "guest@mail.com"}</p>
                  </div>
                )}*/}
                <FiAlignJustify
                  className='back-icon'
                  onClick={handleToggleSidebar}
                  style={{
                    transform: isCollapsed ? 'rotate(180deg)' : 'rotate(0deg)',
                    cursor: 'pointer',
                    marginLeft: isCollapsed ? '0.5rem' : 'auto'
                  }}
                />
              </div>

              {!isCollapsed && (
                <>
                  <Nav.Item><Nav.Link eventKey="first" className='text-white'>Dashboard</Nav.Link></Nav.Item>
                  <Nav.Item><Nav.Link eventKey="second" className='text-white'>Courses</Nav.Link></Nav.Item>
                  <Nav.Item><Nav.Link eventKey='eleven' className='text-white'>StudentResources</Nav.Link></Nav.Item>
                  <Nav.Item><Nav.Link eventKey="third" className='text-white'>Interview Questions</Nav.Link></Nav.Item>
                  <Nav.Item><Nav.Link eventKey="fourth" className='text-white'>Videos</Nav.Link></Nav.Item>
                  <Nav.Item><Nav.Link eventKey='sixth' className='text-white'>Code Playground</Nav.Link></Nav.Item>
                  <Nav.Item><Nav.Link eventKey='seven' className='text-white'>Quiz</Nav.Link></Nav.Item>
                  <Nav.Item><Nav.Link eventKey='eight' className='text-white'>Profile</Nav.Link></Nav.Item>
                  <Nav.Item><Nav.Link eventKey='nine' className='text-white'>Contact</Nav.Link></Nav.Item>
                  <Nav.Item><Nav.Link eventKey='ten' className='text-white'>Jobby</Nav.Link></Nav.Item>
                  <p className='line'></p>
                  <Button
                    variant="outline-primary"
                    onClick={() => navigate('/')}
                    className='signout-btn'
                  >
                    <BsBoxArrowInLeft /> Signout
                  </Button>
                </>
              )}
            </Nav>
          </Col>
          <Col sm={9}
          style={{
            transition: 'margin-left 0.3s',
            marginLeft: isCollapsed ? '80px' : '300px',
            display: 'flex',
            justifyContent: 'center',
            height: '100vh',
            overflowY: 'auto',
            alignItems: 'center'
          }}>
            <Tab.Content>
              <Tab.Pane eventKey="first"><Dashboard /></Tab.Pane>
              <Tab.Pane eventKey="second"><Courses /></Tab.Pane>
              <Tab.Pane eventKey="eleven"><StudentResources /></Tab.Pane>
              <Tab.Pane eventKey="third"><InterviewQuestions /></Tab.Pane>
              <Tab.Pane eventKey="fourth"><Videos /></Tab.Pane>
              <Tab.Pane eventKey='sixth'><Editor /></Tab.Pane>
              <Tab.Pane eventKey='seven'><QuizHomePg /></Tab.Pane>
              <Tab.Pane eventKey='eight'><Profile /></Tab.Pane>
              <Tab.Pane eventKey='nine'><Contact /></Tab.Pane>
              <Tab.Pane eventKey='ten'><Job /></Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
}

export default LeftTabsExample;
