import React from "react";
import SkillTableRow from "./SkillTableRow";

const headers = [
  { key: "userName", label: "User" },
  { key: "userEmail", label: "Email" },
  { key: "skillName", label: "Skill" },
  { key: "skillType", label: "Type" },
  { key: "flagStatus", label: "Status" },
  { key: "submittedOn", label: "Submitted On" },
  { key: "flagReason", label: "Flag Reason" },
  { key: "actions", label: "Actions", sortable: false },
];

const SkillTable = ({ skills, onView, onApprove, onReject, onEdit, onDelete, onSort, sortKey, sortOrder }) => (
  <div className="w-full bg-white rounded-xl shadow-md overflow-x-auto">
    <table className="min-w-full text-left">
      <thead>
        <tr className="border-b">
          {headers.map(h => (
            <th
              key={h.key}
              className={`px-6 py-3 font-semibold text-gray-700 ${h.sortable === false ? '' : 'cursor-pointer select-none'}`}
              onClick={h.sortable === false ? undefined : () => onSort(h.key)}
            >
              {h.label}
              {h.sortable === false ? null : sortKey === h.key ? (
                <span className="ml-1">{sortOrder === 'asc' ? '▲' : '▼'}</span>
              ) : null}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {skills.map(skill => (
          <SkillTableRow
            key={skill.id}
            skill={skill}
            onView={onView}
            onApprove={onApprove}
            onReject={onReject}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </tbody>
    </table>
  </div>
);

export default SkillTable; 