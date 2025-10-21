import { AlertCircle, ThumbsUp } from 'lucide-react';

export default function FeedbackList({ feedbackData, onFeedbackClick }) {
  const getPriorityColor = (priority) => {
    if (priority === 'high priority') return 'bg-red-100 text-red-700';
    if (priority === 'medium priority') return 'bg-yellow-100 text-yellow-700';
    return 'bg-blue-100 text-blue-700';
  };

  const getStatusColor = (status) => {
    if (status === 'resolved') return 'bg-green-100 text-green-700';
    if (status === 'in progress') return 'bg-yellow-100 text-yellow-700';
    return 'bg-blue-100 text-blue-700';
  };

  return (
    <div className="space-y-4">
      {feedbackData.map((feedback) => (
        <div
          key={feedback.id}
          onClick={() => onFeedbackClick(feedback)}
          className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow cursor-pointer"
        >
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-start gap-3 flex-1">
              <AlertCircle className="w-5 h-5 text-yellow-500 mt-1 flex-shrink-0" />
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">{feedback.title}</h3>
                  <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded">
                    {feedback.id}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-3">{feedback.description}</p>
                <div className="flex flex-wrap gap-2">
                  <span className={`px-3 py-1 text-xs font-medium rounded-full ${getPriorityColor(feedback.priority)}`}>
                    {feedback.priority}
                  </span>
                  <span className={`px-3 py-1 text-xs font-medium rounded-full ${getStatusColor(feedback.status)}`}>
                    {feedback.status}
                  </span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
                    {feedback.category}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <ThumbsUp className="w-4 h-4" />
              <span className="text-sm font-medium">{feedback.upvotes}</span>
            </div>
          </div>
          <div className="flex items-center justify-between text-sm text-gray-500 border-t border-gray-100 pt-4">
            <div className="flex items-center gap-4">
              <span>Department: {feedback.department}</span>
              {feedback.assignedTo && (
                <span>• Assigned to: {feedback.assignedTo}</span>
              )}
            </div>
            <div className="flex items-center gap-4">
              <span>{feedback.date}</span>
              <span>Last updated: {feedback.lastUpdated}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}