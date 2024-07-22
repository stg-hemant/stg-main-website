import React from "react";

import CustomTab from "../../components/UI/CustomTab";
import { data_M } from "../../components/json/Masters/masters";

const MastersTabs = () => {
  return (
    <>
      <nav className="">
        <ul className="mb-4 p-2 w-max flex gap-2 bg-gray-200 justify-between border">
          {data_M.map((data, index) => (
            <CustomTab key={index} title={data.name} link={data.link} />
          ))}
        </ul>
      </nav>
    </>
  );
};

export default MastersTabs;
