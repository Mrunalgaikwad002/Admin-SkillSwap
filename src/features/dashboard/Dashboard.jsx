import React from "react";
import Sidebar from "./components/Sidebar";
import StatsCards from "./components/StatsCards";
import RecentActivityTable from "./components/RecentActivityTable";
import UserRolePie from "./components/Charts/UserRolePie";
import SwapsOverTimeBar from "./components/Charts/SwapsOverTimeBar";
import SwapStatusPie from "./components/Charts/SwapStatusPie";
import MostRequestedSkillsBar from "./components/Charts/MostRequestedSkillsBar";
import FeedbackRatingChart from "./components/Charts/FeedbackRatingChart";

const Dashboard = () => (
  <div className="flex min-h-screen bg-gray-50">
    <Sidebar />
    <main className="flex-1 p-6 md:p-10">
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
      <StatsCards />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-10">
        <UserRolePie />
        <SwapsOverTimeBar />
        <SwapStatusPie />
        <MostRequestedSkillsBar />
        <FeedbackRatingChart />
      </div>
      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
        <RecentActivityTable />
      </div>
    </main>
  </div>
);

export default Dashboard; 