import React from "react";
import {
  FaRegEnvelope,
  FaXTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa6";
import { BsFacebook } from "react-icons/bs";
import { CgSmartphone } from "react-icons/cg";
import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <div className="w-full h-10 bg-[#f5f3f3]">
      <div className="container mx-auto flex justify-between items-center h-full">
        <div className="flex items-center space-x-2">
          <FaRegEnvelope className="text-[#1977cc]" />
          <Link
            to="mailto:contact@example.com"
            className="hover:text-[#1977cc] text-[#444444] transition-colors duration-300"
          >
            contact@example.com
          </Link>

          <CgSmartphone className="text-[#1977cc] ml-4 text-[1.05rem]" />
          <span>+1 5589 55488 55</span>
        </div>
        <div className="hidden lg:flex items-center space-x-3 text-[1.05rem]">
          <Link
            href="#"
            className="text-[#437099] hover:text-[#1977cc] transition-colors duration-300"
          >
            <FaXTwitter className="text-[1.05rem]" />
          </Link>
          <Link
            href="#"
            className="text-[#437099] hover:text-[#1977cc] transition-colors duration-300"
          >
            <BsFacebook />
          </Link>
          <Link
            href="#"
            className="text-[#437099] hover:text-[#1977cc] transition-colors duration-300"
          >
            <FaInstagram />
          </Link>
          <Link
            href="#"
            className="text-[#437099] hover:text-[#1977cc] transition-colors duration-300"
          >
            <FaLinkedin />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
