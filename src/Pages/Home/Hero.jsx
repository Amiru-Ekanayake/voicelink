import React from 'react';
import { useNavigate } from "react-router-dom";


export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className="py-20 md:py-32 text-center bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <p className="text-sm font-semibold text-gray-500 tracking-wider uppercase mb-4">
          Connecting Communities Through Feedback
        </p>
      
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
          Transform Feedback into <br />
          <span className="text-blue-500">Actionable Insights</span>
        </h1>
        
        <p className="text-lg text-gray-600 mb-10  mx-auto">
          VoiceLink bridges the communication gap between organizations and their communities with intelligent, centralized feedback management powered by AI and real-time tracking.
        </p>

        <div className="flex justify-center space-x-4">
          <button onClick={() => navigate("/feedback")}
          className="flex items-center px-6 py-3 bg-blue-500 text-white font-medium rounded-xl hover:bg-blue-700 transition duration-200 shadow-lg shadow-blue-500/50 transform hover:scale-[1.02]">
            Submit Feedback
            <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
          <button className="px-6 py-3 bg-white border border-gray-300 text-gray-800 font-medium rounded-xl hover:bg-gray-50 transition duration-200 shadow-md transform hover:scale-[1.02]">
            Explore Dashboard
          </button>
        </div>
      </div>
    </section>
  );
}
