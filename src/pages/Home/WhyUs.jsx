import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineChevronRight } from "react-icons/md";
import { RiFileList3Line } from "react-icons/ri";
import { IoCubeOutline } from "react-icons/io5";
import { BiImages } from "react-icons/bi";

const WhyUs = () => {
  return (
    <section id="why-us" className="py-12">
      <div className="container mx-auto">
        <div className="flex flex-wrap xl:items-center">
          <div className="w-full lg:w-1/3 flex items-stretch">
            <div className="bg-[#1977cc] p-8 rounded text-white">
              <h3 className="font-bold text-3xl mb-8">Why Choose Medilab?</h3>
              <p className="mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis
                aute irure dolor in reprehenderit Asperiores dolores sed et.
                Tenetur quia eos. Autem tempore quibusdam vel necessitatibus
                optio ad corporis.
              </p>
              <div className="text-center">
                <Link
                  to="#"
                  className="inline-flex items-center bg-white bg-opacity-20 hover:bg-white hover:text-[#1977cc] transition ease-in-out duration-400 py-2 px-8 rounded-full text-white"
                >
                  Learn More
                  <MdOutlineChevronRight className="text-sm" />
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-2/3 ">
            <div className="flex flex-col justify-center space-y-6">
              <div className="flex flex-wrap">
                <div className="w-full xl:w-1/3 flex items-stretch">
                  <div className="w-80 bg-white text-center rounded shadow-md p-10 flex flex-col items-center">
                    <RiFileList3Line className="text-4xl text-[#1977cc] mb-8" />
                    <h4 className="text-xl font-bold mb-8">
                      Corporis voluptates sit
                    </h4>
                    <p className="text-sm text-gray-500">
                      Consequuntur sunt aut quasi enim aliquam quae harum
                      pariatur laboris nisi ut aliquip
                    </p>
                  </div>
                </div>
                <div className="w-full xl:w-1/3 flex items-stretch">
                  <div className="w-80 bg-white text-center rounded shadow-md p-10 flex flex-col items-center">
                    <IoCubeOutline className="text-4xl text-[#1977cc] mb-8" />
                    <h4 className="text-xl font-bold mb-8">
                      Ullamco laboris ladore pan
                    </h4>
                    <p className="text-sm text-gray-500">
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt
                    </p>
                  </div>
                </div>
                <div className="w-full xl:w-1/3 flex items-stretch">
                  <div className="w-80 bg-white text-center rounded shadow-md p-10 flex flex-col items-center">
                    <BiImages className="text-4xl text-[#1977cc] mb-8" />
                    <h4 className="text-xl font-bold mb-8">
                      Labore consequatur
                    </h4>
                    <p className="text-sm text-gray-500">
                      Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut
                      maiores omnis facere
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
