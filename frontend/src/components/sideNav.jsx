import {
  FiAlignJustify,
  FiHome,
  FiBook,
  FiFolder,
  FiClipboard,
  FiVideo,
  FiCode,
  FiUser,
  FiPhone,
  FiBriefcase
} from "react-icons/fi";
import { BsBoxArrowInLeft } from "react-icons/bs";
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './sideNav.css';
import Courses from './Courses';
import InterviewQuestions from './InterviewQuestions';
import Videos from './Videos';
import Editor from '../EditorComponents/Editor';
import Profile from './Profile';
import Contact from './Contact';
import Dashboard from '../components/Dashboard';
import QuizHomePg from '../QuizComponents/QuizHomePg';
import Job from './Job';
import StudentResources from './StudentResources';
import MernFs from './MernFs';
import Header from './Header';
import { TabPane } from "react-bootstrap";

function LeftTabsExample() {
  const navigate = useNavigate();
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [activeKey, setActiveKey] = useState("first");
  
  return (
    <>
      <Header setActiveKey={setActiveKey}/>
      <div className='navbg'>
        <Tab.Container id="left-tabs-example" activeKey={activeKey} onSelect={(k) => setActiveKey(k)}>
          <Row>
            <Col
              sm="auto"
              className={`sidebar-container ${isCollapsed ? 'collapsed' : ''}`}
              style={{
                width: isCollapsed ? '40px' : '250px',
                transition: 'width 0.3s ease',
                overflow: 'hidden',
                padding: '5px 0' // top/bottom spacing for icons
              }}
              onMouseEnter={() => setIsCollapsed(false)}
              onMouseLeave={() => setIsCollapsed(true)}
            >
              <Nav variant="pills" className="flex-column sidenav-bg">

                {[
                  { key: "first", icon: <FiHome size={20} />, label: "Dashboard" },
                  { key: "second", icon: <FiBook size={20} />, label: "Courses" },
                  { key: "eleven", icon: <FiFolder size={20} />, label: "StudentResources" },
                  { key: "third", icon: <FiClipboard size={20} />, label: "Interview Questions" },
                  { key: "fourth", icon: <FiVideo size={20} />, label: "Videos" },
                  { key: "sixth", icon: <FiCode size={20} />, label: "Code Playground" },
                  { key: "nine", icon: <FiPhone size={20} />, label: "Contact" },
                  { key: "ten", icon: <FiBriefcase size={20} />, label: "Jobby" }
                ].map(({ key, icon, label }) => (
                  <Nav.Item key={key} className="mb-2 mt-2">
                    <Nav.Link
                      eventKey={key}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: isCollapsed ? 'center' : 'flex-start',
                        color: 'white',
                        padding: '15px 5px',
                        marginLeft:'50px',
                        marginRight:'30px'
                      }}
                    >
                      {icon}
                      {!isCollapsed && <span className="ms-2">{label}</span>}
                    </Nav.Link>
                  </Nav.Item>
                ))}

                <div className="mt-auto px-1">
                  <Button
                    variant="outline-primary"
                    onClick={() => navigate('/')}
                    style={{
                      width: isCollapsed ? '35px' : '100%',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}
                  >
                    <BsBoxArrowInLeft size={20} />
                    {!isCollapsed && <span className="ms-2">Signout</span>}
                  </Button>
                </div>
              </Nav>
            </Col>


            <Col sm={9}
              style={{
                transition: 'margin-left 0.3s',
                marginLeft: isCollapsed ? '80px' : '300px',
                display: 'flex',
                justifyContent: 'center',
                height: '100vh',
                overflowY: 'auto'
              }}>
              <Tab.Content>
                <Tab.Pane eventKey="first"><Dashboard /></Tab.Pane>
                <Tab.Pane eventKey="second"><Courses setActiveKey={setActiveKey} /></Tab.Pane>
                <Tab.Pane eventKey="eleven"><StudentResources /></Tab.Pane>
                <Tab.Pane eventKey="third"><InterviewQuestions /></Tab.Pane>
                <Tab.Pane eventKey="fourth"><Videos /></Tab.Pane>
                <Tab.Pane eventKey='sixth'><Editor /></Tab.Pane>
                <Tab.Pane eventKey='eight'><Profile /></Tab.Pane>
                <Tab.Pane eventKey='nine'><Contact /></Tab.Pane>
                <Tab.Pane eventKey='ten'><Job /></Tab.Pane>
                <Tab.Pane eventKey="mernfs"><MernFs /></Tab.Pane>
                <Tab.Pane eventKey="quiz"><QuizHomePg /></Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    </>
  );
}

export default LeftTabsExample;
