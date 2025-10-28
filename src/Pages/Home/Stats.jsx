import React from 'react';
import { StatItem } from './UtilityComponents.jsx';

export default function StatsSection() {
  const stats = [
    { value: "500+", label: "Issues Resolved" },
    { value: "50+", label: "Organizations" },
    { value: "95%", label: "Satisfaction Rate" },
    { value: "24h", label: "Average Response" },
  ];

  return (
    <section className="bg-gray-50 py-12 md:py-16 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-200">
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              value={stat.value}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
