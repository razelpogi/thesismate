// frontend/src/pages/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="w-64 bg-gray-800 text-white h-full">
      <div className="p-4">
        <h1 className="text-2xl font-bold">ThesisMate</h1>
      </div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/generate-title">Title Generator</Link></li>
        <li><Link to="/chapters">Chapter Builder</Link></li>
        <li><Link to="/literature">Literature Tracker</Link></li>
        <li><Link to="/planner">Gantt Planner</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;
