'use client';

import Image from 'next/image';

import React from 'react';

function AboutImage() {
  const data = [
    {
      imgelink: '/img/images/grande-mainview-2-scaled-1-1.jpeg',
    },
    {
      imgelink: '/img/images/Heli.jpg',
    },
    {
      imgelink: '/img/images/2.jpg',
    },
    {
      imgelink: '/img/images/2-100008.jpg',
    },
    {
      imgelink: '/img/images/3.jpg',
    },
  ];

  const [active, setActive] = React.useState(
    '/img/images/grande-mainview-2-scaled-1-1.jpeg'
  );

  return (
    <div className='grid gap-4'>
      <div>
        <img
          className='h-auto w-full max-w-full rounded-lg object-cover object-center md:h-[480px]'
          src={active}
          alt=''
        />
      </div>
      <div className='grid grid-cols-5 gap-4'>
        {data.map(({ imgelink }, index) => (
          <div key={index}>
            <img
              onClick={() => setActive(imgelink)}
              src={imgelink}
              className='w-[120px] h-20 max-w-full cursor-pointer rounded-lg object-cover object-center'
              alt='gallery-image'
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function About() {
  return (
    <div className='m-20'>
      <div>
        <div className='flex flex-col space-y-5 lg:space-y-0 lg:flex-row lg:space-x-20 lg:items-center'>
          {/*  */}
          <AboutImage />

          {/*  */}
          <div className='flex flex-col space-y-5'>
            <div className='w-44 uppercase text-[#238751] font-semibold bg-white shadow-xl rounded-full py-2 px-5 flex justify-center items-center'>
              About us
            </div>

            <h2 className='text-3xl font-semibold text-[#181a17]'>
              Start your healthy lifetoday with us
            </h2>

            <p className='max-w-lg'>
              Grande International Hospital was created with the vision to fill
              an existing void in the Nepali healthcare industry. It is
              dedicated to the seamless delivery of quality, patient-centric
              healthcare which means supplying everything a patient may need,
              from acute critical care to rehabilitation to transitional care to
              home healthcare services at an affordable cost. Our goal is to
              establish in this country a culture of continuous improvement in
              healthcare not only by providing excellent healthcare services but
              also by conducting community health education seminars, outreach
              programs, and wellness programs in several parts of Nepal.
            </p>

            <p className='max-w-lg'>
              The hospital is a 200 bedded, state of the art health care
              facility offering a wide range of medical, surgical and diagnostic
              services. The hospital has special features like a Wellness Center
              to help our community stay healthy. With latest in technology and
              a network of qualified physicians and staff, Grande International
              Hospital is your destination for the best healthcare services the
              country has to offer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
