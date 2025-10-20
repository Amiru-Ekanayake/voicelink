export default function NavigationTabs({ activeTab, setActiveTab }) {
  const tabs = [
    { id: 'all', label: 'All Feedback' },
    { id: 'trending', label: 'Trending' },
    { id: 'recently-resolved', label: 'Recently Resolved' },
    { id: 'analytics', label: 'Analytics' }
  ];

  return (
    <div className="bg-white rounded-lg border border-gray-200 mb-6">
      <div className="flex border-b border-gray-200">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 px-6 py-4 text-sm font-medium transition-colors ${
              activeTab === tab.id
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
}