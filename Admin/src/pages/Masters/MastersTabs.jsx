import React, { useState } from "react";

import CustomTab from "../../components/UI/CustomTab";
import MainComponent from "./Tabs/Services";
import TestimonialsForm from "./Tabs/Testimonials";
import CareerForm from "./Tabs/Career";
import BlogsForm from "./Tabs/Blogs";
import TeamsForm from "./Tabs/Teams";
import NewsForm from "./Tabs/News";
import EventsForm from "./Tabs/Events";

import { data_M } from "../../components/json/Masters/masters";

const MastersTabs = () => {
  const [changeTab, setChangeTab] = useState(0);

  return (
    <>
      <nav className="">
        <ul className="p-2 w-max flex gap-2 bg-gray-200 justify-between border">
          {data_M.map((data, index) => (
            <CustomTab
              key={index}
              title={data.name}
              onClick={() => setChangeTab(index)}
              isActive={index === changeTab}
            />
          ))}
        </ul>
      </nav>
      <div className="mt-4">
        {changeTab === 0 && <MainComponent />}
        {changeTab === 1 && <CareerForm />}
        {changeTab === 2 && <TestimonialsForm />}
        {changeTab === 3 && <BlogsForm />}
        {changeTab === 4 && <TeamsForm />}
        {changeTab === 5 && <NewsForm />}
        {changeTab === 6 && <EventsForm />}
      </div>
    </>
  );
};

export default MastersTabs;
