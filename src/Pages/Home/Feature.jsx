import React from 'react';
import { MessageSquare, Zap, BarChart2, Shield, Users, Star } from 'lucide-react';
import { FeatureCard } from './UtilityComponents'; 


export default function FeaturesSection() {
  const features = [
    {
      icon: MessageSquare,
      title: "Centralized Feedback",
      description: "All feedback in one unified platform. No more scattered emails or lost complaints.",
      color: "text-blue-500",
      bg: "bg-blue-500",
    },
    {
      icon: Zap,
      title: "AI-Powered Routing",
      description: "Intelligent categorization and automatic routing to the right department instantly.",
      color: "text-yellow-500",
      bg: "bg-yellow-500",
    },
    {
      icon: BarChart2,
      title: "Real-Time Tracking",
      description: "Live progress updates and transparent status tracking for every submitted issue.",
      color: "text-green-500",
      bg: "bg-green-500",
    },
    {
      icon: Shield,
      title: "Anonymous Reporting",
      description: "Secure, confidential feedback option to encourage honest communication.",
      color: "text-purple-500",
      bg: "bg-purple-500",
    },
    {
      icon: Users,
      title: "Multi-Organization",
      description: "Support for companies, universities, and government organizations in one platform.",
      color: "text-cyan-500",
      bg: "bg-cyan-500",
    },
    {
      icon: Star,
      title: "Community Voting",
      description: "Upvote important issues to help organizations prioritize community needs.",
      color: "text-pink-500",
      bg: "bg-pink-500",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Why Choose VoiceLink?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our intelligent platform transforms traditional feedback systems into powerful communication tools
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              iconColor={feature.bg}
            />
          ))}
        </div>
      </div>
    </section>
  );
}



