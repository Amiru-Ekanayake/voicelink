import React from 'react';

/**
 * Renders a single, clickable button for the dashboard tab navigation.
 * @param {string} tab - The name of the tab.
 * @param {string} activeTab - The currently active tab name.
 * @param {function} onClick - Function to set the active tab on click.
 */
export default function TabButton({ tab, activeTab, onClick }) {
  const isActive = activeTab === tab;
  
  const baseClasses = "px-4 py-3 text-sm font-semibold transition-all duration-200 ease-in-out whitespace-nowrap";
  
  const activeClasses = "text-blue-600 border-b-2 border-blue-600";
  
  const inactiveClasses = "text-gray-500 hover:text-gray-700 hover:bg-gray-50 border-b-2 border-transparent";
  
  return (
    <button
      key={tab}
      onClick={() => onClick(tab)}
      className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
    >
      {tab}
    </button>
  );
}