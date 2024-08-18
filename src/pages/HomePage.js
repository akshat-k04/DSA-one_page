// src/pages/HomePage.js
import React, { useState } from 'react';
import MarkdownRenderer from '../components/MarkdownRenderer';

const HomePage = () => {
    const topics = [
        // { name: 'Arrays', file: 'arrays' },
        // { name: 'Linked Lists', file: 'linked-lists' },
        // { name: 'Trees', file: 'trees' },
        { name: 'Graph', file: 'graph'},
        {name: 'DSU', file:'DSU'},
        {name:'trie', file:'trie'},
        { name: 'segment tree', file: 'segment_tree' },
        { name: 'tree', file: 'tree' },
        { name: 'unsolved questions', file: 'unsolved_questions' }
        // Add more topics as needed
    ];

    const [selectedTopic, setSelectedTopic] = useState(null);

    return (
        <div>
            <h1>DSA Topics</h1>
            <ul>
                {topics.map(topic => (
                    <li key={topic.file} onClick={() => setSelectedTopic(topic.file)}>
                        {topic.name}
                    </li>
                ))}
            </ul>

            {selectedTopic && <MarkdownRenderer fileName={selectedTopic} />}
        </div>
    );
};

export default HomePage;
