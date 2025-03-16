const JobCard = ({ job }) => {
    return (
      <div className="p-4 bg-white shadow-md rounded-md">
        <h3 className="text-lg font-semibold">{job.title}</h3>
        <p className="text-gray-600">{job.company}</p>
        <p className="text-gray-500">{job.location}</p>
      </div>
    );
  };
  
  export default JobCard;
  