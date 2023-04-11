import React from "react";
import { MapPinIcon, CurrencyDollarIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const Cart = ({ jobCart }) => {
  const { logo, title, company, placement, time, location, salary,id } = jobCart;
  return (
    <div className="flex justify-between items-center border-2 my-6 p-7 rounded-lg">
      <div className="flex items-center gap-8">
        <div className="bg-[#F4F4F4] py-24 px-12 rounded-lg">
          <img src={logo} alt="Company logo" />
        </div>
        <div>
          <h2 className="pt-5 pb-2 font-extrabold text-2xl">{title}</h2>
          <h2 className="text-[#757575] font-semibold text-xl">{company}</h2>
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
              <CurrencyDollarIcon className="h-6 w-6 mr-2" />
              <h4 className="text-xl font-semibold">{salary}</h4>
            </div>
          </div>
        </div>
      </div>
      <button className="bg-gradient-to-l from-[#7E90FE] to-[#9873FF] text-white py-2 px-4 text-xl font-extrabold rounded-lg">
        <Link to={`/job/${id}`}>View Details</Link>
      </button>
    </div>
  );
};

export default Cart;
