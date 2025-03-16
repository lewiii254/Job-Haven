import { FaHome, FaBriefcase, FaUser, FaSignOutAlt } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-gray-900 text-white p-5 flex flex-col justify-between">
      <div>
        <h1 className="text-2xl font-bold mb-10">Job Haven</h1>
        <ul className="space-y-4">
          <li className="flex items-center gap-3 cursor-pointer hover:text-gray-400">
            <FaHome />
            Dashboard
          </li>
          <li className="flex items-center gap-3 cursor-pointer hover:text-gray-400">
            <FaBriefcase />
            Jobs
          </li>
          <li className="flex items-center gap-3 cursor-pointer hover:text-gray-400">
            <FaUser />
            Profile
          </li>
        </ul>
      </div>

      <button className="flex items-center gap-3 text-red-400 hover:text-red-600">
        <FaSignOutAlt />
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
