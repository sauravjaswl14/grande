function AdvertiseSectionBreaker() {
  return (
    <div className='my-10'>
      <div className='min-w-screen h-[500px] flex'>
        {/*  */}
        <div className='flex justify-center items-center flex-1 p-10 bg-[#184861]'>
          <div className='flex flex-col space-y-8 items-center'>
            <div className='w-20 h-20 rounded-full bg-[#e5e5e567] flex justify-center items-center'>
              <img src='/img/bestMonitorigSystem.png' className='w-10' alt='' />
            </div>
            <div className='text-white flex flex-col space-y-5 items-center'>
              <h2 className='text-[21px] font-semibold text-center'>
                Best Monitoring System
              </h2>
              <p className='text-[16px] max-w-xs text-center'>
                Despite advances in technology and understanding of biological
                systems, drug discovery is still a lengthy, expensive.
              </p>
            </div>
          </div>
        </div>
        {/*  */}
        <div className='relative operating-room flex justify-center items-center flex-1 p-10 bg-[#184861]'>
          <div className='overlay'></div>
          <div className=' flex flex-col space-y-8 items-center'>
            <div className='w-20 h-20 rounded-full bg-[#e5e5e567] flex justify-center items-center'>
              <img
                src='/img/bestOperatingRoom.png'
                className='w-10 opacity-100'
                alt=''
              />
            </div>
            <div className='text-white opacity-100  flex flex-col space-y-5 items-center'>
              <h2 className='text-[21px] font-semibold text-center opacity-100'>
                Best Operating Room
              </h2>
              <p className='text-[16px] max-w-xs text-center'>
                Despite advances in technology and understanding of biological
                systems, drug discovery is still a lengthy, expensive.
              </p>
            </div>
          </div>
        </div>
        {/*  */}
        <div className='flex justify-center items-center flex-1 p-10 bg-[#184861]'>
          <div className='flex flex-col space-y-8 items-center'>
            <div className='w-20 h-20 rounded-full bg-[#e5e5e567] flex justify-center items-center'>
              <img src='/img/bestDoctors.png' className='w-10' alt='' />
            </div>
            <div className='text-white flex flex-col space-y-5 items-center'>
              <h2 className='text-[21px] font-semibold text-center'>
                Best Doctors
              </h2>
              <p className='text-[16px] max-w-xs text-center'>
                Despite advances in technology and understanding of biological
                systems, drug discovery is still a lengthy, expensive.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AdvertiseSectionBreaker;
