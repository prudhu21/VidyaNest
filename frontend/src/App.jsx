import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css'
import LoginPg from './components/LoginPg'
import RegisterPg from './components/RegisterPg'
import LeftTabsExample from './components/sideNav';
import Courses from './components/Courses';
import InterviewQuestions from './components/InterviewQuestions';
import Pdfs from './components/Pdfs';
import Dashboard from './components/Dashboard';
import Settings from './components/Settings';
import Profile from './components/Profile';
import Contact from './components/Contact';
import MernFs from './components/MernFs';
import EditorComponents from './EditorComponents/CodeEditor';

//teacher components imports
import TeacherDashboard from './TeacherComponents/TeacherDashboard';
import UploadNotes from './TeacherComponents/UploadNotes';
import UploadVideos from './TeacherComponents/UploadVideos';
import PlayVideo from './TeacherComponents/PlayVideo';

import { useState } from 'react';
import Job from './components/Job';
import JobsPage from './components/JobsPage';

function App() {
  const [pdfUrl, setPdfUrl] = useState(null);

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LoginPg/>}></Route>
      <Route path='/register' element={<RegisterPg/>}></Route>
      <Route path='/sidenav' element={<LeftTabsExample/>}></Route>
      <Route path='/dashboard' element={<Dashboard/>}></Route>
      <Route path='/courses' element={<Courses/>}></Route>
      <Route path='/interview' element={<InterviewQuestions/>}></Route>
      <Route path='/pdfs' element={<Pdfs/>}></Route>
      <Route path='/settings' element={<Settings/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/mernfs' element={<MernFs/>}/>
      <Route path='/editor' element={<EditorComponents/>}/>
      <Route path='/job' element={<Job/>}/>
      <Route path="/jobs/:id" element={<JobsPage/>}/>

      //teacher component Routes
      
      <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
          <Route path='/uploadnotes' element={<UploadNotes/>}/>
          <Route path="/uploadvideos" element={<UploadVideos />} />
          <Route path="/play" element={<PlayVideo />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;