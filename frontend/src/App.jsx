import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { useState } from "react";

//student components imports
import LoginPg from "./components/LoginPg";
import RegisterPg from "./components/RegisterPg";
import LeftTabsExample from "./components/sideNav";
import Courses from "./components/Courses";
import InterviewQuestions from "./components/InterviewQuestions";
import Pdfs from "./components/Pdfs";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import Contact from "./components/Contact";
import MernFs from "./components/MernFs";
import EditorComponents from "./EditorComponents/CodeEditor";
import StudentResources from "./components/StudentResources";
import ProfileHeader from "./components/Header";
import NotFound from "./components/NotFound";

// teacher component imports
import TeacherDashboard from "./TeacherComponents/TeacherDashboard";
import UploadNotes from "./TeacherComponents/UploadNotes";
import UploadVideos from "./TeacherComponents/UploadVideos";

// jobs component imports
import Job from "./components/Job";
import JobFilters from "./JobComponents/JobFilters";
import JobDetails from "./JobComponents/JobDetails";

//quiz component imports
import QuizHomePg from "./QuizComponents/QuizHomePg";
import Results from "./QuizComponents/Results";
import Review from "./QuizComponents/Review";
import Quiz from "./QuizComponents/Quiz";

import ProtectedRoute from "./components/ProtectedRoute";

const baseUrl = import.meta.env.VITE_REACT_APP_BACKEND_URL || "http://localhost:5000";

function App() {
  const [pdfUrl, setPdfUrl] = useState(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPg baseUrl={baseUrl} />} />
        <Route path="/register" element={<RegisterPg baseUrl={baseUrl} />} />

        {/* Protected Routes */}
        <Route path="/sidenav" element={<ProtectedRoute><LeftTabsExample baseUrl={baseUrl} /></ProtectedRoute>}/>
        <Route path="/pdfs" element={<ProtectedRoute><Pdfs baseUrl={baseUrl} /></ProtectedRoute>}/>
        <Route path="/mernfs" element={<ProtectedRoute><MernFs baseUrl={baseUrl} /></ProtectedRoute>}/>

        {/* Student Routes */}
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard baseUrl={baseUrl} /></ProtectedRoute>}/>
        <Route path="/courses" element={<ProtectedRoute><Courses baseUrl={baseUrl} /></ProtectedRoute>}/>
        <Route
          path="/students-resources"
          element={
            <ProtectedRoute>
              <StudentResources />
            </ProtectedRoute>
          }
        />
        <Route
          path="/interview"
          element={
            <ProtectedRoute>
              <InterviewQuestions baseUrl={baseUrl} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/editor"
          element={
            <ProtectedRoute>
              <EditorComponents baseUrl={baseUrl} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile baseUrl={baseUrl} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/contact"
          element={
            <ProtectedRoute>
              <Contact baseUrl={baseUrl} />
            </ProtectedRoute>
          }
        />

        <Route
          path="/profile-header"
          element={
            <ProtectedRoute>
              <ProfileHeader baseUrl={baseUrl}/>
            </ProtectedRoute>
          }
        />

        {/* Teacher Routes */}
        <Route
          path="/teacher-dashboard"
          element={
            <ProtectedRoute>
              <TeacherDashboard baseUrl={baseUrl} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/uploadnotes"
          element={
            <ProtectedRoute>
              <UploadNotes baseUrl={baseUrl} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/uploadvideos"
          element={
            <ProtectedRoute>
              <UploadVideos baseUrl={baseUrl} />
            </ProtectedRoute>
          }
        />

        {/* Job Routes */}
        <Route
          path="/job"
          element={
            <ProtectedRoute>
              <Job baseUrl={baseUrl} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/job-filters"
          element={
            <ProtectedRoute>
              <JobFilters
                filters={{
                  search: "",
                  location: "",
                  experienceLevel: "",
                  skills: [],
                }}
                onFilterChange={(key, value) => {
                  console.log("Changed:", key, value);
                }}
                onClearFilters={() => {
                  console.log("Filters cleared");
                }}
              />
            </ProtectedRoute>
          }
        />
        <Route
          path="/jobs/:id"
          element={
            <ProtectedRoute>
              <JobDetails />
            </ProtectedRoute>
          }
        />

        {/* Quiz Routes */}
        <Route
          path="/quiz"
          element={
            <ProtectedRoute>
              <QuizHomePg />
            </ProtectedRoute>
          }
        />
        <Route
          path="/quiz/:domainId"
          element={
            <ProtectedRoute>
              <Quiz />
            </ProtectedRoute>
          }
        />
        <Route
          path="/results"
          element={
            <ProtectedRoute>
              <Results />
            </ProtectedRoute>
          }
        />
        <Route
          path="/review"
          element={
            <ProtectedRoute>
              <Review />
            </ProtectedRoute>
          }
        />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
