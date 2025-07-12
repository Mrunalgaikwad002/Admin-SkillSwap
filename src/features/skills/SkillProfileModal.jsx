import React from "react";

const SkillProfileModal = ({ open, skill, onClose }) => {
  if (!open || !skill) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white rounded-xl shadow-2xl max-w-xl w-full p-8 relative">
        <button className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl" onClick={onClose}>&times;</button>
        <h2 className="text-2xl font-bold mb-6 text-indigo-700">Skill Detail</h2>
        <div className="mb-2"><span className="font-semibold">User:</span> {skill.userName} ({skill.userEmail})</div>
        <div className="mb-2"><span className="font-semibold">Skill:</span> {skill.skillName}</div>
        <div className="mb-2"><span className="font-semibold">Type:</span> {skill.skillType}</div>
        <div className="mb-2"><span className="font-semibold">Status:</span> {skill.flagStatus}</div>
        <div className="mb-2"><span className="font-semibold">Submitted On:</span> {skill.submittedOn}</div>
        {skill.flagReason && <div className="mb-2"><span className="font-semibold">Flag Reason:</span> {skill.flagReason}</div>}
        <div className="mt-6 flex gap-4">
          <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 font-semibold">Approve</button>
          <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 font-semibold">Reject</button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 font-semibold">Edit</button>
          <button className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 font-semibold">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default SkillProfileModal; 