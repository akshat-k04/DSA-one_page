// src/components/MarkdownRenderer.js
import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import '../index.css'; // Import the stylesheet

const MarkdownRenderer = ({ fileName }) => {
    const [content, setContent] = useState('');

    useEffect(() => {
        import(`../markdown/${fileName}.md`)
            .then(res => fetch(res.default))
            .then(res => res.text())
            .then(text => setContent(text))
            .catch(err => console.error(err));
    }, [fileName]);

    return (
        <div className="markdown-content">
            <ReactMarkdown>{content}</ReactMarkdown>
        </div>
    );
};

export default MarkdownRenderer;
