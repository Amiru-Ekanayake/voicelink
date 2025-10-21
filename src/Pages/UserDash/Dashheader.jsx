import React from 'react';
import { ArrowLeft, MessageSquare, Trophy, Send } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function CommunityHeader() {
  const navigate = useNavigate();

  return (
    <header className="w-full border-b border-gray-200 bg-white shadow-sm">
      <div className="flex flex-wrap justify-between items-center py-3 px-4 sm:px-6 md:px-8 lg:px-12 gap-3">
        
        <button
          onClick={() => navigate('/')}
          className="flex items-center text-gray-600 hover:text-blue-600 font-medium transition duration-150 text-sm sm:text-base"
        >
          <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
          Back to Home
        </button>

        <div className="flex items-center space-x-2 sm:space-x-4">
          <button 
            onClick={() => navigate('/achievements')}
            className="flex items-center text-gray-600 hover:text-blue-600 font-medium transition duration-150 text-sm sm:text-base"
          >
            <Trophy className="w-4 h-4 sm:w-5 sm:h-5 mr-1" />
            Achievements
          </button>

          <button
            onClick={() => navigate('/feedback')}
            className="flex items-center px-3 sm:px-4 py-2 bg-blue-600 text-white font-semibold rounded-xl shadow-md hover:bg-blue-700 transition duration-150 text-sm sm:text-base"
          >
            <Send className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
            Submit Feedback
          </button>
        </div>
      </div>
    </header>
  );
}