import React from 'react';

/**
 * Renders the circular background for the feature icons.
 * @param {object} props - color and icon element
 */
export const IconWrapper = ({ color, children }) => (
  <div className={`p-3 rounded-xl inline-flex mb-4 ${color} bg-opacity-10`}>
    {children}
  </div>
);

/**
 * Renders a single feature card with an icon, title, and description.
 * @param {object} props - icon, title, description, and iconColor class.
 */
export const FeatureCard = ({ icon: Icon, title, description, iconColor }) => (
  <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1 h-full border border-gray-100">
    <IconWrapper color={iconColor}>
      <Icon className={`w-6 h-6 ${iconColor}`} />
    </IconWrapper>
    <h3 className="text-lg font-semibold text-gray-900 mb-2">
      {title}
    </h3>
    <p className="text-gray-600 text-sm">
      {description}
    </p>
  </div>
);

/**
 * Renders a single statistic item (number and label).
 * @param {object} props - value and label.
 */
export const StatItem = ({ value, label }) => (
  <div className="p-4 text-center">
    <div className="text-4xl md:text-5xl font-extrabold text-blue-600 mb-1">
      {value}
    </div>
    <div className="text-sm font-medium text-gray-600">
      {label}
    </div>
  </div>
);
