import React from "react";
import ActiveLink from "./ActiveLink";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-6">
      <h2 className="text-3xl font-extrabold text-[#1A1919]">JobsPot</h2>
      <div className="flex gap-6 font-bold text-[#757575]">
        <ActiveLink to="/">Home</ActiveLink>
        <ActiveLink to="/statistics">Statistics</ActiveLink>
        <ActiveLink to="/appliedJobs">Applied Jobs</ActiveLink>
        <ActiveLink to="/blog">Blog</ActiveLink>
      </div>
      <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-2 px-4 text-xl font-extrabold rounded-lg">Star Applying</button>
    </div>
  );
};

export default Navbar;
