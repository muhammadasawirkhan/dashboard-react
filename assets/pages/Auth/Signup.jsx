import React, { useState } from 'react';
import img1 from '../../../assets/images/Logo.png';
import { Link } from "react-router-dom";
import subtract from '../../../assets/images/subtract.png';
import { Eye, EyeOff } from "lucide-react"


export const Signup = () => {
    const [showPassword1, setShowPassword1] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);
    return (
        <>
            <div className='ml-[39.74px] mt-[40.11px]' >
                <img src={img1} alt="" />

            </div>

            <div className='mt-[50px] text-center '>
                <h1 className='text-[44px]'>Sign Up</h1>
            </div>
            <div className='space-y-[10px]'>
                <div className='mt-[100px] text-center'>
                    <p className='text-[14px] text-[#282828] mr-[260px]'>Email address </p>
                    <input type="text" placeholder='Enter your email address' className='h-[48px] bg-[#FFF4EF] w-[350px] rounded-[8px] pt-[12px] pr-[16px] pb-[12px] pl-[16px]  ' style={{ boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.15)' }} />
                </div>
                <div className='mt-[10px] text-center'>
                    <p className='text-[14px] text-[#282828] mr-[290px]'>Password</p>
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
                <div className='mt-[10px] text-center'>
                    <p className='text-[14px] text-[#282828] mr-[230px]'> Confirm Password</p>
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
                <div className='mt-[10px] text-center'>
                    <button className='h-[48px] bg-[#FCC378] w-[350px] rounded-[8px] p-[12px]'>Sign up</button>
                </div>
                <div className='flex flex-wrap mx-auto w-[350px]'>

                    <div className='mt-[10px] text-[red] ml-[300px]'>
                        <Link to="/" className="hover:underline">Signin</Link>
                    </div>
                </div>
            </div>
            <div className='absolute top-[205px] left-[450px]  w-[805px] h-[583px] z-[-1]'>
                <img src={subtract} alt="" />
            </div>

        </>
    )
}
