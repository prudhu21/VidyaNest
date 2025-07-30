import React, { useState } from 'react';

const SavedSnippets = ({ snippets = [], loadSnippet, deleteSnippet }) => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredSnippets = snippets.filter(snippet =>
    snippet.filename.toLowerCase().includes(searchTerm.toLowerCase()) ||
    snippet.language.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleLoadSnippet = (snippet) => {
    loadSnippet(snippet);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <div className="saved-snippets">
      <h3>Saved Snippets</h3>
      
      <div className="snippet-search">
        <input
          type="text"
          placeholder="Search snippets..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {showSuccess && (
        <div className="success-message">
          Snippet loaded successfully!
        </div>
      )}

      {snippets.length === 0 ? (
        <p>No snippets saved yet</p>
      ) : filteredSnippets.length === 0 ? (
        <p>No snippets match your search</p>
      ) : (
        <ul>
          {filteredSnippets.map((snippet) => (
            <li key={snippet.id}>
              <div className="snippet-info" onClick={() => handleLoadSnippet(snippet)}>
                <div className="snippet-filename">{snippet.filename}</div>
                <div className="snippet-meta">
                  <span className="snippet-language">{snippet.language}</span>
                  <span className="snippet-date">
                    {new Date(snippet.createdAt).toLocaleString()}
                  </span>
                </div>
              </div>
              <button 
                className="delete-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  deleteSnippet(snippet.id);
                }}
              >
                ❌
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SavedSnippets;