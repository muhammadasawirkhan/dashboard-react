import React from 'react';

export const GoalstatusA = ({ heading, duration, btn, loadingbar, zero, first, second }) => {
    return (
        <>
            <div
                className={`relative overflow-hidden mt-[10px] w-full max-w-[538px] h-[152px] border-b-[10px] border-[#FFC6AF] rounded-[16px] shadow-[0_0_4px_0_#000000]
                ${zero ? 'ml-[35px]' : ''}
                ${first ? '-ml-[35px]' : ''}
                ${second && !first ? '-ml-[35px]' : ''}
                ${!zero && !first && !second ? 'ml-[35px]' : ''} 
                ${second ? '-ml-[105px]' : ''}
                `}
            >

                {/* Background Shape */}
                <div
                    className="absolute top-0 left-0 w-full h-[90px] bg-[#FFF1EC] z-0"
                    style={{ clipPath: "polygon(0 0, 100% 0, 100% 80%, 55% 100%, 45% 100%, 0 80%)" }}

                ></div>

                {/* Card Content */}
                <div className='relative z-10 flex mx-auto justify-between p-4'>
                    <div>
                        <h1 className='font-[700] text-[22px]'>{heading}</h1>
                        <p className='font-[400] text-[18px]'>
                            <span className='text-[#FCC378] font-[400] text-[18px]'>Duration: </span>{duration}
                        </p>
                    </div>
                    <div className='mt-[10px]'>
                        <button className='w-[112px] h-[32px] bg-[#FCC378] text-[#fff] pr-[10px] pl-[10px] pt-[4px] pb-[4px] rounded-[6px]'>Add Reminder</button>
                    </div>
                </div>
                <div className="max-w-[507px] mx-auto w-full bg-gray-200 rounded-full h-[23px] overflow-hidden">
                    <div className="bg-[#F16A77] h-full rounded-full" style={{ width: '60%' }}><p className='ml-[160px] text-[#fff] '>{loadingbar}</p></div>
                </div>

            </div>
        </>
    );
};

export default GoalstatusA;
