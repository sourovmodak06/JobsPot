import React from "react";
import { useLoaderData } from "react-router-dom";
import Cart from "./Cart";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const AppliedJobs = () => {
  const storedJobDetailsData = useLoaderData();

  return (
    <div>
      <h1 className="text-center py-20 text-3xl font-extrabold bg-gradient-to-l from-[#7e90fe0d] to-[#9873ff0d]">
        Applied Jobs
      </h1>
      <div className="px-6 md:px-14">
        <div className="mt-20 flex justify-end">
          <div className="flex items-center gap-3 bg-[#F4F4F4] p-5 rounded-lg">
            <h2>Filter By</h2>
            <ChevronDownIcon className="h-6 w-6"/>
          </div>
        </div>
        {storedJobDetailsData.map((jobCart) => (
          <Cart key={jobCart.id} jobCart={jobCart}></Cart>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
