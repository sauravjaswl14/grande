// 'use client';

import Image from 'next/image';

function Keypoints() {
  return (
    <div className='flex items-center ml-20 space-x-10'>
      <div className='lg:w-[50%] flex flex-col space-y-5'>
        <div className='flex items-center px-5 py-2 space-x-5 transition duration-200 ease-in-out bg-white rounded-md shadow-xl hover:scale-110'>
          <Image src='/img/point.png' width={35} height={35} alt='' />
          <p className='text-[#184861]'>
            A Rooftop Helipad provides for efficient and quick patient rescue.
          </p>
        </div>
        <div className='flex items-center px-5 py-2 space-x-5 transition duration-200 ease-in-out bg-white rounded-md shadow-xl hover:scale-110'>
          <Image src='/img/point.png' width={35} height={35} alt='' />
          <p className='text-[#184861]'>
            GIH is specially designed for wheelchair accessibility so navigation
            is easy and nothing is out of reach for our wheelchair bound guests.
          </p>
        </div>
        <div className='flex items-center px-5 py-2 space-x-5 transition duration-200 ease-in-out bg-white rounded-md shadow-xl hover:scale-110'>
          <Image src='/img/point.png' width={35} height={35} alt='' />
          <p className='text-[#184861]'>
            Fire Fighting System which includes central sprinkler system, fire
            resistant doors to hold fire up 2 hours and fire detection
            monitoring system where a fire has ignited.
          </p>
        </div>
        <div className='flex items-center px-5 py-2 space-x-5 transition duration-200 ease-in-out bg-white rounded-md shadow-xl hover:scale-110'>
          <Image src='/img/point.png' width={35} height={35} alt='' />
          <p className='text-[#184861]'>
            Earthquake Resistance for up to 8 Richter Scale Two 1250 KV
            Electrical Generators for Electrical backup and two Central UPS
            System 100 % back up
          </p>
        </div>
        <div className='flex items-center px-5 py-2 space-x-5 transition duration-200 ease-in-out bg-white rounded-md shadow-xl hover:scale-110'>
          <Image src='/img/point.png' width={35} height={35} alt='' />
          <p className='text-[#184861]'>
            CSSD (Central Sterile Supplies Department) The sterilization system
            is the latest technology. The system helps minimize hospital
            Infection by providing supplies of sterile instruments, linen packs,
            dressing and other sterile items used in patient care.
          </p>
        </div>
        <div className='flex items-center px-5 py-2 space-x-5 transition duration-200 ease-in-out bg-white rounded-md shadow-xl hover:scale-110'>
          <Image src='/img/point.png' width={35} height={35} alt='' />
          <p className='text-[#184861]'>
            Reverse Osmosis Water Purification System.
          </p>
        </div>
        <div className='flex items-center px-5 py-2 space-x-5 transition duration-200 ease-in-out bg-white rounded-md shadow-xl hover:scale-110'>
          <Image src='/img/point.png' width={35} height={35} alt='' />
          <p className='text-[#184861]'>
            Complete Waste Management and Disposal System.
          </p>
        </div>
        <div className='flex items-center px-5 py-2 space-x-5 transition duration-200 ease-in-out bg-white rounded-md shadow-xl hover:scale-110'>
          <Image src='/img/point.png' width={35} height={35} alt='' />
          <p className='text-[#184861]'>
            The Wellness Center– to help promote general health and in early
            disease detection and early intervention.
          </p>
        </div>
        <div className='flex items-center px-5 py-2 space-x-5 transition duration-200 ease-in-out bg-white rounded-md shadow-xl hover:scale-110'>
          <Image src='/img/point.png' width={35} height={35} alt='' />
          <p className='text-[#184861]'>
            Double Glazed Windows for sound and heat insulation.
          </p>
        </div>
        <div className='flex items-center px-5 py-2 space-x-5 transition duration-200 ease-in-out bg-white rounded-md shadow-xl hover:scale-110'>
          <Image src='/img/point.png' width={35} height={35} alt='' />
          <p className='text-[#184861]'>Industrial Size Laundry</p>
        </div>
        <div className='flex items-center px-5 py-2 space-x-5 transition duration-200 ease-in-out bg-white rounded-md shadow-xl hover:scale-110'>
          <Image src='/img/point.png' width={35} height={35} alt='' />
          <p className='text-[#184861]'>
            High standard restaurant with hygienic food.
          </p>
        </div>
      </div>

      <div className='lg:w-[50%] flex space-x-5'>
        <div className='flex flex-col space-y-5'>
          <Image
            src='/img/images/4.jpg'
            className='rounded-md'
            width={300}
            height={300}
          />
          <Image
            src='/img/images/2.jpg'
            className='-mt-10 rounded-md'
            width={300}
            height={300}
          />
        </div>
        <Image
          src='/img/images/About-Us-640x426.jpg'
          className='-mt-10 rounded-md'
          width={300}
          height={300}
        />
      </div>
    </div>
  );
}
export default Keypoints;
