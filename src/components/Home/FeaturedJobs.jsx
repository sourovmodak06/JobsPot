import React, { useState } from "react";
import FeaturedItem from "./FeaturedItem";
import { useLoaderData } from "react-router-dom";

const FeaturedJobs = () => {
  const jobs = useLoaderData();
  const [showAll, setShowAll] = useState(false);

  const allJobs = () => {
    console.log("jiiii");
    setShowAll(true);
  };

  return (
    <div className="px-14">
      <div className="text-center">
        <h2 className="text-5xl font-extrabold">Featured Jobs</h2>
        <p className="py-4 font-medium text-[#757575]">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid grid-cols-2 gap-5 py-5">
        {jobs.slice(0, showAll ? 10 : 4).map((job) => (
          <FeaturedItem key={job.id} job={job}></FeaturedItem>
        ))}
      </div>
      {!showAll && (
        <div className="flex justify-center">
          <button
            onClick={() => allJobs()}
            className="bg-gradient-to-l from-[#7E90FE] to-[#9873FF] text-white py-2 px-4 text-xl font-extrabold rounded-lg"
          >
            See All Jobs
          </button>
        </div>
      )}
    </div>
  );
};

export default FeaturedJobs;
