import React from "react";
import { NavLink } from "react-router-dom";

const ActiveLink = ({to, children}) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? "text-transparent bg-clip-text bg-gradient-to-l from-[#9873FF] to-[#7E90FE]" : ""}
    >
        {children}
    </NavLink>
  );
};

export default ActiveLink;
