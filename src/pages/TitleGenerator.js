import React, { useState } from 'react';
import axios from 'axios';

const TitleGenerator = () => {
  const [keywords, setKeywords] = useState('');
  const [titles, setTitles] = useState([]);

  const handleGenerate = async () => {
    const response = await axios.post('http://localhost:8000/api/generate-title/', {
      keywords,
    });
    setTitles(response.data.titles);
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Generate Thesis Titles</h2>
      <input
        type="text"
        value={keywords}
        onChange={(e) => setKeywords(e.target.value)}
        placeholder="Enter keywords"
        className="border p-2 mr-2"
      />
      <button onClick={handleGenerate} className="bg-blue-500 text-white px-4 py-2">Generate</button>

      <ul className="mt-4 list-disc pl-6">
        {titles.map((title, index) => (
          <li key={index}>{title}</li>
        ))}
      </ul>
    </div>
  );
};

export default TitleGenerator;
