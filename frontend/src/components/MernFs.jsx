import React, { useState,useEffect } from 'react';
import { data } from 'react-router-dom';

const coursesData = {
  html: {
  title: "HTML - For Frontend",
  description: "Learn to structure web pages with HTML5. Understand tags, forms, and semantic markup.",
  image: "https://img.freepik.com/free-photo/html-css-collage-concept_23-2150061955.jpg",
  notesPath: "/htmlnotes.txt",
  pdf:"/html.pdf"
},

  css: {
    title: "CSS - For Frontend",
    description: "Style your web pages with CSS3. Learn about selectors, flexbox, grid, and responsive design.",
    image: "https://img.freepik.com/premium-vector/css-vector-icon-design-illustration_1174953-23508.jpg",
    notesPath:"/cssnotes.txt",
    pdf:"/css.pdf"
  },
  bootstrap:{
    title: "Bootstrap - For Frontend",
    description: "Bootstrap is a free, open-source front-end framework used to build responsive, mobile-first websites quickly and easily.",
    image: "data:image/jpeg;base64,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",
    notesPath:"/bootstrapnotes.txt",
    pdf:"/bootstrap.pdf"
  },
  js: {
    title: "JavaScript - For Frontend",
    description: "Add interactivity using JavaScript. Understand DOM manipulation, events, ES6+, and async programming.",
    image: "https://img.freepik.com/free-vector/javascript-abstract-concept-illustration_335657-3702.jpg",
    pdf:"/js.pdf"
  },
  react: {
    title: "ReactJS - For Frontend",
    description: "Build dynamic user interfaces with React. Learn components, hooks, state management, and routing.",
    image: "https://img.freepik.com/free-photo/side-shot-code-editor-using-react-js_181624-61842.jpg",
    pdf:'react.pdf'
  },
  node: {
    title: "NodeJS - For Backend",
    description: "Server-side JavaScript with Node.js. Learn how to create APIs, handle requests, and work with files.",
    image: "https://img.freepik.com/free-vector/gradient-api-infographic_23-2149371582.jpg",
  },
  express: {
    title: "ExpressJS - For Backend",
    description: "Fast, minimalist web framework for Node.js. Learn routing, middleware, and building scalable backends.",
    image: "https://img.freepik.com/premium-vector/open-source-illustration-tiny-programming-language-persons-concept-developer-protocol-platform-interface-with-code-information-digital-software-script-text-signs-computer-data_126608-891.jpg",
  },
  mongodb: {
    title: "MongoDB - For Database",
    description: "NoSQL document database. Learn about schema design, queries, aggregation, and indexing.",
    image: "https://img.freepik.com/premium-vector/3d-illustration-cloud-server_1302-14960.jpg",
    pdf:'mongodb.pdf'
  },
};

const MernFs = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [notesText, setNotesText] = useState("");
  const [pdfUrl, setPdfUrl] = useState("");

  useEffect(() => {
    if (selectedCourse) {
      // Load notes text if available
      if (selectedCourse.notesPath) {
        fetch(selectedCourse.notesPath)
          .then((response) => response.text())
          .then((data) => setNotesText(data))
          .catch((err) => console.error("Error loading notes:", err));
      }
      
      // Set PDF URL if available
      if (selectedCourse.pdf) {
        setPdfUrl(selectedCourse.pdf);
      }
    }
  }, [selectedCourse]);

  const handleViewPdf = (course) => {
  if (course.pdf) {
    // Create a temporary link to trigger download
    const link = document.createElement('a');
    link.href = course.pdf;
    link.download = course.title.replace(/\s+/g, '_') + '.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
};

  const handleLearn = (course) => {
    setSelectedCourse(course);
    setPdfUrl(""); // Clear PDF when viewing notes
  };

  return (
    <div>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {Object.entries(coursesData).map(([key, course]) => (
          <div className="col" key={key}>
            <div className="card h-100">
              <img src={course.image} className="card-img-top" alt={course.title} />
              <div className="card-body">
                <h5 className="card-title">{course.title}</h5>
                <p className="card-text">{course.description}</p>
                <div className='d-flex flex-column'>
                  {course.pdf && (
                    <button
                      className="btn btn-outline-success start-btn mb-2"
                      onClick={() => handleViewPdf(course)}
                    >
                      Download Pdf
                    </button>
                  )}
                  <button
                    className="btn btn-outline-success start-btn"
                    onClick={() => handleLearn(course)}
                  >
                    Learn
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedCourse && (
        <div
          className="modal fade show"
          style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
          tabIndex="-1"
          role="dialog"
          onClick={() => setSelectedCourse(null)}
        >
          <div
            className="modal-dialog modal-lg"
            role="document"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{selectedCourse.title}</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setSelectedCourse(null)}
                ></button>
              </div>
              {pdfUrl ? (
                <iframe 
                  src={pdfUrl} 
                  width="100%" 
                  height="500px"
                  title="PDF Viewer"
                />
              ) : (
                <pre>{notesText}</pre>
              )}
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-outline-success"
                  onClick={() => setSelectedCourse(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .modal {
          position: fixed;
          top: 0; left: 10px; right: 0; bottom: 0;
          z-index: 1050;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .modal-body pre {
          background-color: #f6f8fa;
          padding: 10px;
          border-radius: 6px;
          overflow-x: auto;
          font-family: monospace;
        }
        .modal-content {
          border-radius: 5px;
          padding: 20px;
          max-height: 80vh;
          overflow-y: auto;
          box-shadow: 0 5px 15px rgba(0,0,0,.5);
        }
      `}</style>
    </div>
  );
};

export default MernFs;
