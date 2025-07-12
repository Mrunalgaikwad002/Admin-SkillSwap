import React from "react";

const SkillFilters = ({ flagStatus, skillType, onFlagStatusChange, onSkillTypeChange }) => (
  <div className="flex gap-4 mb-4">
    <select
      value={flagStatus}
      onChange={e => onFlagStatusChange(e.target.value)}
      className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
    >
      <option value="All">All Statuses</option>
      <option value="Flagged">Flagged</option>
      <option value="Pending">Unreviewed</option>
      <option value="Approved">Approved</option>
    </select>
    <select
      value={skillType}
      onChange={e => onSkillTypeChange(e.target.value)}
      className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
    >
      <option value="All">All Types</option>
      <option value="Offered">Offered</option>
      <option value="Wanted">Wanted</option>
    </select>
  </div>
);

export default SkillFilters; 