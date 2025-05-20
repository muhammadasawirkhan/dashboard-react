import React, { useState } from 'react';
import img1 from '../../../assets/images/Logo.png';
import subtract from '../../../assets/images/subtract.png';
import { Eye, EyeOff } from "lucide-react"

import { Link } from "react-router-dom";



export const Signin = () => {

  const [showPassword, setShowPassword] = useState(false);

  return (
    <>

      <div className='ml-[39.74px] pt-[40.11px]' >
        <img src={img1} alt="" />

      </div>
      <div className='mt-[0px] text-center '>
        <h1 className='text-[44px]'>Sign in</h1>
      </div>
      <div className='space-y-[10px] '>
        <div className='pt-[120px] text-center'>
          <p className='text-[14px] text-[#282828] mr-[260px]'>Email address </p>
          <input type="text" placeholder='Enter your email address' className='h-[48px] w-[350px] bg-[#FFF4EF] rounded-[8px] pt-[12px] pr-[16px] pb-[12px] pl-[16px] outline-none ' style={{ boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.15)' }} />
        </div>
        <div className='mt-[10px] text-center'>
          <p className='text-[14px] text-[#282828] mr-[290px]'>Password</p>
          <div className='relative inline-block w-[350px]'>
            <input type={showPassword ? "text" : "password"} placeholder='Enter your password' className='h-[48px] bg-[#FFF4EF] w-[100%] rounded-[8px] pt-[12px] pr-[16px] pb-[12px] pl-[16px] outline-none' style={{ boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.15)' }} />
            <div
                                        className="absolute top-1/2 right-[12px] transform -translate-y-1/2 cursor-pointer text-gray-600"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                    </div>
            
          </div>
          
        </div>
        <div className='mt-[10px] text-center'>
          <Link to="/Dashboard">
          <button className='h-[48px] bg-[#FCC378] w-[350px] rounded-[8px] p-[12px]'>Sign in</button>
          </Link>
        </div>
        <div className='flex flex-wrap mx-auto w-[350px] justify-between'>
          <div className='mt-[10px]'>
            <Link to="/Password_recovery" className="hover:underline">Forgot your password?</Link>
          </div>
          <div className='mt-[10px] text-[red]'>
            <Link to="/signup" className="hover:underline">Signup</Link>
          </div>
        </div>
      </div>
      {/* <div  className='absolute sm:top-[185px]  lg:top-[175px] lg:left-[450px]   lg:w-[805px] lg:h-[583px] z-[-1]'>
        <img src={subtract} alt="" />
      </div> */}
      <div  className='background-image-container'>
        <img src={subtract} alt="" />
      </div>


    </>
  );

}
