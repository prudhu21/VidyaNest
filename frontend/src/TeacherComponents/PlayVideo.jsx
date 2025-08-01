import React from 'react';
import { useLocation } from 'react-router-dom';

const PlayVideo = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const videoUrl = params.get('url');
  // kkk

  return (
    <div className="text-center" style={{ padding: '20px' }}>
      <h2 style={{ color: '#fff' }}>Video Player</h2>
      {videoUrl ? (
        <video width="720" height="480" controls autoPlay>
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <p style={{ color: 'white' }}>No video URL provided.</p>
      )}
    </div>
  );
};

export default PlayVideo;
