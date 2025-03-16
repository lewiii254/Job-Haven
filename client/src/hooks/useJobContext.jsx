import { useContext } from "react";
import JobContext from "../context/JobContext";

const useJobContext = () => {
  return useContext(JobContext);
};

export default useJobContext;
