import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center text-center px-4 py-20 bg-gradient-to-br from-white to-blue-50 min-h-screen">
      <h1 className="text-5xl md:text-6xl font-extrabold text-blue-800 mb-6 drop-shadow-sm">
        Welcome to <span className="text-purple-600">ThesisMate</span>
      </h1>
      <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-10">
        Your all-in-one research assistant designed for students. Simplify your thesis journey with tools for title generation, chapter building, literature tracking, and planning.
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        <Link
          to="/generate-title"
          className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-700 transition"
        >
          Generate Title
        </Link>
        <Link
          to="/chapters"
          className="px-6 py-3 bg-purple-600 text-white rounded-xl shadow-md hover:bg-purple-700 transition"
        >
          Build Chapters
        </Link>
        <Link
          to="/literature"
          className="px-6 py-3 bg-green-600 text-white rounded-xl shadow-md hover:bg-green-700 transition"
        >
          Literature Tracker
        </Link>
        <Link
          to="/planner"
          className="px-6 py-3 bg-yellow-500 text-white rounded-xl shadow-md hover:bg-yellow-600 transition"
        >
          Plan Timeline
        </Link>
      </div>
    </div>
  );
}
