import React, { useEffect, useState } from 'react';
import CodeEditor from './CodeEditor';
import './styles.css';
import SavedSnippets from './SavedSnippets';

const Editor = () => {
  const [language, setLanguage] = useState('html');
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');
  const [snippets, setSnippets] = useState([]);
  const [showSavedSnippets, setShowSavedSnippets] = useState(false);
  const [showSaveSuccess, setShowSaveSuccess] = useState(false);
  const [storageError, setStorageError] = useState(null);

  const languageTemplates = {
    html: `<!DOCTYPE html>
<html>
<head>
  <title>HTML Template</title>
</head>
<body>
  <!-- Your HTML code here -->
</body>
</html>`,
    css: `/* Your CSS code here */
body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
}`,
    javascript: `// Your JavaScript code here
console.log("Hello, World!");`,
    python: `# Your Python 3.10 code here
print("Hello, World!")`,
    python38: `# Your Python 3.8 (ML) code here
import numpy as np
print(np.__version__)`,
    python39: `# Your Python 3.9 code here
def greet(name):
    return f"Hello, {name}!"
    
print(greet("World"))`,
    c: `// Your C code here
#include <stdio.h>

int main() {
    printf("Hello, World!");
    return 0;
}`,
    cpp: `// Your C++14 code here
#include <iostream>

int main() {
    std::cout << "Hello, World!" << std::endl;
    return 0;
}`,
    java: `// Your Java 11 code here
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
  };

  const languages = [
    { value: 'html', label: 'HTML' },
    { value: 'css', label: 'CSS' },
    { value: 'javascript', label: 'JavaScript' },
    { value: 'python', label: 'Python 3.10' },
    { value: 'python38', label: 'Python 3.8 (ML)' },
    { value: 'python39', label: 'Python 3.9' },
    { value: 'c', label: 'C (gcc 8.3.0)' },
    { value: 'cpp', label: 'C++14 (g++ 8.3.0)' },
    { value: 'java', label: 'Java 11' }
  ];

  const getFileExtension = () => {
    const extensions = {
      html: '.html',
      css: '.css',
      javascript: '.js',
      python: '.py',
      python38: '.py',
      python39: '.py',
      c: '.c',
      cpp: '.cpp',
      java: '.java'
    };
    return extensions[language] || '.txt';
  };

  // Check if storage is available
  const isStorageAvailable = () => {
    try {
      const testKey = 'test';
      localStorage.setItem(testKey, testKey);
      localStorage.removeItem(testKey);
      return true;
    } catch (e) {
      return false;
    }
  };

  // Check if storage is full
  const isStorageFull = () => {
    try {
      localStorage.setItem('test', 'x');
      localStorage.removeItem('test');
      return false;
    } catch (e) {
      return e.code === DOMException.QUOTA_EXCEEDED_ERR;
    }
  };

  // Load snippets on mount
  useEffect(() => {
    if (!isStorageAvailable()) {
      setStorageError('LocalStorage is not available in this browser');
      return;
    }

    const savedSnippets = localStorage.getItem('codeSnippets');
    if (savedSnippets) {
      try {
        const parsedSnippets = JSON.parse(savedSnippets);
        if (Array.isArray(parsedSnippets)) {
          setSnippets(parsedSnippets);
        }
      } catch (err) {
        console.error('Error parsing saved snippets:', err);
        setStorageError('Failed to load saved snippets');
        localStorage.removeItem('codeSnippets');
      }
    }
  }, []);

  // Save snippets when they change
  useEffect(() => {
    if (!isStorageAvailable()) return;

    try {
      localStorage.setItem('codeSnippets', JSON.stringify(snippets));
    } catch (err) {
      console.error('Failed to save snippets:', err);
      setStorageError('Failed to save snippets - storage might be full');
    }
  }, [snippets]);

  // Load code for selected language
  useEffect(() => {
    const storedCode = localStorage.getItem(`editorCode-${language}`);
    if (storedCode !== null && storedCode.trim() !== '') {
      setCode(storedCode);
    } else {
      const defaultTemplate = languageTemplates[language] || '';
      setCode(defaultTemplate);
    }
    setOutput('');
  }, [language]);

  // Save code when it changes
  useEffect(() => {
    if (code && isStorageAvailable()) {
      try {
        localStorage.setItem(`editorCode-${language}`, code);
      } catch (err) {
        console.error('Failed to save code:', err);
      }
    }
  }, [code, language]);

  const saveSnippet = () => {
    if (!isStorageAvailable()) {
      alert('Cannot save snippets - localStorage not available');
      return;
    }

    if (isStorageFull()) {
      alert('Cannot save snippet - storage is full');
      return;
    }

    const filename = prompt('Enter file name:');
    if (!filename) return;

    const extension = getFileExtension();
    const fullFilename = filename.endsWith(extension) ? filename : `${filename}${extension}`;

    const newSnippet = {
      id: Date.now(),
      filename: fullFilename,
      language,
      code,
      createdAt: new Date().toISOString()
    };

    try {
      const updatedSnippets = [...snippets, newSnippet];
      setSnippets(updatedSnippets);
      setShowSaveSuccess(true);
      setTimeout(() => setShowSaveSuccess(false), 3000);
    } catch (err) {
      console.error('Failed to save snippet:', err);
      alert('Failed to save snippet. Please try again.');
    }
  };

  const exportSnippets = () => {
    const dataStr = JSON.stringify(snippets, null, 2);
    const dataUri = `data:application/json;charset=utf-8,${encodeURIComponent(dataStr)}`;
    
    const exportFileDefaultName = 'code-snippets-backup.json';
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  const importSnippets = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const importedSnippets = JSON.parse(e.target.result);
        if (Array.isArray(importedSnippets)) {
          setSnippets(importedSnippets);
          alert(`Successfully imported ${importedSnippets.length} snippets`);
        } else {
          alert('Invalid file format - expected an array of snippets');
        }
      } catch (err) {
        console.error('Error importing snippets:', err);
        alert('Failed to import snippets - invalid file format');
      }
    };
    reader.readAsText(file);
  };

  const loadSnippet = (snippet) => {
    setLanguage(snippet.language);
    setCode(snippet.code);
    setOutput('');
    setShowSavedSnippets(false);
  };

  const runCode = () => {
    try {
      if (language === 'html') {
        const iframe = document.createElement('iframe');
        iframe.srcdoc = code;
        iframe.style.width = '100%';
        iframe.style.height = '300px';
        iframe.sandbox = 'allow-scripts';
        const outputDiv = document.querySelector('.output-content');
        if (outputDiv) {
          outputDiv.innerHTML = '';
          outputDiv.appendChild(iframe);
        }
      } else if (language === 'javascript') {
        const safeEval = (code) => {
          try {
            return new Function(code)();
          } catch (err) {
            return `Error: ${err.message}`;
          }
        };
        const result = safeEval(code);
        setOutput(typeof result === 'object' ? JSON.stringify(result, null, 2) : String(result));
      } else {
        setOutput('Code execution not implemented for this language yet');
      }
    } catch (error) {
      setOutput(`Error: ${error.message}`);
    }
  };

  const resetCode = () => {
    setCode('');
    setOutput('');
    localStorage.removeItem(`editorCode-${language}`);
  };

  const deleteSnippet = (id) => {
    if (window.confirm('Are you sure you want to delete this snippet?')) {
      const updatedSnippets = snippets.filter(snippet => snippet.id !== id);
      setSnippets(updatedSnippets);
    }
  };

  return (
    <div className="editor-container">
      <div className="header-actions">
        <button
          className="toggle-snippets-btn btn-outline-primary"
          onClick={() => setShowSavedSnippets(!showSavedSnippets)}
        >
          {showSavedSnippets ? 'Hide Snippets' : 'Show Saved Snippets'}
        </button>

      </div>

      {storageError && (
        <div className="error-message">
          {storageError}
        </div>
      )}

      {showSavedSnippets ? (
        <SavedSnippets
          snippets={snippets}
          loadSnippet={loadSnippet}
          deleteSnippet={deleteSnippet}
        />
      ) : (
        <>
          <div className="language-selector">
            <select value={language} onChange={(e) => setLanguage(e.target.value)} className="lng-selection">
              {languages.map((lang) => (
                <option key={lang.value} value={lang.value}>
                  {lang.label}
                </option>
              ))}
            </select>
            <button className="save-btn btn-outline-success" onClick={saveSnippet}>
              Save Snippet
            </button>
          </div>

          <div className="editor-wrapper">
            <CodeEditor language={language} code={code} onChange={setCode} />
          </div>

          <div className="output-container">
            <div className="output-header">
              <span>Output</span>
            </div>
            <div
              className="output-content"
              dangerouslySetInnerHTML={{ __html: output || 'Output will appear here' }}
            />
          </div>

          <div className="action-buttons">
            <button onClick={resetCode}>Reset Code</button>
            <button onClick={runCode}>Run Code</button>
          </div>

          {showSaveSuccess && (
            <div className="success-message">
              Your code snippet was saved successfully!
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Editor;