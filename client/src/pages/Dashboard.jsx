import Sidebar from "../components/Sidebar";
import DashboardCard from "../components/DashboardCard";
import JobList from "../components/JobList";
import { FaBriefcase, FaUsers, FaCheckCircle } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-10 bg-gray-100">
        <h1 className="text-3xl font-semibold mb-8">Dashboard Overview</h1>

        {/* Dashboard Stats */}
        <div className="grid grid-cols-3 gap-6 mb-10">
          <DashboardCard title="Total Jobs" count="24" icon={<FaBriefcase />} />
          <DashboardCard title="Active Applicants" count="120" icon={<FaUsers />} />
          <DashboardCard title="Successful Hires" count="18" icon={<FaCheckCircle />} />
        </div>

        {/* Job List */}
        <JobList />
      </div>
    </div>
  );
};

export default Dashboard;
