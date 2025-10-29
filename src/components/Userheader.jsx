// src/components/Header.jsx

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; 
import { Link } from "react-router-dom";


export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItemClass = "text-gray-600 hover:text-blue-600 px-3 py-2 rounded-lg transition duration-150";

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* 🔑 Updated Logo/Title to link to Home */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="VoiceLink.png"   
              alt="VoiceLink Logo"
              className="h-10 w-auto object-contain"
            />
            <span className="text-xl font-bold text-gray-800">VoiceLink</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-2 xl:space-x-4 items-center">
            <Link to="/feedback" className={navItemClass}>Submit Feedback</Link>
            <Link to="/track-feedback" className={navItemClass}>Track Feedbacks</Link>
            <Link to="/user-dashboard" className={navItemClass}>User Portal</Link>
            <Link to="/admin-dashboard" className={navItemClass}>Admin Portal</Link>
            {/* The existing Login button is wrapped in a Link, which is fine */}
            <Link to="/login" className={navItemClass}>
            <button className="ml-4 px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition duration-150 shadow-md">
              Login
            </button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="lg:hidden px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
          <Link to="/feedback" className={`${navItemClass} block`}>Submit Feedback</Link>
          <Link to="/track-feedback" className={`${navItemClass} block`}>Track Feedbacks</Link>
          <Link to="/login" className={`${navItemClass} block`}>Logout</Link>
          <Link to="/user-dashboard" className={`${navItemClass} block`}>User Portal</Link>
          <button className="w-full text-left mt-2 px-3 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition duration-150 shadow-md">
            Admin Portal
          </button>
        </div>
      )}
    </header>
  );
}