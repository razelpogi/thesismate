import React, { useState } from 'react';
import axios from 'axios';

function TitleGenerator() {
  const [keywords, setKeywords] = useState('');
  const [titles, setTitles] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/generate-title/', { keywords });
      setTitles(res.data.titles);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Generate Thesis Titles</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          value={keywords}
          onChange={(e) => setKeywords(e.target.value)}
          placeholder="Enter keywords"
          className="border p-2 rounded"
        />
        <button type="submit" className="ml-2 p-2 bg-blue-500 text-white rounded">Generate</button>
      </form>
      <ul>
        {titles.map((title, index) => (
          <li key={index} className="mb-1">📌 {title}</li>
        ))}
      </ul>
    </div>
  );
}

export default TitleGenerator;
