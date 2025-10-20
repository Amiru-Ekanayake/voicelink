import { useState } from 'react';
import { X, Send, User, Calendar, Tag, ThumbsUp, Image, Video, File } from 'lucide-react';

export default function FeedbackDetailModal({ feedback, onClose }) {
  const [statusUpdate, setStatusUpdate] = useState(feedback.status);
  const [adminMessage, setAdminMessage] = useState('');
  const [assignedTo, setAssignedTo] = useState(feedback.assignedTo);

  const handleUpdateFeedback = () => {
    console.log('Update:', { 
      id: feedback.id, 
      status: statusUpdate, 
      message: adminMessage,
      assignedTo 
    });
    onClose();
  };

  const getPriorityColor = (priority) => {
    if (priority === 'high priority') return 'bg-red-100 text-red-700';
    if (priority === 'medium priority') return 'bg-yellow-100 text-yellow-700';
    return 'bg-blue-100 text-blue-700';
  };

  const getMediaIcon = (type) => {
    if (type === 'image') return <Image className="w-4 h-4" />;
    if (type === 'video') return <Video className="w-4 h-4" />;
    return <File className="w-4 h-4" />;
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">Feedback Details</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="px-2 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded">
                {feedback.id}
              </span>
              <span className={`px-3 py-1 text-xs font-medium rounded-full ${getPriorityColor(feedback.priority)}`}>
                {feedback.priority}
              </span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">{feedback.title}</h3>
            <p className="text-gray-600 mb-4">{feedback.description}</p>
            
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-gray-400" />
                <span className="text-gray-600">Author: {feedback.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-gray-400" />
                <span className="text-gray-600">Date: {feedback.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Tag className="w-4 h-4 text-gray-400" />
                <span className="text-gray-600">Category: {feedback.category}</span>
              </div>
              <div className="flex items-center gap-2">
                <ThumbsUp className="w-4 h-4 text-gray-400" />
                <span className="text-gray-600">Upvotes: {feedback.upvotes}</span>
              </div>
            </div>
          </div>

          {feedback.media.length > 0 && (
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-3">Attachments</h4>
              <div className="space-y-2">
                {feedback.media.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                    {getMediaIcon(item.type)}
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">{item.name}</p>
                      <p className="text-xs text-gray-500">{item.type.toUpperCase()}</p>
                    </div>
                    <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                      View
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="border-t border-gray-200 pt-6 space-y-4">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Admin Actions</h4>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Update Status
              </label>
              <select
                value={statusUpdate}
                onChange={(e) => setStatusUpdate(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              >
                <option value="received">Received</option>
                <option value="in progress">In Progress</option>
                <option value="resolved">Resolved</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Assign To
              </label>
              <input
                type="text"
                value={assignedTo}
                onChange={(e) => setAssignedTo(e.target.value)}
                placeholder="Enter person or department name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Response Message
              </label>
              <textarea
                value={adminMessage}
                onChange={(e) => setAdminMessage(e.target.value)}
                placeholder="Write a response to the user..."
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
              />
            </div>

            <div className="flex gap-3">
              <button
                onClick={handleUpdateFeedback}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                <Send className="w-4 h-4" />
                Update & Send Response
              </button>
              <button
                onClick={onClose}
                className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}