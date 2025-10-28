import { ArrowLeft, Award, MessageSquare } from 'lucide-react';

export default function DashHeader() {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm font-medium">Back to Home</span>
          </button>
        </div>
        <div className="flex items-center gap-4">
          <MessageSquare className="w-5 h-5 text-blue-600" />
          <span className="font-semibold text-gray-800">VoiceLink</span>
        </div>
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
            <Award className="w-5 h-5" />
            <span className="text-sm font-medium">Achievements</span>
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">
            Submit Feedback
          </button>
        </div>
      </div>
    </header>
  );
}