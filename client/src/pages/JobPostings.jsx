import JobForm from "../components/JobForm";
import JobCard from "../components/JobCard";
import useJobContext from "../hooks/useJobContext";

const JobPostings = () => {
  const { jobs } = useJobContext();

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Post Jobs</h1>
      <JobForm />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {jobs.map((job, index) => (
          <JobCard key={index} job={job} />
        ))}
      </div>
    </div>
  );
};

export default JobPostings;
