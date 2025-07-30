import React from "react";

// Decode HTML entities in titles
function decodeHtml(html) {
  const txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
}

// Clean title by removing "YouTube", extra symbols, channel names if present
function cleanTitle(title) {
  let decoded = decodeHtml(title);
  
  // Remove "YouTube" word (case insensitive)
  decoded = decoded.replace(/youtube/gi, "");

  // Remove common unwanted symbols
  decoded = decoded.replace(/[|*&;]/g, "");

  // Optional: remove phrases like "Code With Swaroop", "Vamsi Bhavani", etc. if you want
  decoded = decoded.replace(/Code With Swaroop/gi, "");
  decoded = decoded.replace(/Vamsi Bhavani/gi, "");

  return decoded.trim();
}

const videosData = [
  {
    src: "https://www.youtube.com/embed/lGKGDxwvrEQ",
    title: "HTML Full Course",
  },
  {
    src: "https://www.youtube.com/embed/Oi9QvyK8zvk",
    title: "CSS Full Course",
  },
  {
    src: "https://www.youtube.com/embed/S-ri_In6qcA",
    title: "Bootstrap Full Course",
  },
  {
    src: "https://www.youtube.com/embed/fHKPQEVCX-s",
    title: "Python Full Course",
  },
  {
    src: "https://www.youtube.com/embed/6DP7cMN99zQ",
    title: "React Full Course",
  },
  {
    src: "https://www.youtube.com/embed/pdPRdhify1Q",
    title: "C Language",
  },
  {
    src: "https://www.youtube.com/embed/KKRzUB7mWUs",
    title: "C++ Language",
  },
  {
    src: "https://www.youtube.com/embed/aMaayeDW360",
    title: "Java Full Course",
  },
  {
    src: "https://www.youtube.com/embed/qkslbeTH_pw",
    title: "C# Full Course",
  },
  {
    src: "https://www.youtube.com/embed/LGLuHYHbCFA",
    title: "About Github",
  },
  {
    src: "https://www.youtube.com/embed/gm5XZ-HhaYA",
    title: "Angular Full Course",
  },
  {
    src: "https://www.youtube.com/embed/9qEMbbNGAGI",
    title: "Javascript Course",
  },
  {
    src: "https://www.youtube.com/embed/ZQuQ-wHuPlg",
    title: "MongoDb full Course",
  },
];

const Videos = () => {
  return (
    <div className="container my-4">
      <div className="row g-4">
        {videosData.map((video, idx) => (
          <div key={idx} className="col-md-6 col-lg-4">
            <div className="card h-100">
              <iframe
                width="100%"
                height="215"
                src={video.src}
                title={cleanTitle(video.title)}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
              <div className="card-body">
                <h5 className="card-title">{cleanTitle(video.title)}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Videos;
