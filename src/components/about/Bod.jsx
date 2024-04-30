'use client';

import Image from 'next/image';

const bod = [
  { name: 'Er. Deepak Kunwar', designation: 'chairman' },
  { name: 'Er. Bijay Rajbhandary', designation: 'director' },
  { name: 'Ms. Mira Adhikari', designation: 'director' },
  { name: 'Mr. Pankaj Baskota', designation: 'director' },
  { name: 'Mr. Phurpa Dorje Lama', designation: 'director' },
  { name: 'Mr. Sunil Ram Vaidhya', designation: 'director' },
];

function BoardOfDirectors() {
  return (
    <div className='m-20 flex flex-col-reverse space-y-5 lg:space-y-0 lg:flex-row lg:justify-between lg:items-center'>
      <div className='grid grid-cols-2 gap-6'>
        {bod.map((bodMember) => {
          let { name, designation } = bodMember;
          return (
            <div className='w-full lg:w-[400px] flex flex-col rounded-b-lg shadow-md'>
              <div className='w-full py-3 flex justify-center items-center bg-[#238751] text-white'>
                <p className='text-xl font-bold capitalize'>{designation}</p>
              </div>
              <div className='w-full flex justify-center items-center bg-white rounded-b-lg p-10 '>
                <p className='capitalize'>{name}</p>
              </div>
            </div>
          );
        })}
      </div>
      <Image
        src='/img/bod.jpg'
        width={612}
        height={304}
        className='rounded-md'
      />
    </div>
  );
}
export default BoardOfDirectors;
