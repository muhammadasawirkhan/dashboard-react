import React, { useState } from 'react'; // <-- Add useState import
import img1 from '../../../assets/images/Logo.png';
import subtract from '../../../assets/images/subtract.png';
import { Eye, EyeOff } from 'lucide-react';
import { Link } from "react-router-dom";

export const New_password = () => {
    const [showPassword1, setShowPassword1] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);

    return (
        <>
            <div className='ml-[39.74px] mt-[40.11px]'>
                <img src={img1} alt="" />
            </div>

            <div className='mt-[50px] text-center '>
                <h1 className='text-[44px]'>Set New Password</h1>
            </div>

            <div className='space-y-[10px]'>
                {/* New Password Field */}
                <div className='mt-[120px] text-center'>
                    <p className='text-[14px] text-[#282828] mr-[260px]'>New Password</p>
                    <div className="relative inline-block w-[350px]">
                        <input
                            type={showPassword1 ? "text" : "password"}
                            placeholder="Enter your password"
                            className='h-[48px] bg-[#FFF4EF] w-full rounded-[8px] pt-[12px] pr-[45px] pb-[12px] pl-[16px] outline-none'
                            style={{ boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.15)' }}
                        />
                        <div
                            className="absolute top-1/2 right-[12px] transform -translate-y-1/2 cursor-pointer text-gray-600"
                            onClick={() => setShowPassword1(!showPassword1)}
                        >
                            {showPassword1 ? <EyeOff size={20} /> : <Eye size={20} />}
                        </div>
                    </div>
                </div>

                {/* Confirm New Password Field */}
                <div className='mt-[10px] text-center'>
                    <p className='text-[14px] text-[#282828] mr-[200px]'>Confirm New Password</p>
                    <div className="relative inline-block w-[350px]">
                        <input
                            type={showPassword2 ? "text" : "password"}
                            placeholder="Enter your password"
                            className='h-[48px] bg-[#FFF4EF] w-full rounded-[8px] pt-[12px] pr-[45px] pb-[12px] pl-[16px] outline-none'
                            style={{ boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.15)' }}
                        />
                        <div
                            className="absolute top-1/2 right-[12px] transform -translate-y-1/2 cursor-pointer text-gray-600"
                            onClick={() => setShowPassword2(!showPassword2)}
                        >
                            {showPassword2 ? <EyeOff size={20} /> : <Eye size={20} />}
                        </div>
                    </div>
                </div>

                {/* Continue Button */}
                <div className='mt-[10px] text-center'>
                    <Link to="/New_password">
                        <button className='h-[48px] bg-[#FCC378] w-[350px] rounded-[8px] p-[12px]'>Continue</button>
                    </Link>
                </div>

                {/* Background Image */}
                <div className='absolute top-[195px] left-[450px]  w-[805px] h-[583px] z-[-1]'>
                    <img src={subtract} alt="" />
                </div>

                {/* Get Back Button */}
                <div className='relative text-center top-[136px] right-[328px]'>
                    <Link to="/Verify_Code">
                        <button className='h-[48px] bg-[#FCC378] w-[128px] rounded-[8px] p-[12px]'>Get Back</button>
                    </Link>
                </div>
            </div>
        </>
    );
};
