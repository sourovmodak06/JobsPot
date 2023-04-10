import React, { useEffect, useState } from "react";
import FeaturedItem from "./FeaturedItem";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(()=>{
    fetch('featured-job.json')
    .then(res => res.json())
    .then(data => setJobs(data))
  },[])

  return (
    <div className="px-14">
      <div className="text-center">
        <h2 className="text-5xl font-extrabold">Featured Jobs</h2>
        <p className="py-4 font-medium text-[#757575]">
        Explore thousands of job opportunities with all the information you need. Its your future
        </p>
      </div>
      <div className="grid grid-cols-2 gap-5 py-5">
        {
          jobs.map(job => <FeaturedItem
            key={job.id}
            job = {job}
          ></FeaturedItem>)
        }
      </div>
    </div>
  );
};

export default FeaturedJobs;
