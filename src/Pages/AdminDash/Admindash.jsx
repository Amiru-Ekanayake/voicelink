import { useState } from 'react';
import DashHeader from './Adminhead';
import StatsCards from './Adminstats';
import NavigationTabs from './Adminnavi';
import SearchFilters from './Adminsearch';
import FeedbackList from './Adminfeed';
import AnalyticsView from './Adminanalytics';
import FeedbackDetailModal from './Feedbackmodel';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedFeedback, setSelectedFeedback] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All Categories');
  const [statusFilter, setStatusFilter] = useState('All Status');

  const feedbackData = [
    {
      id: 'FB001',
      title: 'Campus Wi-Fi connectivity issues',
      description: 'The Wi-Fi in the library keeps disconnecting every few minutes, making it difficult to study and access online resources.',
      status: 'in progress',
      priority: 'high priority',
      category: 'IT Services',
      department: 'IT Services',
      assignedTo: 'John Tech',
      upvotes: 12,
      date: '1/15/2024',
      lastUpdated: '1/16/2024',
      author: 'Anonymous',
      media: [
        { type: 'image', url: 'wifi-issue-screenshot.jpg', name: 'Screenshot of disconnection' },
        { type: 'video', url: 'wifi-demo.mp4', name: 'Video demonstration' }
      ]
    },
    {
      id: 'FB002',
      title: 'Cafeteria food quality concerns',
      description: 'The food quality has declined significantly. Multiple students have reported stomach issues after eating.',
      status: 'resolved',
      priority: 'high priority',
      category: 'Food Services',
      department: 'Dining Services',
      assignedTo: '',
      upvotes: 28,
      date: '1/10/2024',
      lastUpdated: '1/18/2024',
      author: 'Anonymous',
      media: [
        { type: 'image', url: 'food-image1.jpg', name: 'Food quality photo 1' },
        { type: 'image', url: 'food-image2.jpg', name: 'Food quality photo 2' }
      ]
    },
    {
      id: 'FB003',
      title: 'Parking space shortage',
      description: 'Not enough parking spots for students and staff. Often have to park several blocks away.',
      status: 'resolved',
      priority: 'medium priority',
      category: 'Facilities',
      department: 'Facilities Management',
      assignedTo: '',
      upvotes: 45,
      date: '1/20/2024',
      lastUpdated: '1/20/2024',
      author: 'Student Council',
      media: []
    }
  ];

  const stats = [
    { label: 'Total Issues', value: '3', color: 'blue' },
    { label: 'Received', value: '1', color: 'green' },
    { label: 'In Progress', value: '1', color: 'yellow' },
    { label: 'Resolved', value: '1', color: 'purple' },
    { label: 'Avg Response', value: '24 hours', color: 'indigo' }
  ];

  const getFilteredFeedback = () => {
    let filtered = feedbackData;

    if (activeTab === 'trending') {
      filtered = filtered.sort((a, b) => b.upvotes - a.upvotes);
    } else if (activeTab === 'recently-resolved') {
      filtered = filtered.filter(f => f.status === 'resolved');
    }

    if (searchQuery) {
      filtered = filtered.filter(f => 
        f.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        f.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return filtered;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <DashHeader />

      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
          <p className="text-gray-600">Manage and respond to community feedback. Monitor issues and assign tasks.</p>
        </div>

        <StatsCards stats={stats} />
        <NavigationTabs activeTab={activeTab} setActiveTab={setActiveTab} />

        {activeTab !== 'analytics' ? (
          <>
            <SearchFilters
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              categoryFilter={categoryFilter}
              setCategoryFilter={setCategoryFilter}
              statusFilter={statusFilter}
              setStatusFilter={setStatusFilter}
            />
            <FeedbackList
              feedbackData={getFilteredFeedback()}
              onFeedbackClick={setSelectedFeedback}
            />
          </>
        ) : (
          <AnalyticsView feedbackData={feedbackData} />
        )}
      </main>

      {selectedFeedback && (
        <FeedbackDetailModal
          feedback={selectedFeedback}
          onClose={() => setSelectedFeedback(null)}
        />
      )}
    </div>
  );
}
