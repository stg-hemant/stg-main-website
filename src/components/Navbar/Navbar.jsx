import React from "react";
import { NavLink } from "react-router-dom";

import TopBar from "./TopBar";

import Logo from "../../assets/logo/logo.png";

const Navbar = () => {
  return (
    <>
      <TopBar />
      <nav className="h-24 w-full bg-white shadow transition-all duration-500 ">
        <div className="container mx-auto flex justify-between items-center h-full">
          <div className="h-20 w-[4.5rem]">
            <img
              src={Logo}
              alt="Logo"
              className="h-full w-full object-contain"
            />
          </div>
          <ul className="hidden w-[30rem] md:flex justify-between flex-wrap font-medium">
            <li>
              <NavLink
                to="/"
                className="text-[#1977cc] hover:underline decoration-[#1977cc] decoration-2"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className="hover:text-[#1977cc] hover:underline decoration-[#1977cc] decoration-2"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className="hover:text-[#1977cc] hover:underline decoration-[#1977cc] decoration-2"
              >
                Our Team
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className="hover:text-[#1977cc] hover:underline decoration-[#1977cc] decoration-2"
              >
                Service
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className="hover:text-[#1977cc] hover:underline decoration-[#1977cc] decoration-2"
              >
                Career
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className="hover:text-[#1977cc] hover:underline decoration-[#1977cc] decoration-2"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        {/* hamburger */}

        {/* <div className="md:hidden space-y-1">
          <div className="h-1 w-6 bg-black"></div>
          <div className="h-1 w-6 bg-black"></div>
          <div className="h-1 w-6 bg-black"></div>
        </div> */}
      </nav>
    </>
  );
};

export default Navbar;
