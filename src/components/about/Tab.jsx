function Tab() {
  return (
    <div className='m-10 mt-20'>
      <div className='flex flex-col space-y-5 lg:space-y-0 lg:flex-row lg:space-x-10 lg:justify-center'>
        {/*  */}
        <div className=' group relative'>
          <div className='lg:w-[446px] card bg-white shadow-xl p-10 rounded-xl group-hover:cursor-pointer'>
            <div className='flex flex-col space-y-16'>
              <div className='flex flex-col space-y-5 divide-y-2'>
                <img src='/img/doctor-icon.png' className='w-10' alt='' />
                <h2 className='pt-3 text-[#184861] text-[26px] font-semibold'>
                  Our Doctors
                </h2>
              </div>

              <p className='text-[#6e778c] pr-4 text-sm max-w-[200px]'>
                Select a doctor and schedule an appointment
              </p>
            </div>
          </div>
          <div className='flex justify-center items-center absolute -bottom-3 -right-2 lg:-bottom-5 lg:right-5 w-16 h-16 rounded-full bg-white'>
            <img
              src='/img/arrow-up-svgrepo-com.svg'
              className='w-6 rotate-45 group-hover:scale-125 transition ease-in-out duration-200'
              alt=''
            />
          </div>
        </div>
        {/*  */}
        <div className=' group relative'>
          <div className='lg:w-[446px] card bg-white shadow-xl p-10 rounded-xl group-hover:cursor-pointer'>
            <div className='flex flex-col space-y-16'>
              <div className='flex flex-col space-y-5 divide-y-2'>
                <img src='/img/calendar-green.png' className='w-10' alt='' />
                <h2 className='pt-3 text-[#184861] text-[26px] font-semibold'>
                  Appointments
                </h2>
              </div>

              <p className='text-[#6e778c]  text-sm max-w-[200px]'>
                Call +977-1-5159266 or click to request an appointment
              </p>
            </div>
          </div>
          <div className='flex justify-center items-center absolute -bottom-3 -right-2 lg:-bottom-5 lg:right-5 w-16 h-16 rounded-full bg-white'>
            <img
              src='/img/arrow-up-svgrepo-com.svg'
              className='w-6 rotate-45 group-hover:scale-125 transition ease-in-out duration-200'
              alt=''
            />
          </div>
        </div>
        {/*  */}
        <div className=' group relative'>
          <div className=' lg:w-[446px] card bg-white shadow-xl p-10 rounded-xl group-hover:cursor-pointer'>
            <div className='flex flex-col space-y-16'>
              <div className='flex flex-col space-y-5 divide-y-2'>
                <img src='/img/location.png' className='w-10' alt='' />
                <h2 className='pt-3 text-[#184861] text-[26px] font-semibold'>
                  Find Location
                </h2>
              </div>

              <p className='text-[#6e778c]  text-sm max-w-[200px]'>
                Search our location on google maps
              </p>
            </div>
          </div>
          <div className='flex justify-center items-center absolute -bottom-3 -right-2 lg:-bottom-5 lg:right-5 w-16 h-16 rounded-full bg-white'>
            <img
              src='/img/arrow-up-svgrepo-com.svg'
              className='w-6 rotate-45 group-hover:scale-125 transition ease-in-out duration-200'
              alt=''
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Tab;
