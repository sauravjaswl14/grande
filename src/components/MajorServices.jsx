import Image from 'next/image';

function MajorServices() {
  return (
    <div className='mx-20 mt-20'>
      <div className='flex flex-col space-y-16 items-center'>
        <div className='flex flex-col space-y-4 items-center'>
          <div className='w-44 py-2 px-5 bg-white rounded-full text-[#238751] font-semibold flex justify-center items-center'>
            Our Services
          </div>
          <h2 className='text-[24px] font-semibold'>
            We Provide Various Directions
          </h2>
        </div>
        <div className='grid gap-6 grid-cols-4'>
          {/*  */}
          <div className='group relative'>
            <div className=' card h-[346px] bg-white p-10 rounded-2xl group-hover:cursor-pointer '>
              {/*  */}
              <div className=' flex flex-col space-y-3'>
                <img
                  src='/img/grande@home.png'
                  className='w-14 group-hover:scale-110 transition ease-in-out duration-200'
                  alt=''
                />
                <h2 className='text-xl font-semibold'>Grande @ Home</h2>
                <p className='max-w-[240px] pr-8 text-xs'>
                  Grande @ home is offering specialized home care services. Our
                  skilled medical team aims to deliver the best possible care to
                  patients at their home, thus eliminating their need to travel
                  to the hospital.
                </p>
              </div>

              {/*  */}
            </div>
            <div className='absolute bottom-0 -right-0 w-14 h-14 rounded-full bg-white flex justify-center items-center'>
              <img
                src='/img/arrow-up-svgrepo-com.svg'
                className='w-4 rotate-45 group-hover:scale-150 transition ease-in-out duration-200'
                alt=''
              />
            </div>
          </div>
          {/*  */}
          <div className='group relative'>
            <div className=' card h-[346px] bg-white p-10 rounded-2xl group-hover:cursor-pointer '>
              {/*  */}
              <div className=' flex flex-col space-y-3'>
                <img
                  src='/img/teleconsultation.png'
                  className='w-10 group-hover:scale-110 transition ease-in-out duration-200'
                  alt=''
                />
                <h2 className='text-xl font-semibold'>Tele Consultation</h2>
                <p className='max-w-[240px] pr-8 text-xs'>
                  Tele Consultation at Grande International Hospital allows the
                  patient who reside outside the valley to stay in touch with
                  their doctors. This service also helps patient who are unable
                  to travel to the hospital.
                </p>
              </div>

              {/*  */}
            </div>
            <div className='absolute bottom-0 -right-0 w-14 h-14 rounded-full bg-white flex justify-center items-center'>
              <img
                src='/img/arrow-up-svgrepo-com.svg'
                className='w-4 rotate-45 group-hover:scale-150 transition ease-in-out duration-200'
                alt=''
              />
            </div>
          </div>
          {/*  */}
          <div className='group relative'>
            <div className=' card h-[346px] bg-white p-6 *:rounded-2xl group-hover:cursor-pointer '>
              {/*  */}
              <div className=' flex flex-col space-y-3'>
                <img
                  src='/img/helicopter.png'
                  className='w-10 group-hover:scale-110 transition ease-in-out duration-200'
                  alt=''
                />
                <h2 className='text-xl font-semibold'>Heli Rescue</h2>
                <p className='max-w-[240px] pr-6 text-xs'>
                  Grande International Hospital is the first hospital in Nepal
                  to rescue patients by helicopter with specialist doctors. The
                  hospital has the capacity to operate two helipads (one rooftop
                  another ground helipad)at the same time. We have a dedicated
                  team for Emergency Rescue, Critical Illness Rescue, Mountain
                  Rescue from anywhere in the country.
                </p>
              </div>

              {/*  */}
            </div>
            <div className='absolute bottom-0 -right-0 w-14 h-14 rounded-full bg-white flex justify-center items-center'>
              <img
                src='/img/arrow-up-svgrepo-com.svg'
                className='w-4 rotate-45 group-hover:scale-150 transition ease-in-out duration-200'
                alt=''
              />
            </div>
          </div>
          {/*  */}
          <div className='group relative'>
            <div className=' card h-[346px] bg-white p-10 rounded-2xl group-hover:cursor-pointer '>
              {/*  */}
              <div className=' flex flex-col space-y-3'>
                <img
                  src='/img/personalizedTreatmentPlans.png'
                  className='w-10 group-hover:scale-110 transition ease-in-out duration-200'
                  alt=''
                />
                <h2 className='text-xl font-semibold'>Wards and Rooms</h2>
                <p className='max-w-[240px] pr-8 text-xs'>
                  Grande International Hospital wards and rooms are designed in
                  such a way that it meets its all basic requirement for every
                  patient admitted in the hospital.
                </p>
              </div>

              {/*  */}
            </div>
            <div className='absolute bottom-0 -right-0 w-14 h-14 rounded-full bg-white flex justify-center items-center'>
              <img
                src='/img/arrow-up-svgrepo-com.svg'
                className='w-4 rotate-45 group-hover:scale-150 transition ease-in-out duration-200'
                alt=''
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MajorServices;
