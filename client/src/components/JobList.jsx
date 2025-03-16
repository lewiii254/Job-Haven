const JobList = () => {
  const jobs = [
    { title: "Frontend Developer", company: "Google", location: "Remote" },
    { title: "Backend Engineer", company: "Microsoft", location: "Nairobi" },
    { title: "UI/UX Designer", company: "Meta", location: "Hybrid" },
  ];

  return (
    <div className="bg-white p-5 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">Recent Job Posts</h2>
      <ul className="space-y-3">
        {jobs.map((job, index) => (
          <li key={index} className="p-3 bg-gray-100 rounded-md">
            <h3 className="text-sm font-semibold">{job.title}</h3>
            <p className="text-xs text-gray-500">{job.company} • {job.location}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobList;
