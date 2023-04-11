import React, { useState } from "react";
import ActiveLink from "./ActiveLink";
import { Bars3Icon,XMarkIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex justify-between md:items-center px-6 md:px-14 py-6 bg-gradient-to-l from-[#7e90fe0d] to-[#9873ff0d]">
      <h2 className="text-3xl font-extrabold text-[#1A1919]">JobsPot</h2>
      <div>
        <div onClick={() => setOpen(!open)} className="relative">
          {
            open === true ? <XMarkIcon className="w-10 h-10 absolute md:hidden right-0"/> : <Bars3Icon className="w-10 h-10 absolute md:hidden right-0" />
          }
        </div>
        <nav className={`flex flex-col md:flex-row gap-2 md:gap-6 font-bold text-[#757575] text-right md:text-start md:mt-0 duration-500 ${open ? 'mt-12' : '-mt-36'}`}>
          <ActiveLink to="/">Home</ActiveLink>
          <ActiveLink to="/statistics">Statistics</ActiveLink>
          <ActiveLink to="/appliedJobs">Applied Jobs</ActiveLink>
          <ActiveLink to="/blog">Blog</ActiveLink>
        </nav>
      </div>
      <button className="bg-gradient-to-l from-[#7E90FE] to-[#9873FF] text-white py-2 px-4 text-xl font-extrabold rounded-lg hidden md:block">
        Star Applying
      </button>
    </div>
  );
};

export default Navbar;
