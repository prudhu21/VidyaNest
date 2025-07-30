import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import ProfileImg from '../assets/anochring.jpg'; 
import './sideNav.css'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import Courses from './Courses';
import InterviewQuestions from './InterviewQuestions';
import Videos from './Videos'
import Editor from '../EditorComponents/Editor';
import Profile from './Profile';
import { BsBoxArrowInLeft } from "react-icons/bs";
import Contact from './Contact';
import Dashboard from '../components/Dashboard';
import { FiAlignJustify } from "react-icons/fi";
import { useEffect, useState } from 'react';
import SavedSnippets from '../EditorComponents/SavedSnippets';
import Job from './Job';

function LeftTabsExample() {
  const navigate=useNavigate();

  const [isCollapsed,setIsCollapsed]=useState(false)
  const [snippets, setSnippets] = useState([]);

  const handleToggleSidebar=()=>{
    setIsCollapsed(prev=>!prev);
  }
  useEffect(() => {
    const savedSnippets = localStorage.getItem('codeSnippets');
    if (savedSnippets) {
      setSnippets(JSON.parse(savedSnippets));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('codeSnippets', JSON.stringify(snippets));
  }, [snippets]);


  const deleteSnippet = (id) => {
    if (window.confirm('Are you sure you want to delete this snippet?')) {
      const updatedSnippets = snippets.filter(snippet => snippet.id !== id);
      setSnippets(updatedSnippets);
    }
  };

  const loadSnippet = (snippet) => {
    console.log('Loading snippet:', snippet);
  };


  return (
    
    <div className='navbg'>
    <div className='d-flex flex-row'>
    </div>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>      
            <Col sm={isCollapsed?1:3} className={`sidebar-container ${isCollapsed?'collapsed':''}`}>
            <Nav variant="pills" className="flex-column sidenav-bg">
              <div className='d-flex flex-row'>
                <img src={ProfileImg} className='sidenav-profile-img' style={{display:isCollapsed?'none':'block'}}/>
                {!isCollapsed && (
                  <div className='ms-2'>
                    <p className='text-white mt-3'>Attuluri.Prudula Sri</p>
                    <p className='text-white'>prudhu21</p>
                  </div>
                )}
                <FiAlignJustify className='back-icon'
                 onClick={handleToggleSidebar}
                 style={{transform:isCollapsed?'rotate(180deg)':'rotate(0deg)',
                        cursor:'pointer',
                        marginLeft:isCollapsed?'0.5rem':'auto'
                 }}/>
    </div>
          {!isCollapsed&&(
            <>
                <Nav.Item className='nav-item'>
                  <Nav.Link eventKey="first" className='text-white mb-1 '>Dashboard</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second" className='text-white mb-1'>Courses</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third" className='text-white mb-1'>Interview Questions</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth" className='text-white mb-1'>Videos</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="sixth" className='text-white mb-1'>Code Playground</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="seventh" className='text-white mb-1'>Saved Snippets</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="eight" className='text-white'>Profile</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="nine" className='text-white'>Contact</Nav.Link>
                </Nav.Item> 
                <Nav.Item>
                  <Nav.Link eventKey="ten" className='text-white'>Jobby</Nav.Link>
                </Nav.Item>  
                <p className='line'></p>
                <Button variant="outline-primary" onClick={()=>navigate('/')} className='signout-btn'>
                  <BsBoxArrowInLeft /> Signout</Button>
      </>
      )}
      </Nav>
      </Col>
            <Col sm={9}>
            <Tab.Content>
                <Tab.Pane eventKey="first"><Dashboard/></Tab.Pane>
                <Tab.Pane eventKey="second"><Courses/></Tab.Pane>
                <Tab.Pane eventKey="third"><InterviewQuestions/></Tab.Pane>
                <Tab.Pane eventKey="fourth"><Videos/></Tab.Pane>
                <Tab.Pane eventKey='sixth'><Editor/></Tab.Pane>
                <Tab.Pane eventKey='seventh'><SavedSnippets 
                      snippets={snippets}
                      loadSnippet={loadSnippet}
                      deleteSnippet={deleteSnippet}
                    />
                </Tab.Pane>
                <Tab.Pane eventKey='eight'><Profile/></Tab.Pane>
                <Tab.Pane eventKey='nine'><Contact/></Tab.Pane>
                <Tab.Pane eventKey='ten'><Job/></Tab.Pane>
            </Tab.Content>
            </Col>
        </Row>
        </Tab.Container>
    </div>
  );
}

export default LeftTabsExample;