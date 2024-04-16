import React from 'react';
import Link from 'next/link';
import Video from 'next-video';
// import Video from '../../videos/Video.mp4';

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
      imgelink: '/img/images/700003.jpg',
    },
    {
      imgelink: '/img/images/700004.jpg',
    },
  ];

  const [active, setActive] = React.useState('/img/images/500007.jpg');

  return (
    <div className='flex flex-col space-y-8 items-center'>
      <div className='flex flex-col mb-10 space-y-8 items-center'>
        <div className='w-56 py-2 px-5 text-[#238751] flex justify-center items-center bg-white rounded-full font-semibold'>
          Image Gallery
        </div>

        <div className='px-40 w-screen flex justify-between items-center'>
          <h2 className='text-2xl font-semibold'>
            Visualizing Health: Stunning Snapshots of Medical Breakthroughs
          </h2>

          <Link
            href='#'
            className='text-[#238751] font-semibold py-2 px-5 bg-white rounded-full hover:bg-[#238751] hover:text-white transition ease-in-out duration-200'
          >
            Explore Gallery
          </Link>
        </div>
      </div>
      <div className='m-10 flex space-x-5 items-center'>
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
        <div className='flex flex-col space-y-5'>
          <Video src='../../videos/Video.mp4' />
        </div>
      </div>
    </div>
  );
}
