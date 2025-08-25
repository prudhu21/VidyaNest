import React, { useState } from 'react';
import TeacherNavBar from './TeacherNavBar';
import { addUpload } from './uploadService';
import { useNavigate } from 'react-router-dom';

const UploadNotes = () => {
  const [formData, setFormData] = useState({ teacherName: '', subject: '', file: null });
  const [uploadStatus, setUploadStatus] = useState(null);
  const navigate = useNavigate();
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const subjects = [
    'C','Python','Java','C++','Ajwt','CD','CNS'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

    const handleFileChange = (e) => {
      const file = e.target.files?.[0] || null;
      setFormData(prev => ({
        ...prev,
        file
      }));
    };


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.file) return alert("Please select a video file.");

    setUploading(true);
    setUploadProgress(0);

    const uploadData = new FormData();
    uploadData.append('teacherName', formData.teacherName);
    uploadData.append('subject', formData.subject);
    uploadData.append('file', formData.file);
    uploadData.append('timestamp', new Date().toISOString());
    uploadData.append('type', 'notes');

    try {
      const progressInterval = setInterval(() => {
        setUploadProgress(prev => {
          if (prev >= 90) {
            clearInterval(progressInterval);
            return prev;
          }
          return prev + 10;
        });
      }, 200);

      await new Promise(resolve => setTimeout(resolve, 2000));

      const newUpload = {
      id: Date.now(),
      teacherName: formData.teacherName,
      subject: formData.subject,
      fileName: formData.file.name,
      fileSize: `${(formData.file.size / 1024 / 1024).toFixed(1)} MB`,
      type: 'notes',
      timestamp: new Date().toISOString(),
      downloadUrl: URL.createObjectURL(formData.file),
      viewUrl: URL.createObjectURL(formData.file)
    };

    addUpload(newUpload);
    setUploadStatus({ type: 'success', message: 'Video uploaded successfully!' });
    setTimeout(() => navigate('/teacher-dashboard'), 1500);

    setUploadProgress(100);
    setFormData({ teacherName: '', subject: '', file: null });

      const fileInput = document.getElementById('notes-file');
      if (fileInput) fileInput.value = '';

    } catch (error) {
      setUploadStatus({ type: 'error', message: 'Upload failed. Please try again.' });
    } finally {
      setUploading(false);
      setTimeout(() => {
        setUploadProgress(0);
        setUploadStatus(null);
      }, 3000);
    }
  };

  return (
    <>
      <TeacherNavBar/>
      <div className="container-fluid py-4" style={{marginTop:"100px"}}>
        <div className="row justify-content-center">
          <div className="col-lg-8 col-xl-6">
            <div className="card">
              <div className="card-body p-4">
                <div className="d-flex align-items-center mb-4">
                  <div className="file-icon video me-3">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polygon points="23 7 16 12 23 17 23 7" />
                      <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="card-title mb-1">Upload Notes</h3>
                    <p className="text-muted mb-0">Share educational notes with students</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="teacherName" className="form-label fw-medium">Teacher Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="teacherName"
                      name="teacherName"
                      value={formData.teacherName}
                      onChange={handleInputChange}
                      placeholder="Enter your name"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="subject" className="form-label fw-medium">Subject</label>
                    <select
                      className="form-select"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select a subject</option>
                      {subjects.map(subject => (
                        <option key={subject} value={subject}>{subject}</option>
                      ))}
                    </select>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="file" className="form-label fw-medium">Notes File </label>
                    <input
                      type="file"
                      name="file"              
                      className="form-control"
                      id="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      required
                    />

                    {formData.file && (
                      <div className="form-text">
                        Selected: {formData.file.name} ({(formData.file.size / 1024 / 1024).toFixed(2)} MB)
                      </div>
                    )}
                  </div>

                   {uploading && (
                    <div className="mb-3">
                      <div className="upload-progress" style={{ background: "#e9ecef", borderRadius: "5px", overflow: "hidden" }}>
                        <div
                          className="upload-progress-bar bg-primary"
                          style={{ width: `${uploadProgress}%`, height: "8px", transition: "width 0.3s ease" }}
                        ></div>
                      </div>
                      <small className="text-muted d-block text-center mt-2">
                        Uploading... {uploadProgress}%
                      </small>
                    </div>
                  )}

                  {uploadStatus && (
                    <div className={`alert ${uploadStatus.type === 'success' ? 'alert-success' : 'alert-danger'} d-flex align-items-center mt-3`}>
                      <svg className="me-2" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        {uploadStatus.type === 'success' ? (
                          <>
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                            <polyline points="9,11 12,14 22,4" />
                          </>
                        ) : (
                          <>
                            <circle cx="12" cy="12" r="10" />
                            <line x1="15" y1="9" x2="9" y2="15" />
                            <line x1="9" y1="9" x2="15" y2="15" />
                          </>
                        )}
                      </svg>
                      {uploadStatus.message}
                    </div>
                  )}

                  <button
                    type="submit"
                    className="btn btn-success w-100 d-flex align-items-center justify-content-center"
                    disabled={uploading}
                  >
                    {uploading ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                        Uploading...
                      </>
                    ) : (
                      <>
                        <svg className="me-2" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                          <polyline points="7,10 12,15 17,10" />
                          <line x1="12" y1="15" x2="12" y2="3" />
                        </svg>
                        Upload Notes
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UploadNotes;
