import React, { useState } from "react";

import CustomTab from "../../components/UI/CustomTab";
import { data_SC } from "../../components/json/SecurityConsole/securityconsole";
import UsersForm from "../Security/Tabs/Users";
import RolesForm from "../Security/Tabs/Roles";

const SecurityTabs = () => {
  const [changeTab, setChangeTab] = useState(0);

  return (
    <>
      <nav className="">
        <ul className="p-2 w-max flex gap-2 bg-gray-200 justify-between border">
          {data_SC.map((data, index) => (
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
        {changeTab === 0 && <UsersForm />}
        {changeTab === 1 && <RolesForm />}
      </div>
    </>
  );
};

export default SecurityTabs;
