import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { AlarmClock, Bell,Search} from 'lucide-react';
import Sidebar from '../../../Components/Sidebar';
import profile from "../../../assets/images/profile.png";
import group1 from "../../images/group1.png";
import GoalstatusA from './goalstatusA';

export const Goals = () => {
  const GoalsList = [
    { heading: 'Headache release', duration: '07 days', loadingbar: '60 % Complete' },
    { heading: 'Back pain relief', duration: '14 days', loadingbar: '60 % Complete' },
    { heading: 'Sleep improvement', duration: '10 days', loadingbar: '60 % Complete' },

  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex + 2 < GoalsList.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  

  return (
    <div className='block'>
      {/* Header */}
      <div className="flex flex-wrap mx-auto sm:w-[550px] sm:mr-[900px] lg:mr-[30px] mt-[10px] lg:w-[1330px] justify-between">
        <div className='mt-[10px]'>
          <h2 className="font-avenir text-[#FCC378] text-[24px] bold">Goals</h2>
        </div>
        <div className="flex w-[157px] h-[61px] bg-[#fff] shadow-md rounded-[30px]">
          <AlarmClock className="text-orange-300 w-[27.26px] h-[27.4px] mt-[20px] ml-[14px]" />
          <Bell className="text-gray-500 w-[27.26px] h-[27.4px] mt-[22px] ml-[12px]" />
          <div className="w-[35px] h-[35px] mt-[14px] ml-[14px]">
            <img src={profile} alt="profile" />
          </div>
        </div>
      </div>

      {/* Goals Count and Add */}
      <div className="flex mt-[30px] justify-between w-full max-w-[1115px] mx-auto px-4">
        <div className='flex'>
          <div className='mt-[10px] -ml-[110px]'>
            <img src={group1} alt="group1" />
          </div>
          <div className='ml-[10px]'>
            <h1 className='text-[18px] font-[600]'>Goals in Progress</h1>
            <p className='text-[24px] text-[#FFC6AF] font-[400]'>03</p>
          </div>
        </div>
        <div className='-mr-[120px]'>
          <button className='bg-[#FCC378] w-[158px] h-[49px] rounded-[10px] text-white'>+ Add goal</button>
        </div>
      </div>

      <Outlet />

      {/* Carousel Container */}
      <div className="relative w-full  mx-auto mt-[10px] overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 45}%)` // slide cards
          }}
        >
          {GoalsList.map((goal, index) => (
            <div key={index} className="min-w-[45%]  flex-shrink-0">
              <GoalstatusA
                heading={goal.heading}
                duration={goal.duration}
                btn={goal.btn}
                loadingbar={goal.loadingbar}
                zero={index === 0}
                first={index === 1}
                second={index === 2}
              />
            </div>
          ))}
        </div>

        {/* Pagination Buttons */}
        <div className="flex justify-center mt-4 gap-4">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`px-4 py-2 rounded bg-[#FCC378] text-white ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            ←
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex + 2 >= GoalsList.length}
            className={`px-4 py-2 rounded bg-[#FCC378] text-white ${currentIndex + 2 >= GoalsList.length ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            →
          </button>
        </div>
        <div className="flex mt-[10px] justify-between w-full max-w-[1115px] mx-auto px-4">
          <div className='flex'>
            <div className='mt-[10px] -ml-[110px]'>
              <img src={group1} alt="group1" />
            </div>
            <div className='ml-[10px]'>
              <h1 className='text-[18px] font-[600]'>Completed Goals</h1>
              <p className='text-[24px] text-[#FFC6AF] font-[400]'>07</p>
            </div>
          </div>
          <div className='-mr-[120px]  flex gap-2'>
            <div className=' w-full mt-[0px] '>
              <Search className="absolute bottom-[30px] text-gray-500 w-[27.26px] h-[27.4px] mt-[22px] ml-[12px]" />
              <input type="text" className='p-4 pl-10 rounded-[5px] bg-[#FFF4EF] h-[38px] w-[337px] outline-none ' placeholder='search goal' />
            </div>
            <div>
            <button className='bg-[#FCC378] w-[38px] h-[38px] rounded-[10px] text-white'></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
