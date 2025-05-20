import React from "react";


import { Outlet } from "react-router-dom";
import Sidebar from "../../../Components/Sidebar";

export default function Community() {
  return (
    <div style={{ display: "flex" }}>
      {/* <Sidebar/> */}
      <div style={{ marginLeft: "20px", padding: "1rem" }}>
        <div className="flex justify-between w-[1330px]">
          <div>
            <h2 className="font-avenir text-[#FCC378] text-[24px] bold">Community</h2>
          </div>
          <div>
            <h2 className="font-avenir text-[#FCC378] text-[24px] bold">Community</h2>
          </div>
        </div>
        <Outlet /> {/* Renders child routes here */}
      </div>
    </div>
  );
}
