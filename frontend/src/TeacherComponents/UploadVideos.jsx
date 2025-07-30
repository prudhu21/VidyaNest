import React, { useState } from 'react';
import './UploadNotes.css';
import { useNavigate } from 'react-router-dom';

const UploadVideos = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [title, setTitle] = useState('');
  const navigate = useNavigate(); // for redirecting

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('video/')) {
      setSelectedFile(file);
    } else {
      alert('Please select a valid video file.');
    }
  };

  const handleUpload = (e) => {
    e.preventDefault();

    if (!selectedFile || !title.trim()) {
      alert('Please provide both a title and a video file.');
      return;
    }

    const fileUrl = URL.createObjectURL(selectedFile);
    const newFile = {
      name: title,
      url: fileUrl,
    };

    setUploadedFiles((prevFiles) => [...prevFiles, newFile]);
    setSelectedFile(null);
    setTitle('');
  };

  const handleVideoClick = (url) => {
    navigate(`/play?url=${encodeURIComponent(url)}`);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }} className='upload-bg text-center'>
      <form onSubmit={handleUpload}>
        <h2 className='upload-text'>Upload Video</h2><br/>
        <input
          type="text"
          placeholder="Enter Video Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="block w-full h-25 mb-2 p-2 ml-5 border rounded"
        />
        <input type="file" accept="video/*" onChange={handleFileChange} /><br/><br/>
        <button type="submit" className='btn-outline-success'>
          <img
            src='https://img.freepik.com/premium-psd/upload-icon-computing-symbol-3d-render-illustration-isolated-transparent-background_790767-498.jpg'
            style={{ height: '30px', width: '30px', marginRight: '5px' }}
            alt="upload icon"
          />
          Upload
        </button>
      </form>

      {uploadedFiles.length > 0 && (
        <div style={{ marginTop: '30px' }} className='uploaded-notes'>
          <h3>Uploaded Videos:</h3>
          <ul style={{ listStyleType: 'none' }}>
            {uploadedFiles.map((file, index) => (
              <li
                key={index}
                onClick={() => handleVideoClick(file.url)}
                style={{ color: 'white', cursor: 'pointer', marginBottom: '10px', textDecoration: 'underline' }}
              >
                {file.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default UploadVideos;
