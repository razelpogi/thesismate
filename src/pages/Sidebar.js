import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BookOpen, Home, FileText, Calendar, LogIn, UserPlus, Lightbulb } from 'lucide-react';

function Sidebar() {
  const location = useLocation();

  const navItems = [
    { name: 'Home', to: '/', icon: <Home size={18} /> },
    { name: 'Generate Title', to: '/generate-title', icon: <Lightbulb size={18} /> },
    { name: 'Chapters', to: '/chapters', icon: <FileText size={18} /> },
    { name: 'Literature Tracker', to: '/literature', icon: <BookOpen size={18} /> },
    { name: 'Planner', to: '/planner', icon: <Calendar size={18} /> },
    { name: 'Login', to: '/login', icon: <LogIn size={18} /> },
    { name: 'Register', to: '/register', icon: <UserPlus size={18} /> },
  ];

  return (
    <aside className="w-64 h-screen bg-white border-r shadow-sm fixed top-0 left-0 px-6 py-8">
      <h1 className="text-2xl font-bold text-blue-700 mb-10 tracking-wide">ThesisMate</h1>
      <nav className="space-y-3">
        {navItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className={`flex items-center space-x-3 px-3 py-2 rounded-md transition-all 
              ${location.pathname === item.to 
                ? 'bg-blue-100 text-blue-700 font-medium' 
                : 'text-gray-700 hover:bg-gray-100 hover:text-blue-600'}
            `}
          >
            <span>{item.icon}</span>
            <span>{item.name}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
