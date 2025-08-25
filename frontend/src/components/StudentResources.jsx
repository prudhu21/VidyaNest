import React, { useEffect, useState } from "react";
import { getUploads } from "../TeacherComponents/uploadService"; 
import "./StudentResources.css";

const StudentResources = () => {
  const [notes, setNotes] = useState([]);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const syncUploads = () => {
      const uploads = getUploads();
      setNotes(uploads.filter((u) => u.type === "notes"));
      setVideos(uploads.filter((u) => u.type === "video"));
    };

    syncUploads();

    window.addEventListener("uploadsUpdated", syncUploads);

    return () => {
      window.removeEventListener("uploadsUpdated", syncUploads);
    };
  }, []);

  return (
    <div className="container mt-4 student-resources">
      <h2 className="mb-3 text-center section-title">📒 Notes</h2>
      {notes.length === 0 ? (
        <p className="text-center empty-msg">No notes uploaded yet.</p>
      ) : (
        <ul className="list-group mb-4 resource-list">
          {notes.map((note, index) => (
            <li
              key={note.id}
              className="list-group-item note-card animate-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="resource-info">
                <h6 className="file-name">{note.fileName}</h6>
                <p>
                  <strong>Teacher:</strong> {note.teacherName}
                </p>
                <p>
                  <strong>Subject:</strong> {note.subject}
                </p>
              </div>
              <div className="resource-actions">
                <a
                  href={note.downloadUrl}
        download
        className="btn btn-sm btn-outline-primary me-2"
        >Download
        </a>
        <a
                  href={note.viewUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-sm btn-outline-secondary"
                >
                  View
        </a>
        </div>
        </li>
          ))}
        </ul>
    )}

      <h2 className="mb-3 text-center section-title">🎥 Videos</h2>
      {videos.length === 0 ? (
        <p className="text-center empty-msg">No videos uploaded yet.</p>
      ) : (
        <ul className="list-group resource-list">
          {videos.map((video, index) => (
            <li
              key={video.id}
              className="list-group-item note-card animate-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="resource-info">
                <h6 className="file-name">{video.fileName}</h6>
                <p>
                  <strong>Teacher:</strong> {video.teacherName}
                </p>
                <p>
                  <strong>Subject:</strong> {video.subject}
                </p>
              </div>
              <div className="resource-actions">
                <a
                  href={video.downloadUrl}
                  download
                  className="btn btn-outline-primary me-2"
                >
                  Download
                </a>
                <a
                  href={video.viewUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-sm btn-outline-secondary"
                >
                  View
                </a>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default StudentResources;
