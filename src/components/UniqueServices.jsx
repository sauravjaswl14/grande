'use client';

import Image from 'next/image';

function UniqueServices() {
  return (
    <div className='mt-20 w-full flex justify-center'>
      <div className='flex space-x-10 items-center'>
        {/*  */}
        <div className='group w-[370px] rounded-xl shadow-lg bg-[#fff] hover:shadow-[#184861] hover:cursor-pointer hover:-translate-y-5 transition ease-in-out duration-200'>
          <div className='unique-service p-10 flex flex-col space-y-5'>
            <div className='relative'>
              <img src='/img/qualutyAndSafety.png' className='w-16 ' alt='' />
            </div>
            <h1 className='text-[24px] font-semibold text-[#363636]'>
              Quality & Safety
            </h1>
            <p className='text-[#666] max-2-xs'>
              Our Delmont hospital utilizes state of the art technology and
              employs a team of true experts.
            </p>
          </div>
        </div>
        {/*  */}
        <div className='group w-[370px] rounded-xl shadow-lg bg-[#fff] hover:shadow-[#184861] hover:cursor-pointer hover:-translate-y-5 transition ease-in-out duration-200'>
          <div className='unique-service p-10 flex flex-col space-y-5'>
            <div className='relative'>
              <img src='/img/leadingTech.png' className='w-16 ' alt='' />
            </div>
            <h1 className='text-[24px] font-semibold text-[#363636]'>
              Leading Technology
            </h1>
            <p className='text-[#666] max-2-xs'>
              Our Delmont hospital utilizes state of the art technology and
              employs a team of true experts.
            </p>
          </div>
        </div>
        {/*  */}
        <div className='group w-[370px] rounded-xl shadow-lg bg-[#fff] hover:shadow-[#184861] hover:cursor-pointer hover:-translate-y-5 transition ease-in-out duration-200'>
          <div className='unique-service p-10 flex flex-col space-y-5'>
            <div className='relative'>
              <img src='/img/experience-doctor.png' className='w-16 ' alt='' />
            </div>
            <h1 className='text-[24px] capitalize font-semibold text-[#363636]'>
              Experts by experience
            </h1>
            <p className='text-[#666] max-2-xs'>
              Our Delmont hospital utilizes state of the art technology and
              employs a team of true experts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default UniqueServices;
