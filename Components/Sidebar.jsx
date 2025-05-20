import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/images/Logo.png";
import { useNavigate } from 'react-router-dom';

import {
  LayoutDashboard,
  MessageSquare,
  Target,
  Users,
  Settings
} from "lucide-react";

const Sidebar = () => {
  const navLinkClass = ({ isActive }) =>
    isActive
      ? "flex items-center space-x-3 text-[#FCC378] bg-[#FFf] px-4 py-2 rounded-lg shadow-sm"
      : "flex items-center space-x-3 text-gray-400 px-4 py-2";


  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/'); // 👈 navigate to /about
  };

  

  return (
    <div className="bg-[#FFF4EF] pt-2 pl-6 ">
      <div className="mb-6">
        <img src={Logo} alt="Logo" />
      </div>

      {/* border-r */}
      <aside className="pt-3 w-64 bg-white  h-[100%]  max-h-[679px] rounded-bl-lg rounded-tl-lg">
        <nav className="flex flex-col space-y-2 mt-6 px-4">
          <NavLink to="Dashboard" className={navLinkClass}>
            <LayoutDashboard size={20} />
            <span>Dashboard</span>
          </NavLink>
          <NavLink to="AI_HealthCoach" className={navLinkClass}>
            <MessageSquare size={20} />
            <span>AI Health Coach</span>
          </NavLink>
          <NavLink to="Goals" className={navLinkClass}>
            <Target size={20} />
            <span>Goals</span>
          </NavLink>
          <NavLink to="Community" className={navLinkClass}>
            <Users size={20} />
            <span>Community</span>
          </NavLink>
          <NavLink to="Settings" className={navLinkClass}>
            <Settings size={20} />
            <span>Settings</span>
          </NavLink>
        </nav>
        <div className="absolute top-[700px] left-[40px]">
          
          <button
            // onClick={handleClick}
            className="px-4 py-2 border-[1px] text-[#FCC378] border-[#FCC378] w-[198px] h-[44px] font-[500] bold text-[18px]  rounded"
          >
            Signout
          </button>
        </div>
        <div class="relative h-[409px]">
          <div class="absolute  left-[242px] rounded-[500px] bottom-[120px] h-full border-r-4 border-[#FFE8DF]">

          </div>

        </div>
      </aside>
    </div>
  );
};

export default Sidebar;