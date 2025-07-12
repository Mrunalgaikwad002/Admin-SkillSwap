import React, { useState, useMemo } from "react";
import SkillSearch from "./components/SkillSearch";
import SkillFilters from "./components/SkillFilters";
import Pagination from "./components/Pagination";
import SkillTable from "./components/SkillTable";
import SkillProfileModal from "./SkillProfileModal";

// Mock data for skills
const initialSkills = [
  {
    id: 1,
    userName: "John Smith",
    userEmail: "john@gmail.com",
    skillName: "Cooking",
    skillType: "Offered",
    flagStatus: "Approved",
    submittedOn: "2024-07-01",
    flagReason: null,
  },
  {
    id: 2,
    userName: "Anna Lee",
    userEmail: "anna@mail.com",
    skillName: "Dark Magic",
    skillType: "Wanted",
    flagStatus: "Flagged",
    submittedOn: "2024-07-02",
    flagReason: "Inappropriate",
  },
  {
    id: 3,
    userName: "Raj Patel",
    userEmail: "raj@xyz.com",
    skillName: "Photoshop",
    skillType: "Offered",
    flagStatus: "Pending",
    submittedOn: "2024-07-03",
    flagReason: null,
  },
  {
    id: 4,
    userName: "Emily Zhang",
    userEmail: "emily.zhang@example.com",
    skillName: "Python",
    skillType: "Offered",
    flagStatus: "Approved",
    submittedOn: "2024-07-04",
    flagReason: null,
  },
  {
    id: 5,
    userName: "Carlos Rivera",
    userEmail: "carlos.rivera@example.com",
    skillName: "Marketing",
    skillType: "Wanted",
    flagStatus: "Flagged",
    submittedOn: "2024-07-05",
    flagReason: "Spam",
  },
  {
    id: 6,
    userName: "Priya Singh",
    userEmail: "priya.singh@example.com",
    skillName: "UI/UX",
    skillType: "Offered",
    flagStatus: "Approved",
    submittedOn: "2024-07-06",
    flagReason: null,
  },
  {
    id: 7,
    userName: "Mohammed Ali",
    userEmail: "mohammed.ali@example.com",
    skillName: "Node.js",
    skillType: "Offered",
    flagStatus: "Pending",
    submittedOn: "2024-07-07",
    flagReason: null,
  },
  {
    id: 8,
    userName: "Sara Kim",
    userEmail: "sara.kim@example.com",
    skillName: "Mentoring",
    skillType: "Wanted",
    flagStatus: "Approved",
    submittedOn: "2024-07-08",
    flagReason: null,
  },
  {
    id: 9,
    userName: "David Lee",
    userEmail: "david.lee@example.com",
    skillName: "Writing",
    skillType: "Offered",
    flagStatus: "Flagged",
    submittedOn: "2024-07-09",
    flagReason: "Inappropriate",
  },
  {
    id: 10,
    userName: "Olivia Brown",
    userEmail: "olivia.brown@example.com",
    skillName: "Design",
    skillType: "Wanted",
    flagStatus: "Pending",
    submittedOn: "2024-07-10",
    flagReason: null,
  },
  {
    id: 11,
    userName: "Ethan Patel",
    userEmail: "ethan.patel@example.com",
    skillName: "React",
    skillType: "Offered",
    flagStatus: "Approved",
    submittedOn: "2024-07-11",
    flagReason: null,
  },
  {
    id: 12,
    userName: "Mia Wilson",
    userEmail: "mia.wilson@example.com",
    skillName: "Mentoring",
    skillType: "Offered",
    flagStatus: "Flagged",
    submittedOn: "2024-07-12",
    flagReason: "Spam",
  },
];

const PAGE_SIZE = 9;

const Skills = () => {
  const [skills, setSkills] = useState(initialSkills);
  const [search, setSearch] = useState("");
  const [flagStatus, setFlagStatus] = useState("All");
  const [skillType, setSkillType] = useState("All");
  const [sortKey, setSortKey] = useState("submittedOn");
  const [sortOrder, setSortOrder] = useState("desc");
  const [currentPage, setCurrentPage] = useState(1);
  const [profileSkill, setProfileSkill] = useState(null);
  const [profileOpen, setProfileOpen] = useState(false);

  // Filtering, searching, sorting
  const filteredSkills = useMemo(() => {
    let filtered = [...skills];
    if (search) {
      filtered = filtered.filter(s =>
        s.skillName.toLowerCase().includes(search.toLowerCase()) ||
        s.userName.toLowerCase().includes(search.toLowerCase()) ||
        s.userEmail.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (flagStatus !== "All") {
      filtered = filtered.filter(s => s.flagStatus === flagStatus);
    }
    if (skillType !== "All") {
      filtered = filtered.filter(s => s.skillType === skillType);
    }
    filtered.sort((a, b) => {
      let aVal = a[sortKey];
      let bVal = b[sortKey];
      if (aVal === null || aVal === undefined) return 1;
      if (bVal === null || bVal === undefined) return -1;
      if (typeof aVal === "string") aVal = aVal.toLowerCase();
      if (typeof bVal === "string") bVal = bVal.toLowerCase();
      if (aVal < bVal) return sortOrder === "asc" ? -1 : 1;
      if (aVal > bVal) return sortOrder === "asc" ? 1 : -1;
      return 0;
    });
    return filtered;
  }, [skills, search, flagStatus, skillType, sortKey, sortOrder]);

  // Pagination
  const totalPages = Math.ceil(filteredSkills.length / PAGE_SIZE);
  const pagedSkills = filteredSkills.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  // Handlers
  const handleSort = key => {
    if (sortKey === key) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortOrder("asc");
    }
  };
  const handleView = skill => {
    setProfileSkill(skill);
    setProfileOpen(true);
  };
  const handleApprove = skill => {
    setSkills(skills =>
      skills.map(s =>
        s.id === skill.id ? { ...s, flagStatus: "Approved", flagReason: null } : s
      )
    );
  };
  const handleReject = skill => {
    setSkills(skills =>
      skills.map(s =>
        s.id === skill.id ? { ...s, flagStatus: "Flagged", flagReason: "Rejected by admin" } : s
      )
    );
  };
  const handleEdit = skill => {
    // For demo, just open the modal (could add edit form)
    setProfileSkill(skill);
    setProfileOpen(true);
  };
  const handleDelete = skill => {
    setSkills(skills => skills.filter(s => s.id !== skill.id));
  };

  return (
    <>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4 px-10">
        <SkillSearch value={search} onSearch={setSearch} />
        <SkillFilters flagStatus={flagStatus} skillType={skillType} onFlagStatusChange={setFlagStatus} onSkillTypeChange={setSkillType} />
      </div>
      <div className="px-10">
        <SkillTable
          skills={pagedSkills}
          onView={handleView}
          onApprove={handleApprove}
          onReject={handleReject}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onSort={handleSort}
          sortKey={sortKey}
          sortOrder={sortOrder}
        />
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
        <SkillProfileModal open={profileOpen} skill={profileSkill} onClose={() => setProfileOpen(false)} />
      </div>
    </>
  );
};

export default Skills; 