import React, { useState } from 'react';
import { Search, ChevronLeft, Mail, Send } from 'lucide-react';



const MockHeader = ({ onNavigate }) => (
    <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-white shadow-sm ">
        <button
            onClick={() => onNavigate('/')}
            className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
        >
            <ChevronLeft size={20} className="mr-1" />
            <span className="text-sm font-medium max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">Back to Home</span>
        </button>
        
    </div>
);

const TrackFeed = () => {
    const [feedbackId, setFeedbackId] = useState('');
    const [status, setStatus] = useState(null); // 'loading', 'found', 'not_found'

    const handleSearch = () => {
        if (!feedbackId) return;

        setStatus('loading');
        // --- Mock Search Logic (Replace with actual Firestore query) ---
        setTimeout(() => {
            if (feedbackId === 'FB001' || feedbackId === 'FB002' || feedbackId === 'FB003') {
                setStatus('found');
                // In a real app, fetch and set detailed feedback data here
            } else {
                setStatus('not_found');
            }
        }, 800);
        // -----------------------------------------------------------------
    };

    const handleExampleClick = (id) => {
        setFeedbackId(id);
        setStatus(null); // Reset status when choosing a new ID
        // Optionally auto-search here: handleSearch();
    };

    // Mock navigation handler for buttons
    const handleNavigate = (page) => {
        console.log(`Navigating to ${page}...`);
        // In a real app, this would change the state in App.jsx
    };

    const renderTrackingResult = () => {
        if (status === 'loading') {
            return (
                <div className="text-center p-8 text-blue-600">
                    Searching for Feedback ID: {feedbackId}...
                </div>
            );
        }
        if (status === 'not_found') {
            return (
                <div className="text-center p-8 text-red-600 bg-red-50 rounded-xl mt-6">
                    <p className="font-semibold">Feedback ID "{feedbackId}" not found.</p>
                    <p className="text-sm text-red-500">Please check the ID and try again, or use the "Lost Your Feedback ID?" option below.</p>
                </div>
            );
        }
        if (status === 'found') {
            return (
                <div className="bg-green-50 p-6 rounded-xl mt-6 border-l-4 border-green-500 shadow-inner">
                    <h3 className="text-xl font-semibold text-green-700">Tracking Status: Resolved</h3>
                    <p className="text-sm text-green-600 mt-1">Feedback ID: <span className="font-mono bg-green-200 px-1 rounded">FB001</span> (Campus Wi-Fi issues)</p>
                    <div className="mt-4 flex flex-col md:flex-row justify-between text-sm text-gray-600">
                        <p><strong>Submitted:</strong> 1/15/2024</p>
                        <p><strong>Last Update:</strong> 1/18/2024</p>
                        <p><strong>Department:</strong> IT Services</p>
                    </div>
                    {/* Simplified Timeline */}
                    <div className="mt-4 pt- border-t border-green-200">
                        <p className="font-medium text-green-700">Timeline:</p>
                        <ul className="list-disc list-inside text-sm text-green-600">
                            <li>1/15/2024: Received and assigned to John Tech.</li>
                            <li>1/16/2024: Investigation started.</li>
                            <li>1/18/2024: Issue resolved and closed.</li>
                        </ul>
                    </div>
                </div>
            );
        }
        return null;
    };

    return (
        <div className="min-h-screen bg-gray-100 pb-10">
            <MockHeader onNavigate={handleNavigate} />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
                <div className="py-10">
                    <h1 className="text-3xl font-bold text-gray-800">Track Your Feedback</h1>
                    <p className="mt-2 text-gray-600">
                        Enter your feedback ID to check the current status and progress of your submission.
                    </p>
                </div>

                {/* Tracking Result Area */}
                {renderTrackingResult()}

                {/* 1. Find Your Feedback Card */}
                <div className="bg-white p-6 rounded-xl shadow-lg mb-6 ">
                    <h2 className="text-xl font-semibold text-gray-800">Find Your Feedback</h2>
                    <p className="mt-1 text-gray-600">
                        Use the feedback ID that was provided when you submitted your feedback.
                    </p>
                    <div className="mt-4 flex">
                        <input
                            type="text"
                            value={feedbackId}
                            onChange={(e) => setFeedbackId(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                            placeholder="Enter feedback ID (e.g., FB001)"
                            className="flex-grow p-3 border border-gray-300 rounded-l-lg focus:ring-blue-500 focus:border-blue-500 text-gray-800"
                        />
                        <button
                            onClick={handleSearch}
                            className="bg-blue-600 text-white p-3 rounded-r-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
                            disabled={!feedbackId || status === 'loading'}
                        >
                            <Search size={20} />
                            <span className="hidden sm:inline">Search</span>
                        </button>
                    </div>
                </div>

                {/* 2. Try Example IDs Card */}
                <div className="bg-white p-6 rounded-xl shadow-lg mb-6">
                    <h2 className="text-xl font-semibold text-gray-800">Try These Example IDs</h2>
                    <p className="mt-1 text-gray-600">
                        Click on any of these IDs to see how tracking works.
                    </p>
                    <div className="mt-4 flex gap-3">
                        {['FB001', 'FB002', 'FB003'].map(id => (
                            <button
                                key={id}
                                onClick={() => handleExampleClick(id)}
                                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-mono text-sm shadow-sm"
                            >
                                {id}
                            </button>
                        ))}
                    </div>
                </div>

                {/* 3. Need Help? Card */}
                <div className="bg-white p-6 rounded-xl shadow-lg">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Need Help?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Lost ID Section */}
                        <div>
                            <div className="flex items-center text-lg font-medium text-gray-900 mb-2">
                                <Mail size={20} className="mr-2 text-blue-500" />
                                Lost Your Feedback ID?
                            </div>
                            <p className="text-gray-600 mb-4 text-sm">
                                If you submitted feedback with your email, you can check your email for the confirmation message containing your ID.
                            </p>
                            <button
                                onClick={() => handleNavigate('support')}
                                className="flex items-center px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors text-sm"
                            >
                                Contact Support
                            </button>
                        </div>

                        {/* Submit New Feedback Section */}
                        <div>
                            <div className="flex items-center text-lg font-medium text-gray-900 mb-2">
                                <Send size={20} className="mr-2 text-blue-500" />
                                Submit New Feedback
                            </div>
                            <p className="text-gray-600 mb-4 text-sm">
                                Have a new issue or suggestion? Submit additional feedback to help us improve.
                            </p>
                            <button
                                onClick={() => handleNavigate('submit')}
                                className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
                            >
                                Submit Feedback
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrackFeed;
