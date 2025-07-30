import React, { useState } from 'react';
import './UploadNotes.css';
import uploadBg from '../assets/upload-bg.jpeg';

const UploadNotes = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [title, setTitle] = useState('');

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === 'application/pdf') {
      setSelectedFile(file);
    }
  };

  const handleUpload = (e) => {
    e.preventDefault();

    if (!selectedFile || !title.trim()) {
      alert('Please provide both a title and a PDF file.');
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

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }} className='upload-bg text-center'> 
      <form onSubmit={handleUpload}>
        <h2 className='upload-text'>Upload PDF Notes</h2><br/>
        <input
          type="text"
          placeholder="Enter Notes Name Here"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="block w-full h-25 mb-2 p-2 ml-5 border rounded"
        />
        <input type="file" accept="application/pdf" onChange={handleFileChange} /><br/><br/>
        <button type="submit" className='btn-outline-success'>
          <img
            src='https://img.freepik.com/premium-psd/upload-icon-computing-symbol-3d-render-illustration-isolated-transparent-background_790767-498.jpg'
            style={{ height: '30px', width: '30px' }}
            alt="upload icon"
          />
          Upload
        </button>
      </form>

      {uploadedFiles.length > 0 && (
        <div style={{ marginTop: '30px' }} className='uploaded-notes'>
          <h3>Here is your uploaded notes:</h3>
          <ul>
            {uploadedFiles.map((file, index) => (
              <li key={index}>
                <a
                  href={file.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'whitesmoke', textDecoration: 'none', cursor: 'pointer' }}
                >
                  {file.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default UploadNotes;
