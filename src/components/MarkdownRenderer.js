// src/components/MarkdownRenderer.js
import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import '../index.css';

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
            <ReactMarkdown
                components={{
                    code({ node, inline, className, children, ...props }) {
                        const match = /language-(\w+)/.exec(className || '');
                        return !inline && match ? (
                            <SyntaxHighlighter
                                style={vscDarkPlus}
                                language={match[1]}
                                PreTag="div"
                                {...props}
                            >
                                {String(children).replace(/\n$/, '')}
                            </SyntaxHighlighter>
                        ) : (
                            <code className={className} {...props}>
                                {children}
                            </code>
                        );
                    },
                }}
            >
                {content}
            </ReactMarkdown>
        </div>
    );
};

export default MarkdownRenderer;
