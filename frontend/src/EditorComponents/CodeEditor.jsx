import React, { useEffect, useRef } from 'react'

const CodeEditor = ({ language, code, onChange }) => {
  const editorRef = useRef(null)
  
  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.focus()
    }
  }, [language])

  return (
    <textarea
      ref={editorRef}
      value={code}
      onChange={(e) => onChange(e.target.value)}
      className="code-editor"
      spellCheck="false"
    />
  )
}

export default CodeEditor