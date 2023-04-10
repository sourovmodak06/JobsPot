import React from "react";
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid'

const FeaturedItem = (props) => {
  const { logo, title, company, location, salary, time, placement } = props.job;
  
  return (
    <div className="p-[2px] bg-[#75757541] rounded-lg hover:bg-gradient-to-l from-[#7E90FE] to-[#9873FF]">
      <div className="p-10 w-full h-full bg-white rounded-lg">
        <img src={logo} alt="company logo" className="w-[148px] h-[40px]" />
        <h2 className="pt-5 pb-2 font-extrabold text-2xl">{title}</h2>
        <h3 className="text-[#757575] font-semibold text-xl">{company}</h3>
        <div className="flex gap-4 py-4">
          <div className="p-[1px] rounded-lg bg-gradient-to-l from-[#7E90FE] to-[#9873FF] cursor-pointer">
            <div className="w-full h-full bg-white rounded-lg py-2 px-5">
                <span className="text-transparent bg-clip-text bg-gradient-to-l from-[#9873FF] to-[#7E90FE] font-extrabold">
                    {placement}
                </span>
            </div>
          </div>
          <div className="p-[1px] rounded-lg bg-gradient-to-l from-[#7E90FE] to-[#9873FF] cursor-pointer">
            <div className="w-full h-full bg-white rounded-lg py-2 px-5">
                <span className="text-transparent bg-clip-text bg-gradient-to-l from-[#9873FF] to-[#7E90FE] font-extrabold">
                    {time}
                </span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center text-[#757575]">
            <MapPinIcon className="h-6 w-6 mr-2" />
            <h4 className="text-xl font-semibold">{location}</h4>
          </div>
          <div className="flex items-center text-[#757575]">
            <CurrencyDollarIcon className="h-6 w-6 mr-2"/>
            <h4 className="text-xl font-semibold">{salary}</h4>
          </div>
        </div>
        <button className="mt-7 bg-gradient-to-l from-[#7E90FE] to-[#9873FF] text-white py-2 px-4 text-xl font-extrabold rounded-lg">View Details</button>
      </div>
    </div>
  );
};

export default FeaturedItem;
