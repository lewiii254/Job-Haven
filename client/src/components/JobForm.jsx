import { useState } from "react";
import useJobContext from "../hooks/useJobContext";

const JobForm = () => {
  const { addJob } = useJobContext();
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addJob({ title, company, location });
    setTitle("");
    setCompany("");
    setLocation("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4 bg-white shadow-md rounded-md">
      <input type="text" placeholder="Job Title" value={title} onChange={(e) => setTitle(e.target.value)} className="input" />
      <input type="text" placeholder="Company Name" value={company} onChange={(e) => setCompany(e.target.value)} className="input" />
      <input type="text" placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} className="input" />
      <button type="submit" className="btn-primary">Post Job</button>
    </form>
  );
};

export default JobForm;
