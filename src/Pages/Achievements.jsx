import React, { useState } from 'react';
import { ChevronLeft, Award, Zap, CheckCircle, User, Activity, Send } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Mock Header component (consistent with TrackFeed.jsx)
const AchievementsHeader = ({ onNavigate }) => (
    <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-white shadow-sm">
        <button
            onClick={() => onNavigate('/user-dashboard')}
            className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
        >
            <ChevronLeft size={20} className="mr-1" />
            <span className="text-sm font-medium">Back</span>
        </button>
        <div className="flex items-center text-blue-600 font-bold text-lg">
            <Award size={20} className="mr-2" />
            Your Achievements
        </div>
        <button
            onClick={() => onNavigate('/feedback')}
            className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
        >
            New Feedback
        </button>
    </div>
);

// Stat Card Component
const StatCard = ({ title, value, icon: Icon, colorClass }) => (
    <div className="bg-white p-5 rounded-xl shadow-md border border-gray-100 flex flex-col items-center text-center transition-shadow hover:shadow-lg">
        <div className={`p-3 rounded-full ${colorClass} bg-opacity-10 mb-2`}>
            <Icon size={24} className={colorClass} />
        </div>
        <p className={`text-3xl font-bold ${colorClass}`}>{value}</p>
        <p className="text-sm text-gray-500 mt-1">{title}</p>
    </div>
);

// Mock Badge Data (for demonstration)
const mockBadges = [
    { id: 1, name: "First Submission", description: "Submitted your first piece of feedback.", icon: Award, color: "text-yellow-600" },
    { id: 2, name: "Early Adopter", description: "Submitted feedback within the first week of launch.", icon: CheckCircle, color: "text-green-600" },
    // { id: 3, name: "The Catalyst", description: "A piece of your feedback led to a major system change.", icon: Zap, color: "text-purple-600" },
];


const AchievementsPage = () => {
    const [activeTab, setActiveTab] = useState('Badges');

    const userStats = {
        level: 1,
        impactPoints: 20,
        submissions: 10,
        resolved: 3,
        badgesEarned: mockBadges.length,
        pointsToNextLevel: 50,
    };

    const navigate = useNavigate();
    const handleNavigate = (page) => {
        navigate(page);
    };

    const renderTabContent = () => {
        if (activeTab === 'Badges') {
            return (
                <div className="bg-white p-6 rounded-xl shadow-lg mt-4">
                    <div className="flex items-center text-xl font-semibold text-gray-800 mb-4">
                        <Award size={22} className="mr-2 text-blue-600" />
                        Your Badges
                    </div>
                    <p className="text-gray-600 mb-6">
                        Achievements you've unlocked through your contributions.
                    </p>

                    {userStats.badgesEarned > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {mockBadges.map(badge => (
                                <div key={badge.id} className="p-4 bg-gray-50 rounded-lg border border-gray-200 flex items-start">
                                    <div className={`p-3 rounded-full ${badge.color} bg-opacity-10 mr-4`}>
                                        <badge.icon size={24} className={badge.color} />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-800">{badge.name}</h4>
                                        <p className="text-sm text-gray-500 mt-0.5">{badge.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-12 border-2 border-dashed border-gray-200 rounded-xl">
                            <Award size={48} className="text-gray-300 mx-auto" />
                            <p className="mt-4 text-gray-500">No badges yet</p>
                            <p className="text-sm text-gray-400">Start submitting feedback to earn your first badge!</p>
                            <button
                                onClick={() => handleNavigate('/feedback')} // changed to real route
                                className="mt-6 flex items-center mx-auto px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium shadow-md"
                            >
                                <Send size={16} className="mr-2" />
                                Submit Feedback
                            </button>
                        </div>
                    )}
                </div>
            );
        } else if (activeTab === 'Progress') {
            return (
                <div className="bg-white p-6 rounded-xl shadow-lg mt-4">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Level Progress Details</h3>
                    <p className="text-gray-600 mb-6">Detailed view of your journey to the next level.</p>
                    <div className="space-y-4">
                        <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                            <h4 className="font-medium text-blue-700">Submissions Goal</h4>
                            <p className="text-sm text-blue-600">Submit 20 pieces of feedback to unlock Level 2.</p>
                            <div className="mt-2 h-2 bg-blue-200 rounded-full">
                                <div
                                    className="h-full bg-blue-500 rounded-full"
                                    style={{ width: `${Math.min(100, (userStats.submissions / 20) * 100)}%` }}
                                ></div>
                            </div>
                            <p className="text-xs text-blue-500 mt-1">{userStats.submissions} / 20 Submissions</p>
                        </div>
                        <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                            <h4 className="font-medium text-purple-700">Impact Point Goal</h4>
                            <p className="text-sm text-purple-600">Reach 100 Impact Points to unlock Level 2.</p>
                            <div className="mt-2 h-2 bg-purple-200 rounded-full">
                                <div
                                    className="h-full bg-purple-500 rounded-full"
                                    style={{ width: `${Math.min(100, (userStats.impactPoints / 100) * 100)}%` }}
                                ></div>
                            </div>
                            <p className="text-xs text-purple-500 mt-1">{userStats.impactPoints} / 100 Impact Points</p>
                        </div>
                    </div>
                </div>
            );
        } else if (activeTab === 'Impact') {
            return (
                <div className="bg-white p-6 rounded-xl shadow-lg mt-4">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Community Impact</h3>
                    <p className="text-gray-600 mb-6">See how your feedback has positively influenced the community.</p>
                    <ul className="space-y-4">
                        <li className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                            <h4 className="font-semibold text-green-700">Resolved Issue: Campus Wi-Fi</h4>
                            <p className="text-sm text-green-600 mt-1">Your feedback helped IT prioritize a major connectivity fix.</p>
                            <p className="text-xs text-gray-500 mt-2">Earned +10 Impact Points</p>
                        </li>
                        <li className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                            <h4 className="font-semibold text-blue-700">New Feature: Anonymous Reporting</h4>
                            <p className="text-sm text-blue-600 mt-1">Your suggestion led to the development of a new submission feature.</p>
                            <p className="text-xs text-gray-500 mt-2">Earned +5 Impact Points</p>
                        </li>
                    </ul>
                </div>
            );
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 pb-10">
            <AchievementsHeader onNavigate={handleNavigate} />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl pt-10">

                <div className="bg-white p-6 rounded-xl shadow-lg mb-8 border border-blue-100">
                    <div className="flex items-center justify-between flex-wrap">
                        <div className="flex items-center">
                            <div className="p-4 bg-blue-100 rounded-full text-blue-600 mr-4">
                                <User size={40} />
                            </div>
                            <div>
                                <h1 className="text-2xl font-bold text-gray-900">User Profile</h1>
                                <div className="flex items-center space-x-4 mt-1 text-sm">
                                    <span className="px-3 py-1 bg-blue-500 text-white font-semibold rounded-full flex items-center">
                                        Level {userStats.level}
                                    </span>
                                    <span className="text-gray-600 flex items-center">
                                        <Zap size={16} className="text-yellow-500 mr-1" />
                                        {userStats.impactPoints} Impact Points
                                    </span>
                                </div>
                                <p className="text-xs text-gray-500 mt-1">
                                    {userStats.badgesEarned} badges earned • {userStats.submissions} feedbacks submitted
                                </p>
                            </div>
                        </div>

                        <div className="mt-4 md:mt-0 w-full md:w-auto md:min-w-[200px]">
                            <div className="flex justify-between text-xs font-semibold text-gray-600 mb-1">
                                <span>Level {userStats.level}</span>
                                <span>Level {userStats.level + 1}</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                                <div
                                    className="bg-blue-600 h-2.5 rounded-full"
                                    style={{ width: `${(userStats.impactPoints / userStats.pointsToNextLevel) * 100}%` }}
                                ></div>
                            </div>
                            <p className="text-xs text-gray-500 mt-1 text-right">
                                {userStats.pointsToNextLevel - userStats.impactPoints} points to next level
                            </p>
                        </div>
                    </div>
                </div>

                {/* --- Stats Grid --- */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    <StatCard title="Total Submissions" value={userStats.submissions} icon={Send} colorClass="text-blue-600" />
                    <StatCard title="Resolved" value={userStats.resolved} icon={CheckCircle} colorClass="text-green-600" />
                    <StatCard title="Impact Points" value={userStats.impactPoints} icon={Zap} colorClass="text-purple-600" />
                    <StatCard title="Badges Earned" value={userStats.badgesEarned} icon={Award} colorClass="text-yellow-600" />
                </div>

                {/* --- Tabs for Badges/Progress/Impact --- */}
                <div className="flex border-b border-gray-200 mb-4 bg-white rounded-t-xl shadow-sm overflow-x-auto">
                    {['Badges', 'Progress', 'Impact'].map(tab => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-6 py-3 text-sm font-medium transition-colors border-b-2 whitespace-nowrap
                                ${activeTab === tab
                                ? 'border-blue-600 text-blue-600'
                                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* --- Tab Content --- */}
                {renderTabContent()}

            </div>
        </div>
    );
};

export default AchievementsPage;
