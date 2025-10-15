import React from 'react';
import { ArrowLeft, MessageSquare, Trophy, Send } from 'lucide-react';

/**
 * Top navigation bar for the community dashboard view.
 * Simulates navigation actions (setPage) for full application integration.
 */
export default function CommunityHeader({ setPage }) {
  return (
    <div className="flex justify-between items-center py-4 px-8 border-b border-gray-200 bg-white shadow-sm">
      
      {/* Left Section: Back to Home */}
      <button 
        onClick={() => setPage('Home')} // Simulate navigation back to the main landing page
        className="flex items-center text-gray-600 hover:text-blue-600 font-medium transition duration-150"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back to Home
      </button>

      {/* Center Section: Logo */}
      <div className="flex items-center text-blue-600 font-bold text-lg">
        <MessageSquare className="w-6 h-6 mr-1" />
        VoiceLink
      </div>

      {/* Right Section: Actions */}
      <div className="flex items-center space-x-4">
        <button className="flex items-center text-gray-600 hover:text-blue-600 font-medium transition duration-150">
          <Trophy className="w-5 h-5 mr-1" />
          Achievements
        </button>
        <button 
          onClick={() => setPage('SubmitFeedback')} // Simulate navigation to the feedback form
          className="flex items-center px-4 py-2 bg-blue-600 text-white font-semibold rounded-xl shadow-md hover:bg-blue-700 transition duration-150"
        >
          <Send className="w-5 h-5 mr-2" />
          Submit Feedback
        </button>
      </div>
    </div>
  );
}
