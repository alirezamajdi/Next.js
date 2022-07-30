import React from 'react'

export default function Index() {
  return (
    <div className='w-full md:w-1/2 lg:w-1/3 h-[390px] relative'>
      <div className='absolute top-[12%] w-[125px] h-[125px] left-[16%] rounded-tl-[81px] border-[2px] border-dashed border-[#006efd4c] border-r-0 border-b-0'></div>
      <div
        className='absolute bottom-0 left-0 h-[200px] w-[200px] bg-[#006FFD] rounded-[35px] overflow-hidden
        before:absolute before:content-[""] before:bg-[#FAFBFF] before:rounded-[50%] before:left-[40%] before:w-[200px] before:bottom-0 before:top-0 before:my-1 before:opacity-10'
      ></div>

      <div
        className='absolute top-0 right-0 h-[200px] w-[200px] bg-[#006FFD] rounded-[35px] 
        before:absolute before:content-[""] before:bg-[#FAFBFF] before:rounded-[50%] before:left-[40%] before:w-[200px] before:bottom-0 before:top-0 before:my-1 before:opacity-10'
      >
        <img
          className='w-[170px] h-[170px] rounded-full absolute right-[43%] z-1 top-[5%]'
          src='/img/unsplash_042Srn0-82o.png'
          alt=''
        />
      </div>

      <div className='absolute bottom-[12%] w-[125px] h-[125px] right-[16%] rounded-br-[81px] border-[2px] border-dashed border-[#006efd4c] border-l-0 border-t-0'></div>
    </div>
  )
}
