import React from "react";

const Navbar = () => {
  return (
    <>
    <div className="bg-[#FFF4EF]">
    <header className="bg-white shadow-md -ml-[16px] w-[1400px] px-6 mt-[16px] py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-gray-800">My Dashboard</h1>
      <div className="text-sm text-gray-600">Logged in as <strong>User</strong></div>
    </header>
    </div>
    </>
  );
};

export default Navbar;
