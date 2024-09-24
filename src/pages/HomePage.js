// src/pages/HomePage.js
import React, { useState } from 'react';
import MarkdownRenderer from '../components/MarkdownRenderer';
import '../index.css'; // Import the stylesheet

const HomePage = () => {
  const topics = [
      { name: '1. Array and String', file:'array_string'},
      { name: '2. Linked List', file: 'linked_list'},
      { name: '3. recursion and Backtracking', file:'recusion'},
      { name: '4. binary search(sorting algos)', file:'binary_search'},
      { name: '5. Maths', file:'maths'},
      { name: '6. STL Implementation', file: 'stl' },
      { name: '7. tree', file: 'tree' },
      { name: '8. segment tree', file: 'segment_tree' },
      { name: '9. DP', file:'dp'},
      { name: '10. heap', file:'heap'},
      { name: '11. stack and queue', file:'stack_queue'},
      { name: '12. trie', file: 'trie' },
      { name: '13. DSU', file: 'DSU' },
      { name: '14. Graph', file: 'graph' },
      { name: '15 Greedy Algorithms', file:'greedy'},
      { name: '16 misc', file: 'Miscellaneous' },
      { name: '17. unsolved questions', file: 'unsolved_questions' }
    // Add more topics as needed
  ];

  const [selectedTopic, setSelectedTopic] = useState(null);

  return (
    <div>
      <h1>Placement Revision</h1>
      {/* all set now start completing DSA */}
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
