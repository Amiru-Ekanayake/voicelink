import React, { useState } from 'react';
import { User, Mail, Camera, Video, MessageSquare } from 'lucide-react';

// Custom Toggle Switch Component
const ToggleSwitch = ({ isChecked, onToggle, label }) => (
  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-200">
    <div className="flex flex-col">
      <span className="font-semibold text-gray-800">{label}</span>
      <span className="text-sm text-gray-500">
        Your identity will be kept confidential. Note: Anonymous submissions cannot receive direct updates via email.
      </span>
    </div>
    <button
      onClick={onToggle}
      className={`relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
        isChecked ? 'bg-blue-600' : 'bg-gray-200'
      }`}
      role="switch"
      aria-checked={isChecked}
    >
      <span
        aria-hidden="true"
        className={`pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200 ${
          isChecked ? 'translate-x-5' : 'translate-x-0'
        }`}
      />
    </button>
  </div>
);

// Define categories and priorities outside the component to prevent re-creation on every render
const CATEGORIES = [
  { value: 'facility', label: 'Facility Maintenance' },
  { value: 'service', label: 'Customer Service' },
  { value: 'product', label: 'Product Suggestion' },
  { value: 'security', label: 'Security Concern' },
  { value: 'other', label: 'Other' },
];

const PRIORITIES = [
  { value: 'low', label: 'Low Priority: Minor inconvenience' },
  { value: 'medium', label: 'Medium Priority: Issue affecting daily activities' },
  { value: 'high', label: 'High Priority: Critical safety/service issue' },
];

export default function FeedbackForm() {

  const [formData, setFormData] = useState({
    issueTitle: '',
    category: '',
    priority: 'medium',
    detailedDescription: '',
    fullName: '',
    emailAddress: '',
  });
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Consolidated change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCancel = () => {
    // Reset form state to initial values, simulating navigation back
    setFormData({
      issueTitle: '',
      category: '',
      priority: 'medium',
      detailedDescription: '',
      fullName: '',
      emailAddress: '',
    });
    setIsAnonymous(false);
    console.log("Feedback submission cancelled and form reset.");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call
    console.log('Submitting Feedback:', { ...formData, isAnonymous });
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
        <div className="max-w-xl w-full bg-white shadow-xl rounded-2xl p-8 text-center">
          <MessageSquare className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Feedback Submitted!</h2>
          <p className="text-gray-600 mb-6">
            Thank you for sharing your concern. Your feedback has been successfully routed to the appropriate department.
            {isAnonymous ? (
                <span className="block mt-2 font-medium text-red-500">Note: Since you submitted anonymously, you will not receive email updates.</span>
            ) : (
                <span className="block mt-2">Check your email for a confirmation and tracking link.</span>
            )}
          </p>
          <button
            onClick={() => setIsSubmitted(false)} // Or navigate back to home
            className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-150"
          >
            Submit Another Feedback
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="py-10">
        {/* Changed max-w-3xl to max-w-5xl for increased width */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"> 
          
          {/* Title and Subtitle */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Submit Feedback</h1>
            <p className="text-gray-600 mt-1">
              Help us improve by sharing your concerns, suggestions, or issues. Your feedback will be automatically routed to the right department.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Feedback Details Card */}
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-gray-100 space-y-6">
              <h2 className="text-xl font-semibold text-gray-800">Feedback Details</h2>
              <p className="text-sm text-gray-500">
                Please provide as much detail as possible to help us understand and address your concern.
              </p>

              {/* Issue Title */}
              <div>
                <label htmlFor="issueTitle" className="block text-sm font-medium text-gray-700">Issue Title *</label>
                <input
                  type="text"
                  name="issueTitle"
                  id="issueTitle"
                  required
                  value={formData.issueTitle}
                  onChange={handleChange}
                  placeholder="Brief description of your issue..."
                  className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500 transition duration-150"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Category */}
                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category *</label>
                  <select
                    name="category"
                    id="category"
                    required
                    value={formData.category}
                    onChange={handleChange}
                    // Added text-gray-800 to ensure selected text is dark and visible
                    className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-3 bg-white focus:ring-blue-500 focus:border-blue-500 appearance-none pr-8 transition duration-150 text-gray-800"
                  >
                    <option value="" disabled className="text-gray-400">Select the most relevant category</option>
                    {CATEGORIES.map((c) => (
                      <option key={c.value} value={c.value}>{c.label}</option>
                    ))}
                  </select>
                </div>

                {/* Priority Level */}
                <div>
                  <label htmlFor="priority" className="block text-sm font-medium text-gray-700">Priority Level</label>
                  <select
                    name="priority"
                    id="priority"
                    value={formData.priority}
                    onChange={handleChange}
                    // Added text-gray-800 to ensure selected text is dark and visible
                    className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-3 bg-white focus:ring-blue-500 focus:border-blue-500 appearance-none pr-8 transition duration-150 text-gray-800"
                  >
                    {PRIORITIES.map((p) => (
                      <option key={p.value} value={p.value}>{p.label}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Detailed Description */}
              <div>
                <label htmlFor="detailedDescription" className="block text-sm font-medium text-gray-700">Detailed Description *</label>
                <textarea
                  name="detailedDescription"
                  id="detailedDescription"
                  required
                  rows="4"
                  value={formData.detailedDescription}
                  onChange={handleChange}
                  placeholder="Please provide specific details about the issue, including when it occurred, what you expected to happen, and any steps to reproduce the problem..."
                  className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500 transition duration-150"
                />
              </div>
            </div>

            {/* Attachments Card (Optional) */}
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-gray-100 space-y-4">
              <h2 className="text-xl font-semibold text-gray-800">Attach Photos or Video</h2>
              <p className="text-sm text-gray-500">
                Upload images or a video to help illustrate the issue (optional)
              </p>
              <div className="flex space-x-4">
                <button
                  type="button"
                  className="flex items-center justify-center w-full px-4 py-3 border border-blue-200 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition duration-150"
                >
                  <Camera className="w-5 h-5 mr-2" />
                  Upload Photos
                </button>
                <button
                  type="button"
                  className="flex items-center justify-center w-full px-4 py-3 border border-blue-200 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition duration-150"
                >
                  <Video className="w-5 h-5 mr-2" />
                  Upload Video
                </button>
              </div>
            </div>

            {/* Anonymous Submission Toggle */}
            <ToggleSwitch
              isChecked={isAnonymous}
              onToggle={() => setIsAnonymous(!isAnonymous)}
              label="Submit Anonymously"
            />

            {/* Contact Information Card - Renders ONLY if NOT anonymous */}
            {!isAnonymous && (
              <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-gray-100 space-y-6">
                <div className="flex items-center">
                  <User className="w-5 h-5 text-gray-500 mr-2" />
                  <h2 className="text-xl font-semibold text-gray-800">Contact Information</h2>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  
                  {/* Full Name */}
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name *</label>
                    <input
                      type="text"
                      name="fullName"
                      id="fullName"
                      required={!isAnonymous}
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500 transition duration-150"
                    />
                  </div>

                  {/* Email Address */}
                  <div>
                    <label htmlFor="emailAddress" className="block text-sm font-medium text-gray-700">Email Address *</label>
                    <input
                      type="email"
                      name="emailAddress"
                      id="emailAddress"
                      required={!isAnonymous}
                      value={formData.emailAddress}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500 transition duration-150"
                    />
                  </div>
                </div>
                <p className="text-xs text-gray-500 pt-2">
                  We'll use this information to send you updates about your feedback and award achievement badges.
                </p>
              </div>
            )}

            {/* Submission and Cancel Buttons */}
            <div className="pt-4 flex flex-col-reverse sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
               {/* Cancel Button - Now on the left/bottom */}
              <button
                type="button"
                onClick={handleCancel}
                className="w-full sm:w-1/2 px-6 py-3 text-gray-700 bg-gray-200 font-semibold rounded-lg shadow-md hover:bg-gray-300 transition duration-150 focus:outline-none focus:ring-4 focus:ring-gray-400 focus:ring-opacity-50"
              >
                Cancel
              </button>
              {/* Submit Button - Now on the right/top */}
              <button
                type="submit"
                className="w-full sm:w-1/2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-150 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Submit Feedback
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
