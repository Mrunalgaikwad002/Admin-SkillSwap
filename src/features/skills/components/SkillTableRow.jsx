import React from "react";

const statusStyles = {
  "Flagged": "bg-red-100 text-red-700",
  "Pending": "bg-yellow-100 text-yellow-800",
  "Approved": "bg-green-100 text-green-800",
};

const SkillTableRow = ({ skill, onView, onApprove, onReject, onEdit, onDelete }) => (
  <tr className="border-b last:border-0">
    <td className="px-6 py-4 whitespace-nowrap text-blue-600 hover:underline cursor-pointer" onClick={() => onView(skill)}>{skill.userName}</td>
    <td className="px-6 py-4 whitespace-nowrap">{skill.userEmail}</td>
    <td className="px-6 py-4 whitespace-nowrap">{skill.skillName}</td>
    <td className="px-6 py-4 whitespace-nowrap">{skill.skillType}</td>
    <td className="px-6 py-4 whitespace-nowrap">
      <span className={`px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 ${statusStyles[skill.flagStatus] || 'bg-gray-200 text-gray-800'}`}>
        {skill.flagStatus === 'Flagged' && <span title="Flagged">🚩</span>}
        {skill.flagStatus === 'Pending' && <span title="Pending">⏳</span>}
        {skill.flagStatus === 'Approved' && <span title="Approved">✅</span>}
        {skill.flagStatus}
      </span>
    </td>
    <td className="px-6 py-4 whitespace-nowrap">{skill.submittedOn}</td>
    <td className="px-6 py-4 whitespace-nowrap">{skill.flagReason || '—'}</td>
    <td className="px-6 py-4 whitespace-nowrap space-x-2">
      {skill.flagStatus !== 'Approved' && (
        <button className="text-green-600 hover:underline font-medium" onClick={() => onApprove(skill)}>Approve</button>
      )}
      {skill.flagStatus !== 'Flagged' && (
        <button className="text-red-600 hover:underline font-medium" onClick={() => onReject(skill)}>Reject</button>
      )}
      <button className="text-blue-600 hover:underline font-medium" onClick={() => onEdit(skill)}>Edit</button>
      <button className="text-gray-500 hover:underline font-medium" onClick={() => onDelete(skill)}>Delete</button>
    </td>
  </tr>
);

export default SkillTableRow; 