import React, { useState, useEffect } from 'react';
import { getUploads, deleteUpload } from './uploadService';
import axios from 'axios';
import { MdDeleteOutline } from "react-icons/md";
import TeacherNavBar from './TeacherNavBar';

const TeacherDashboard = () => {
  const [uploads, setUploads] = useState([]);
  const [stats, setStats] = useState({ total: 0, notes: 0, videos: 0 });
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [filteredUploads, setFilteredUploads] = useState([]);
  const [filters, setFilters] = useState({
    subject: '',
    teacherName: '',
    type: '',
    search: ''
  });
  

  useEffect(() => {
    loadUploads();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [uploads, filters]);

  const loadUploads = async () => {
    try {
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 500));
      const storedUploads = getUploads();
      setUploads(storedUploads);
      calculateStats(storedUploads);
    } catch (error) {
      console.error('Error loading uploads:', error);
    } finally {
      setLoading(false);
    }
  };

  const calculateStats = (data) => {
    const total = data.length;
    const notes = data.filter(u => u.type === 'notes').length;
    const videos = data.filter(u => u.type === 'video').length;
    setStats({ total, notes, videos });
  };

  const applyFilters = () => {
    let filtered = uploads;

    if (filters.subject) {
      filtered = filtered.filter(upload => upload.subject === filters.subject);
    }

    if (filters.teacherName) {
      filtered = filtered.filter(upload => 
        upload.teacherName.toLowerCase().includes(filters.teacherName.toLowerCase())
      );
    }

    if (filters.type) {
      filtered = filtered.filter(upload => upload.type === filters.type);
    }

    if (filters.search) {
      filtered = filtered.filter(upload => 
        upload.fileName.toLowerCase().includes(filters.search.toLowerCase()) ||
        upload.teacherName.toLowerCase().includes(filters.search.toLowerCase()) ||
        upload.subject.toLowerCase().includes(filters.search.toLowerCase())
      );
    }

    setFilteredUploads(filtered);
  };

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleDownload = async (upload) => {
    try {
      // Create a temporary anchor element to trigger download
      const link = document.createElement('a');
      link.href = upload.downloadUrl;
      link.download = upload.fileName;
      link.target = '_blank';

      const response = await fetch(upload.downloadUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      
      link.href = url;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      window.URL.revokeObjectURL(url);
      
      console.log('Downloaded:', upload.fileName);
    } catch (error) {
      window.open(upload.downloadUrl, '_blank');
    }
  };

  const handleView = (upload) => {
    setSelectedFile(upload);
    setShowModal(true);
  };

  const handleDelete = (id) => {
    deleteUpload(id);
    loadUploads();
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedFile(null);
  };

  const formatDate = (timestamp) => {
    return new Date(timestamp).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getUniqueValues = (key) => {
    return [...new Set(uploads.map(upload => upload[key]))];
  };

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '50vh' }}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container-fluid py-4">

      <TeacherNavBar/>
      
      <div className="row mb-4" style={{marginTop:'80px'}}>
        <div className="col">
          <div className="card">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h2 className="card-title mb-1">Teacher Dashboard</h2>
                  <p className="text-muted mb-0">Manage and monitor uploaded content</p>
                </div>
                <div className="d-flex align-items-center text-muted">
                  <svg className="me-2" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                    <line x1="16" y1="2" x2="16" y2="6"/>
                    <line x1="8" y1="2" x2="8" y2="6"/>
                    <line x1="3" y1="10" x2="21" y2="10"/>
                  </svg>
                  <small>Last updated: {new Date().toLocaleDateString()}</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row mb-4" style={{marginLeft:"150px"}}>
        <div className="col-lg-3 col-md-6 mb-3">
          <div className="card stats-card">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <div className="mb-4">
                    <p>Total Uploads: {stats.total}</p>      
                  </div>
                  <h3 className="mb-0">{stats.totalUploads}</h3>
                </div>
                <div className="text-primary">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="22,12 18,12 15,21 9,3 6,12 2,12"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 mb-3">
          <div className="card stats-card notes">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <p>Notes: {stats.notes}</p>       
                  <h3 className="mb-0">{stats.totalNotes}</h3>
                </div>
                <div className="text-success">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14,2 14,8 20,8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/>
                    <line x1="16" y1="17" x2="8" y2="17"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 mb-3">
          <div className="card stats-card videos">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <p>Videos: {stats.videos}</p>
                  <h3 className="mb-0">{stats.totalVideos}</h3>
                </div>
                <div style={{ color: 'var(--accent-color)' }}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="23 7 16 12 23 17 23 7"/>
                    <rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row mb-4">
        <div className="col">
          <div className="card">
            <div className="card-body">
              <div className="d-flex align-items-center mb-3">
                <svg className="me-2" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>
                </svg>
                <h5 className="mb-0">Filters</h5>
              </div>
              
              <div className="row">
                <div className="col-lg-3 col-md-6 mb-3">
                  <label className="form-label">Search</label>
                  <div className="position-relative">
                    <input
                      type="text"
                      className="form-control ps-5"
                      placeholder="Search files, teachers..."
                      value={filters.search}
                      onChange={(e) => handleFilterChange('search', e.target.value)}
                    />
                    <svg className="position-absolute top-50 start-0 translate-middle-y ms-3" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="11" cy="11" r="8"/>
                      <path d="M21 21l-4.35-4.35"/>
                    </svg>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 mb-3">
                  <label className="form-label">Subject</label>
                  <select
                    className="form-select"
                    value={filters.subject}
                    onChange={(e) => handleFilterChange('subject', e.target.value)}
                  >
                    <option value="">All Subjects</option>
                    <option value="C">C</option>
                    <option value="Python">Python</option>
                    <option value="C++">C++</option>
                    {getUniqueValues('subject').map(subject => (
                      <option key={subject} value={subject}>{subject}</option>
                    ))}
                  </select>
                </div>

                <div className="col-lg-3 col-md-6 mb-3">
                  <label className="form-label">Teacher</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Teacher name"
                    value={filters.teacherName}
                    onChange={(e) => handleFilterChange('teacherName', e.target.value)}
                  />
                </div>

                <div className="col-lg-3 col-md-6 mb-3">
                  <label className="form-label">Type</label>
                  <select
                    className="form-select"
                    value={filters.type}
                    onChange={(e) => handleFilterChange('type', e.target.value)}
                  >
                    <option value="">All Types</option>
                    <option value="notes">Notes</option>
                    <option value="video">Videos</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
      <div className="row mb-4">
        <div className="col">
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0">Uploaded Files ({filteredUploads.length})</h5>
            </div>

            <div className="table-responsive">
              <table className="table table-hover mb-0">
                <thead>
                  <tr>
                    <th>File</th>
                    <th>Teacher</th>
                    <th>Subject</th>
                    <th>Type</th>
                    <th>Size</th>
                    <th>Uploaded</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredUploads.map((upload) => (
                    <tr key={upload.id}>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className={`file-icon ${upload.type} me-3`}>
                            {upload.type === 'video' ? (
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <polygon points="23 7 16 12 23 17 23 7" />
                                <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                              </svg>
                            ) : (
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                <polyline points="14,2 14,8 20,8" />
                                <line x1="16" y1="13" x2="8" y2="13" />
                                <line x1="16" y1="17" x2="8" y2="17" />
                              </svg>
                            )}
                          </div>
                          <div>
                            <div className="fw-medium">{upload.fileName}</div>
                          </div>
                        </div>
                      </td>
                      <td>{upload.teacherName}</td>
                      <td>
                        <span className="badge bg-success">{upload.subject}</span>
                      </td>
                      <td>
                        <span className={`badge ${upload.type === 'video' ? 'bg-secondary' : 'bg-primary'}`}>
                          {upload.type === 'video' ? 'Video' : 'Notes'}
                        </span>
                      </td>
                      <td>{upload.fileSize}</td>
                      <td className="text-muted">{formatDate(upload.timestamp)}</td>
                      <td>
                        <div className="d-flex">
                          <button
                            onClick={() => handleView(upload)}
                            className="action-btn btn-view me-1"
                            title="View file"
                          >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                              <circle cx="12" cy="12" r="3" />
                            </svg>
                          </button>
                          <button
                            onClick={() => handleDownload(upload)}
                            className="action-btn btn-download"
                            title="Download file"
                          >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                              <polyline points="7,10 12,15 17,10" />
                              <line x1="12" y1="15" x2="12" y2="3" />
                            </svg>
                          </button>
                          <button
                            onClick={() => {
                              if (window.confirm('Are you sure you want to delete this upload?')) {
                                handleDelete(upload.id);
                              }
                            }} className="action-btn btn-delete">
                            <MdDeleteOutline /> 
                          </button>

                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {filteredUploads.length === 0 && (
                <div className="empty-state text-center my-4">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="40" height="40">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                  </svg>
                  <h5>No uploads found</h5>
                  <p>Try adjusting your filters</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {Object.keys(stats.teacherCounts || {}).length > 0 && (
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title mb-4">Upload Count by Teacher</h5>
                <div className="row">
                  {Object.entries(stats.teacherCounts).map(([teacher, count]) => (
                    <div key={teacher} className="col-lg-4 col-md-6 mb-3">
                      <div className="d-flex justify-content-between align-items-center p-3 bg-light rounded">
                        <span className="fw-medium">{teacher}</span>
                        <span className="badge bg-primary">{count} uploads</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {showModal && selectedFile && (
        <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog modal-xl">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{selectedFile.fileName}</h5>
                <button type="button" className="btn-close" onClick={closeModal}></button>
              </div>
              <div className="modal-body p-0">
                {selectedFile.type === 'video' ? (
                  <video className="file-preview w-100" controls src={selectedFile.viewUrl}>
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <iframe
                    className="pdf-viewer"
                    src={selectedFile.viewUrl}
                    title={selectedFile.fileName}
                  >
                    <p>
                      Your browser does not support PDFs.
                      <a href={selectedFile.viewUrl} target="_blank" rel="noopener noreferrer">
                        Download the PDF
                      </a>
                    </p>
                  </iframe>
                )}
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={() => handleDownload(selectedFile)}
                >
                  <svg className="me-2" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7,10 12,15 17,10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  Download
                </button>
                <button type="button" className="btn btn-secondary" onClick={closeModal}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      </div>
  </div>
  )
}
export default TeacherDashboard;