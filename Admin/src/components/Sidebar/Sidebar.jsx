import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import SideLink from "./SideLink";

import { sidebar_data } from "../json/Sidebar/sidebar";
import { authActions } from "../../store/slices/authSlice";
import Button from "../UI/Buttons";

const Sidebar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logoutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");

    dispatch(authActions.isLogout());
    navigate("/");
  };

  return (
    <aside className="h-screen fixed w-56 bg-gray-100">
      <h2 className="pt-4 font-bold text-xl text-center">ST Global Tech</h2>
      <ul className="p-2 text-white flex flex-col justify-center gap-4">
        <SideLink sidebarData={sidebar_data} />
        <Button type="button" onClick={logoutHandler}>
          Logout
        </Button>
      </ul>
    </aside>
  );
};

export default Sidebar;
