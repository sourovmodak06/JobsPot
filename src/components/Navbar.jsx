import React from "react";
import ActiveLink from "./ActiveLink";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-14 py-6 bg-gradient-to-l from-[#7e90fe0d] to-[#9873ff0d]">
      <h2 className="text-3xl font-extrabold text-[#1A1919]">JobsPot</h2>
      <nav className="flex gap-6 font-bold text-[#757575]">
        <ActiveLink to="/">Home</ActiveLink>
        <ActiveLink to="/statistics">Statistics</ActiveLink>
        <ActiveLink to="/appliedJobs">Applied Jobs</ActiveLink>
        <ActiveLink to="/blog">Blog</ActiveLink>
      </nav>
      <button className="bg-gradient-to-l from-[#7E90FE] to-[#9873FF] text-white py-2 px-4 text-xl font-extrabold rounded-lg">Star Applying</button>
    </div>
  );
};

export default Navbar;
