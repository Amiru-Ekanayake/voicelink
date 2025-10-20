import React from 'react';

const COMMUNITY_STATS = [
  { label: 'Total Issues', value: 3, unit: 'Issues', color: 'text-gray-900', bg: 'bg-white' },
  { label: 'Received', value: 1, unit: '', color: 'text-blue-600', bg: 'bg-blue-50' },
  { label: 'In Progress', value: 1, unit: '', color: 'text-yellow-600', bg: 'bg-yellow-50' },
  { label: 'Resolved', value: 1, unit: '', color: 'text-green-600', bg: 'bg-green-50' },
  { label: '24 hours', value: '4 hours', unit: 'Avg Response', color: 'text-purple-600', bg: 'bg-purple-50' },
];


export default function StatsCards() {
  return (
    <div className="grid grid-cols-5 md:grid-cols-5 gap-4 mt-6 px-9">
      {COMMUNITY_STATS.map((stat, index) => (
        <div 
          key={index} 
          className={`flex flex-col p-4 rounded-xl shadow-sm border border-gray-200 ${stat.bg}`}
        >
          <div className="text-4xl font-bold leading-none mb-1">
            <span className={stat.color}>{stat.value}</span>
          </div>
          <p className="text-sm font-medium text-gray-500">{stat.label}</p>
          {stat.unit && <p className="text-xs text-gray-400 mt-1">{stat.unit}</p>}
        </div>
      ))}
    </div>
  );
}
