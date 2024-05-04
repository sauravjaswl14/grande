import React from 'react';
import Link from 'next/link';

export function FeaturedImageGallery() {
  const data = [
    {
      imgelink: '/img/images/500007.jpg',
    },
    {
      imgelink: '/img/images/500006.jpg',
    },
    {
      imgelink: '/img/images/About-Us-640x426.jpg',
    },
    {
      imgelink: '/img/images/2-1000010.jpg',
    },
    {
      imgelink: '/img/images/700004.jpg',
    },
  ];

  const [active, setActive] = React.useState('/img/images/500007.jpg');

  return (
    <div className='p-10 flex flex-col space-y-8 lg:items-center'>
      <div className='flex flex-col mb-10 space-y-16 lg:items-center'>
        <div className='w-56 py-2 px-5 text-[#238751] flex justify-center items-center bg-white rounded-full font-semibold'>
          Image/video Gallery
        </div>
        <div>
          <div className='flex space-x-20'>
            <div className='w-1/2 flex flex-col space-y-5'>
              <div className=' flex flex-col space-y-5 items-end lg:space-y-0 lg:flex-row lg:justify-between lg:items-center'>
                <h2 className='text-xs  lg:text-2xl font-semibold'>
                  Image Gallery
                </h2>

                <Link
                  href='#'
                  className=' w-fit flex justify-center items-center font-semibold py-2 px-5 whitespace-nowrap rounded-md bg-[#238751] hover:bg-[#184861] text-white transition ease-in-out duration-200'
                >
                  Explore Image Gallery
                </Link>
              </div>
              <div className=' grid gap-4'>
                <div>
                  <img
                    className='h-auto w-full max-w-full rounded-lg object-cover object-center md:h-[480px]'
                    src={active}
                    alt=''
                  />
                </div>
                <div className='grid grid-cols-5 gap-2'>
                  {data.map(({ imgelink }, index) => (
                    <div key={index}>
                      <img
                        onClick={() => setActive(imgelink)}
                        src={imgelink}
                        className='h-40 w-60 max-w-full cursor-pointer rounded-lg object-cover object-center'
                        alt='gallery-image'
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className='w-1/2 flex flex-col space-y-5'>
              <div className=' flex flex-col space-y-5 items-end lg:space-y-0 lg:flex-row lg:justify-between lg:items-center'>
                <h2 className='text-lg lg:text-2xl font-semibold'>
                  Video Gallery
                </h2>

                <Link
                  href='#'
                  className=' w-fit flex justify-center items-center font-semibold py-2 px-5 rounded-md bg-[#238751] hover:bg-[#184861] text-white transition ease-in-out duration-200'
                >
                  Explore Video gallery
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
