import Image from 'next/image';

function MissionVision() {
  return (
    <div className='m-20'>
      <div className='w-44 py-2 px-5 bg-white rounded-full shadow-lg text-[#238751] font-semibold flex justify-center items-center'>
        Mission & Vision
      </div>

      <div className='flex justify-between'>
        <div className='mt-8 pl-3 flex flex-col space-y-5 lg:space-y-0 lg:flex-row lg:space-x-10'>
          <div className='flex flex-col space-y-5 bg-white p-5 rounded-md justify-center items-center'>
            <Image src='/img/vision.png' width={60} height={40} />
            <h3 className='text-2xl font-semibold text-[#184861]'>
              Our Vision
            </h3>
            <p className='max-w-xs text-center'>
              To be the leading healthcare provider in the South Asia region.
            </p>
          </div>
          <div className='flex flex-col space-y-5 bg-white p-5 rounded-md justify-center items-center'>
            <Image src='/img/mission.png' width={60} height={40} />
            <h3 className='text-2xl font-semibold text-[#184861]'>
              Our Mission
            </h3>
            <p className='max-w-xs text-center'>
              To deliver quality, patient centric healthcare at an affordable
              cost.
            </p>
          </div>
        </div>

        <Image
          src='/img/images/Grande-@-Home-scaled.jpg'
          width={400}
          height={300}
        />
      </div>
    </div>
  );
}
export default MissionVision;
