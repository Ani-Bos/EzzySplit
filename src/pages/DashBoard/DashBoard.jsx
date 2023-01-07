import React from "react";
import { Outlet } from "react-router-dom";
// import DashBoardContent from "../../components/DashBoardContent/DashBoardContent";
import SideNav from "../../components/Sidenav/SideNav";

const DashBoard = () => {
  return (
    <>
      <div className="flex justify-between">
        <div className=" bg-primary text-left">
          <SideNav />
        </div>
        <div className="bg-gray-300 min-h-screen w-full  ">
          {/* <DashBoardContent /> */}
          <Outlet/>
        </div>
        <div className=" w-1/3 bg-primary text-left">
          <div className="p-10"></div>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
