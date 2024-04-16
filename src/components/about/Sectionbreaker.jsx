import Image from 'next/image';

function SectionBreaker() {
  return (
    <div className='my-20'>
      <div className='pl-10 h-[500px] about-section-breaker bg-white shadow-xl flex items-center  '>
        <div className='flex flex-col space-y-16 items-center'>
          <div className='flex space-x-5 items-center'>
            <Image src='/img/nabh.png' width={180} height={180} className='' />
            <Image src='/img/hoty.png' width={180} height={180} className='' />
          </div>

          <p className='text-2xl font-semibold text-center text-[#184861] max-w-4xl'>
            Our hospital aims to meet the standards of NABH (National
            Accreditation Board for Hospitals & Healthcare Providers) for
            Patient Safety and Standards.
          </p>
        </div>
      </div>
    </div>
  );
}
export default SectionBreaker;
