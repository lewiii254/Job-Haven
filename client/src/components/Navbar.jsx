const Navbar = () => {
  return (
    <div className="bg-white py-4 px-8 flex justify-between items-center shadow-md">
      <h2 className="text-lg font-semibold text-gray-700">Dashboard</h2>
      <div className="flex items-center gap-4">
        <p className="text-gray-500">Welcome, Dev 🖖</p>
        <img 
          src="https://www.w3schools.com/w3images/avatar2.png"
          alt="User Avatar"
          className="w-10 h-10 rounded-full"
        />
      </div>
    </div>
  );
};

export default Navbar;

