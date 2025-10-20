import React, { useState } from 'react';
import { ThumbsUp, MessageSquare, Clock, User } from 'lucide-react';

const FeedbackCard = ({ 
  id, 
  title, 
  description, 
  department, 
  assignedTo, 
  status, 
  priority, 
  votes, 
  date, 
  lastUpdated, 
  anonymous
}) => {
  const [voteCount, setVoteCount] = useState(votes);
  const [voted, setVoted] = useState(false);

  const handleVote = () => {
    if (voted) {
      setVoteCount(voteCount - 1);
    } else {
      setVoteCount(voteCount + 1);
    }
    setVoted(!voted);
  };

  return (
    <div className="bg-white rounded-lg border p-4 hover:shadow-md">
      {/* Title */}
      <div className="flex items-center gap-2 mb-2">
        <h3 className="font-semibold text-gray-900">{title}</h3>
        <span className="text-xs bg-gray-100 px-2 py-1 rounded">{id}</span>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-600 mb-3">{description}</p>

      {/* Tags */}
      <div className="flex gap-2 mb-3">
        <span className="text-xs px-2 py-1 rounded bg-yellow-100 text-yellow-800">
          {status}
        </span>
        <span className="text-xs px-2 py-1 rounded bg-red-100 text-red-800">
          {priority}
        </span>
        {anonymous && (
          <span className="text-xs px-2 py-1 rounded bg-purple-100 text-purple-800">
            Anonymous
          </span>
        )}
      </div>

      {/* Info */}
      <div className="text-xs text-gray-500 mb-3">
        <div>Department: {department}</div>
        {assignedTo && <div>Assigned to: {assignedTo}</div>}
        <div>Created: {date} • Updated: {lastUpdated}</div>
      </div>

      {/* Actions */}
      <div className="flex gap-3 pt-3 border-t">
        <button 
          onClick={handleVote}
          className={`flex items-center gap-1 px-3 py-1 rounded text-sm ${
            voted ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-700'
          }`}
        >
          <ThumbsUp className="w-4 h-4" />
          <span>{voteCount}</span>
        </button>
        <button className="flex items-center gap-1 px-3 py-1 rounded text-sm bg-gray-100 text-gray-700">
          <MessageSquare className="w-4 h-4" />
          <span>Comment</span>
        </button>
      </div>
    </div>
  );
};

const FeedbackCards = ({ data, columns = 3 }) => {
  const gridClass = `grid gap-4 grid-cols-${columns}`;
  
  return (
    <div className={gridClass}>
      {data.map((item) => (
        <FeedbackCard key={item.id} {...item} />
      ))}
    </div>
  );
};

// Example
const App = () => {
  const data = [
    {
      id: 'FB001',
      title: 'Campus Wi-Fi connectivity issues',
      description: 'The Wi-Fi in the library keeps disconnecting every few minutes.',
      department: 'IT Services',
      assignedTo: 'John Tech',
      status: 'in progress',
      priority: 'high priority',
      votes: 12,
      date: '1/15/2024',
      lastUpdated: '1/16/2024',
      anonymous: false
    },
    {
      id: 'FB002',
      title: 'Cafeteria food quality concerns',
      description: 'The food quality has declined significantly.',
      department: 'Dining Services',
      status: 'resolved',
      priority: 'high priority',
      votes: 28,
      date: '1/10/2024',
      lastUpdated: '1/18/2024',
      anonymous: true
    },
    {
      id: 'FB003',
      title: 'Parking space shortage',
      description: 'Not enough parking spots for students and staff.',
      department: 'Facilities Management',
      status: 'open',
      priority: 'medium priority',
      votes: 45,
      date: '1/20/2024',
      lastUpdated: '1/20/2024',
      anonymous: false
    }
  ];

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-800 px-2">Community Feedback</h1>
      
      {/* Change columns prop to control cards per row */}
      <FeedbackCards data={data} columns={1} />
    </div>
  );
};

export default App;