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

const baseUrl = process.env.REACT_APP_BACKEND_URL;


function App() {
  const [pdfUrl, setPdfUrl] = useState(null);

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LoginPg baseUrl={baseUrl}/>}></Route>
      <Route path='/register' element={<RegisterPg baseUrl={baseUrl}/>}></Route>
      <Route path='/sidenav' element={<LeftTabsExample baseUrl={baseUrl}/>}></Route>
      <Route path='/dashboard' element={<Dashboard baseUrl={baseUrl}/>}></Route>
      <Route path='/courses' element={<Courses baseUrl={baseUrl}/>}></Route>
      <Route path='/interview' element={<InterviewQuestions baseUrl={baseUrl}/>}></Route>
      <Route path='/pdfs' element={<Pdfs baseUrl={baseUrl}/>}></Route>
      <Route path='/settings' element={<Settings baseUrl={baseUrl}/>}/>
      <Route path='/profile' element={<Profile baseUrl={baseUrl}/>}/>
      <Route path='/contact' element={<Contact baseUrl={baseUrl}/>}/>
      <Route path='/mernfs' element={<MernFs baseUrl={baseUrl}/>}/>
      <Route path='/editor' element={<EditorComponents baseUrl={baseUrl}/>}/>
      <Route path='/job' element={<Job baseUrl={baseUrl}/>}/>
      <Route path="/jobs/:id" element={<JobsPage baseUrl={baseUrl}/>}/>

      //teacher component Routes
      
      <Route path="/teacher-dashboard" element={<TeacherDashboard baseUrl={baseUrl}/>} />
          <Route path='/uploadnotes' element={<UploadNotes baseUrl={baseUrl}/>}/>
          <Route path="/uploadvideos" element={<UploadVideos baseUrl={baseUrl} />} />
          <Route path="/play" element={<PlayVideo baseUrl={baseUrl} />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;