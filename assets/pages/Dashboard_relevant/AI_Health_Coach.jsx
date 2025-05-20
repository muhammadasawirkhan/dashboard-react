import React from "react";


import { Outlet } from "react-router-dom";
import Sidebar from "../../../Components/Sidebar";

export default function AI_Health_Coach() {
  return (
    <div style={{ display: "flex" }}>
      {/* <Sidebar/> */}
      <div style={{ marginLeft: "20px", padding: "1rem" }}>
        <h2 className="font-avenir text-[#FCC378] text-[24px] bold">AI healh coach</h2>
        
        <Outlet /> {/* Renders child routes here */}
      </div>
    </div>
  );
}
    