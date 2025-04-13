import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import TitleGenerator from './pages/TitleGenerator';
import ChapterBuilder from './pages/ChapterBuilder';
import LiteratureTracker from './pages/LiteratureTracker';
import GanttPlanner from './pages/GanttPlanner';
import Login from './pages/Login';
import Register from './pages/Register';
import Sidebar from './pages/Sidebar';

function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-100 text-gray-800">
        {/* Sidebar */}
        <Sidebar />

        {/* Main content */}
        <main className="flex-1 p-6 overflow-y-auto bg-white bg-opacity-90 rounded-lg m-4 shadow-lg">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/generate-title" element={<TitleGenerator />} />
            <Route path="/chapters" element={<ChapterBuilder />} />
            <Route path="/literature" element={<LiteratureTracker />} />
            <Route path="/planner" element={<GanttPlanner />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
