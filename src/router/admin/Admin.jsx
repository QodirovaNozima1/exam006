import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import photo from '../../assets/komonavt.png'

const Admin = () => {
  return (
    <div className="flex">
      <div className="flex flex-col items-center w-80 h-screen bg-[#bdf6d3] pt-6 gap-4">
        <b className="text-2xl text-[#545353] ">Admin</b>
        <NavLink className={" w-full text-center text-2xl text-[#575757]"} to="manage">
          <p>Manage</p>
        </NavLink>
        <NavLink className={" w-full text-center text-2xl text-[#575757] "} to="name">
          <p>Messages</p>
        </NavLink>
      </div>
      <Outlet/>
    </div>
  );
};

export default Admin;