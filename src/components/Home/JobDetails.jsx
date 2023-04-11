import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import {
  MapPinIcon,
  CurrencyDollarIcon,
  CalendarDaysIcon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";
import { addToDb } from "../../fakedb";

const JobDetails = () => {
  const detailId = useParams();
  const detailData = useLoaderData();
  const jobDetail = detailData.find((detail) => detail.id === detailId.jobId);
  const {
    description,
    responsibility,
    requirements,
    experiences,
    salary,
    title,
    phone,
    email,
    address,
  } = jobDetail;

  const addToDetails = (jobDetail) =>{
    addToDb(jobDetail.id);
  }

  return (
    <div>
      <h1 className="text-center py-20 text-3xl font-extrabold bg-gradient-to-l from-[#7e90fe0d] to-[#9873ff0d]">Job Details</h1>
      <div className="flex gap-6 px-14 mt-10">
        <div className="w-[800px]">
          <h2>
            <span className="font-extrabold text-[#1A1919]">
              Job Description:
            </span>
            <span className="font-medium text-[#757575]">{description}</span>
          </h2>
          <h2 className="py-6">
            <span className="font-extrabold text-[#1A1919]">
              Job Responsibility:
            </span>
            <span className="font-medium text-[#757575]">{responsibility}</span>
          </h2>
          <div>
            <h2 className="font-extrabold text-[#1A1919]">
              Educational Requirements:
            </h2>
            <h2 className="font-medium text-[#757575] pt-4">{requirements}</h2>
          </div>
          <div className="py-6">
            <h2 className="font-extrabold text-[#1A1919]">Experiences:</h2>
            <h2 className="font-medium text-[#757575] pt-4">{experiences}</h2>
          </div>
        </div>
        <div>
          <div className="bg-gradient-to-l from-[#7e8ffe3a] to-[#9873ff3f] p-7 rounded-lg">
            <h2 className="text-xl text-[#1A1919] font-extrabold">
              Job Details
            </h2>
            <div className="h-[1px] bg-gradient-to-l from-[#7e8ffe8a] to-[#9873ff8e] my-6"></div>
            <div className="flex items-center">
              <CurrencyDollarIcon className="w-6 h-6 mr-2 text-purple-700" />
              <h2 className="text-xl">
                <span className="text-[#474747] font-bold">Salary : </span>
                <span className="text-[#757575] font-medium">
                  {salary} &#40; Per Month &#41;
                </span>
              </h2>
            </div>
            <div className="flex items-center pt-4 pb-7">
              <CalendarDaysIcon className="w-6 h-6 mr-2 text-purple-700" />
              <h2 className="text-xl">
                <span className="text-[#474747] font-bold">Job Title : </span>
                <span className="text-[#757575] font-medium">{title}</span>
              </h2>
            </div>
            <h2 className="text-xl font-extrabold text-[#1A1919]">
              Contact Information
            </h2>
            <div className="h-[1px] bg-gradient-to-l from-[#7e8ffe8a] to-[#9873ff8e] my-6"></div>
            <div className="flex items-center">
              <PhoneIcon className="w-6 h-6 mr-2 text-purple-700" />
              <h2 className="text-xl">
                <span className="text-[#474747] font-bold">Phone : </span>
                <span className="text-[#757575] font-medium">{phone}</span>
              </h2>
            </div>
            <div className="flex items-center">
              <EnvelopeIcon className="w-6 h-6 mr-2 text-purple-700" />
              <h2 className="text-xl py-4">
                <span className="text-[#474747] font-bold">Email : </span>
                <span className="text-[#757575] font-medium">{email}</span>
              </h2>
            </div>
            <div className="flex">
              <MapPinIcon className="w-6 h-6 mr-2 text-purple-700" />
              <h2>
                <span className="text-[#474747] font-bold text-lg">Address : </span>
                <span className="text-[#757575] font-medium">{address}</span>
              </h2>
            </div>
          </div>
          <button onClick={()=> addToDetails(jobDetail)} className="bg-gradient-to-l from-[#7E90FE] to-[#9873FF] text-white py-2 text-xl font-extrabold rounded-lg w-full mt-6">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
