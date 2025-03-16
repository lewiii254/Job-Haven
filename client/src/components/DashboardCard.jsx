const DashboardCard = ({ title, count, icon }) => {
  return (
    <div className="bg-white p-5 rounded-lg shadow-md flex items-center gap-4">
      <div className="text-4xl text-blue-600">{icon}</div>
      <div>
        <h3 className="text-gray-700 text-sm">{title}</h3>
        <p className="text-xl font-semibold">{count}</p>
      </div>
    </div>
  );
};

export default DashboardCard;
