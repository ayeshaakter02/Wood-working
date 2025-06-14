import React from 'react'

const Banner = () => {
  return (
    <div className='container mx-auto relative'>
        <div className='flex'>
            <div className="right pt-[138px] z-1">
                <h2 className='text-[30px] font-normal text-[#ffa86a] leading-[60px] font-forum'>Carving Art</h2>
                <h1 className='text-[150px] font-normal text-[#fffdee] leading-[150px] tracking-[-7px] text-left mt-[20px] mb-[30px] font-forum'>Bringing <br /> Wood to Life</h1>
                <p className='font-normal text-[20px] text-[#d6d4c8] w-[387px] font-inter pb-[300px]'>Expertly carved wooden sculptures and figurines that showcase the natural beauty and versatility of wood</p>
            </div>
            <div className='absolute ml-[570px] mt-[-20px]'>
                <img src="images/banner-img.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Banner