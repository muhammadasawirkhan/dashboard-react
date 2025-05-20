import React from 'react'





export const Chartfigures = ({ img, number, text,iszero,isfirst,issecond }) => {
    return (
        <>
            <div className='flex sm:block sm:w-[340px]  lg:w-[240px] lg:h-[217px] border-[1px] border-b-[10px] lg:mt-[20px] sm:mt-[5px] sm:ml-[100px]  lg:ml-[5px] rounded-[16px] border-[#FFC6AF]'style={{
    boxShadow: '0 0 4px 0  rgba(252, 195, 120, 0.25)',
  }}>
                <div className='flex'>
                    <div className='sm:mt-[30px] sm:ml-[10px] lg:mt-[60px] lg:ml-[23px]'>
                        <img src={img} alt="" />
                    </div>
                    <div className='block sm:mt-[30px] sm:ml-[10px] lg:mt-[60px] lg:ml-[10px] '>
                        <div className='font-normal text-[18px]'>

                            <h1 className='font-normal text-[18px]'>{text}</h1>
                        </div>
                        <div>
                            <h1 className={`font-[750] text-[26px] ${iszero?'text-[#FFC6AF] ':''} ${isfirst?'text-[#86FFCF] ':''}  ${issecond?'text-[#F16A77]':''}`}>{number}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
