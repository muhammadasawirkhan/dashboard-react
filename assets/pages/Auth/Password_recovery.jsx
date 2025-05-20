import React from 'react'
import img1 from '../../../assets/images/Logo.png';
import { Link } from "react-router-dom";
import subtract from '../../../assets/images/subtract.png';


export const Password_recovery = () => {
    return (
        <>
            <div className='ml-[39.74px] mt-[40.11px]' >
                <img src={img1} alt="" />

            </div>

            <div className='mt-[50px] text-center '>
                <h1 className='text-[44px]'>Password Recovery</h1>
            </div>

            <div className='space-y-[10px]'>
                <div className='mt-[150px] text-center'>
                    <p className='text-[14px] text-[#282828] mr-[260px]'>Email address </p>
                    <input type="text" placeholder='Enter your email address' className='h-[48px] bg-[#FFF4EF] w-[350px] rounded-[8px] pt-[12px] pr-[16px] pb-[12px] pl-[16px] outline-none ' style={{ boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.15)' }} />
                </div>
                <div className='mt-[10px] text-center'>
                    <Link to="/Verify_Code">
                    <button className='h-[48px] bg-[#FCC378] w-[350px] rounded-[8px] p-[12px]'>Continue</button>
                    </Link>
                </div>
            </div>
            <div className='absolute top-[205px] left-[450px]  w-[805px] h-[583px] z-[-1]'>
                <img src={subtract} alt="" />
            </div>
            <div className='relative text-center top-[196px] right-[328px]'>
                <Link to="/">
                    <button className='h-[48px] bg-[#FCC378] w-[128px] rounded-[8px] p-[12px]'>Get Back</button>
                    </Link>
                </div>

        </>
    )
}
