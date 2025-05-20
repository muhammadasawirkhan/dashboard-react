import React from 'react';
import tick from "../../images/tick.png"


export const GoalStatus = ({ time, text, duration, goal_status,variant  }) => {
  
  
  
  return (
    <div className='flex mb-[125px] ml-[4px] lg:mt-[2px] lg:ml-[4px] sm:mb-[125px] sm:ml-[4px]'>
      <div className={` ${variant?'ml-[30px] -mt-[80px]':'ml-[30px] mt-[30px]'}`}>
        <h1 className='text-[#2828284D] text-[20px]'>{time}</h1>
      </div>
     <div className={`flex flex-wrap  w-[500px] sm:max-w-[400px]  lg:max-w-[981px] lg:w-[981px] h-[96px] ${variant ?'bg-[#FFF4EF] -mt-[110px]':'bg-[#FFF4EF]'}  mx-auto justify-between rounded-[16px] ml-[20px]`}>

        <div>
          <p className='font-bold text-[22px] mt-[20px] ml-[20px]'>{text}</p>
          <p className='text-[18px] ml-[20px]'><span className='text-[#F16A77]'>Duration:</span> {duration}</p>
        </div>
        <div className='flex bg-[#02D86D1A] w-[155px] h-[38px] p-[4px] mr-[30px] mt-[30px] rounded-[9px] mx-auto justify-between'>
          <div className='mt-[5px] h-[16px] w-[16px]'>
          <img src={tick} alt="" />
          </div>
          <div className='mr-[10px]'>
        <p className='text-[#02D86D] text-[16px]'>{goal_status}</p>
        </div>
        </div>
      </div>
    </div>
  );
}

export default GoalStatus;
