import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar";

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex h-[100%] bg-white text-gray-800">
      {/* Sidebar for desktop */}
      <div className="hidden md:block bg-[#FFF4EF]">
        <Sidebar />
      </div>

      {/* Sidebar drawer for mobile */}
      <div
        className={`md:hidden fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Sidebar onClose={() => setIsSidebarOpen(false)} />
      </div>

      {/* Overlay for drawer */}
      {/* {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 md:hidden z-40"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )} */}

      {/* Toggle button visible only on mobile */}
      <button
        className="absolute top-4 left-4 z-50 p-2 rounded md:hidden  "
        onClick={toggleSidebar}
      >
        ☰
      </button>

      {/* Right side content */}
      <div className="flex  flex-col flex-1">
        <div className="bg-[#FFF4EF] pt-[20px] pb-[30px]">
          <main className="flex-1 sm:ml-[30px] lg:-ml-[16px] sm:w-[61 0px] sm:w-[600px] lg:w-[1400px] h-[750px] overflow-auto bg-white rounded-tl-lg rounded-tr-lg rounded-br-lg">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default Layout;
