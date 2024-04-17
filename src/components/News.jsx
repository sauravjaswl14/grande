import Image from 'next/image';
import Link from 'next/link';

function News() {
  return (
    <section className='p-20 flex flex-col space-y-10'>
      <div className='flex flex-col space-y-5'>
        <div className='w-56 flex justify-center items-center bg-white py-2 rounded-full text-[#238751] font-semibold'>
          News & Events
        </div>
        <h2 className='text-[48px]'>Latest posts & articles</h2>
      </div>

      <div className='flex space-x-10 items-center'>
        {/*  */}
        <div className='flex space-x-5'>
          <div className='relative group'>
            <div className='flex  shadow-blue-500'>
              <img
                src='/img/news.jpg'
                className='rounded-2xl w-[250px] h-[280px] z-20'
              />
              <div className='bg-white shadow-lg rounded-r-2xl -ml-10 p-5 group-hover:cursor-pointer'>
                <div className='px-10 flex flex-col space-y-5'>
                  <div className='flex flex-col space-y-5 pb-8 border-b-2'>
                    <div className='flex space-x-5 items-center'>
                      <div className='flex space-x-2 items-center'>
                        <img src='/img/calendar.png' className='w-5' alt='' />
                        <p className='text-[#666] text-[12px] uppercase'>
                          Feb 29, 2024
                        </p>
                      </div>
                      <div className='flex space-x-2 items-center'>
                        <img src='/img/user.png' className='w-5' alt='' />
                        <p className='text-[#666] text-[12px] uppercase'>
                          Admin
                        </p>
                      </div>
                    </div>
                    <p className='capitalize text-[18px] text-[#031b4e] font-semibold max-w-xs group-hover:text-[#238751] transition ease-in-out duration-200'>
                      What&apos;s the reason so many older...
                    </p>
                  </div>

                  <p className='text-[#6e778c] max-w-[250px]'>
                    Medical futurist is one of the best online resources for
                    learning...
                  </p>
                </div>
              </div>
            </div>
            <div className='absolute bottom-5 right-8 flex justify-center items-center w-16 h-16 bg-[#184861] rounded-full'>
              <img
                src='/img/arrow-up-white.svg'
                className='w-5 rotate-45 group-hover:scale-125'
                alt=''
              />
            </div>
          </div>

          {/*  */}
          <div className='flex flex-col space-y-5'>
            {/*  */}
            <div className='group flex space-x-5 items-center'>
              <img
                src='/img/newsimg.jpg'
                className='rounded-md w-[80px] h-[80px] group-hover:cursor-pointer'
              />
              <div className='flex flex-col space-y-3'>
                <h2 className='text-[#184861] max-w-xs hover:cursor-pointer group-hover:text-[#238751] transition ease-in-out duration-200'>
                  These blood markers may indicate a higher risk of disease
                </h2>
                <div className='flex space-x-3 items-center text-[13px] text-[#a7a7a7] group-hover:cursor-pointer'>
                  <p className=' '>February 28,2023</p>
                  <div className='w-[5px] h-[5px] bg-[#a7a7a7] rounded-full'></div>
                  <p>Drugs, Health Care</p>
                </div>
              </div>
            </div>
            {/*  */}
            <div className='group flex space-x-5 items-center '>
              <img
                src='/img/newsimg2.jpg'
                className='rounded-md w-[80px] h-[80px] group-hover:cursor-pointer'
              />
              <div className='flex flex-col space-y-3'>
                <h2 className='text-[#184861] max-w-xs hover:cursor-pointer group-hover:text-[#238751] transition ease-in-out duration-200'>
                  Brushing your teeth may keep your heart healthy
                </h2>
                <div className='flex space-x-3 items-center text-[13px] text-[#a7a7a7] group-hover:cursor-pointer'>
                  <p className=' '>February 28,2023</p>
                  <div className='w-[5px] h-[5px] bg-[#a7a7a7] rounded-full'></div>
                  <p>Hospital,Infectious</p>
                </div>
              </div>
            </div>
            {/*  */}
            <div className='group flex space-x-5 items-center'>
              <img
                src='/img/newsimg3.jpg'
                className='rounded-md w-[80px] h-[80px] group-hover:cursor-pointer'
              />
              <div className='flex flex-col space-y-3'>
                <h2 className='text-[#184861] max-w-xs hover:cursor-pointer group-hover:text-[#238751] transition ease-in-out duration-200'>
                  Doctor&apos;s Failure to Diagnose a Medical Condition
                </h2>
                <div className='flex space-x-3 items-center text-[13px] text-[#a7a7a7] group-hover:cursor-pointer'>
                  <p className=' '>February 28,2023</p>
                  <div className='w-[5px] h-[5px] bg-[#a7a7a7] rounded-full'></div>
                  <p>Drugs, Health Care</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*  */}
        <div className='flex flex-col space-y-5'>
          <h2 className='text-[25px] text-[#238751] font-bold'>Quick Links</h2>
          <div className='flex flex-col space-y-2 divide-y-2'>
            <Link
              href='#'
              className='group flex space-x-10  py-1 items-center hover:space-x-12'
            >
              <p className='group-hover:text-[#4d93e9]'>Lumbar Discectomy</p>
              <img src='/img/right-arrow-blue.png' className='w-3' alt='' />
            </Link>
            <Link
              href='#'
              className='group flex space-x-10  py-1 items-center hover:space-x-12'
            >
              <p className='group-hover:text-[#4d93e9]'>Endoscopy</p>
              <img src='/img/right-arrow-blue.png' className='w-3' alt='' />
            </Link>
            <Link
              href='#'
              className='group flex space-x-10  py-1 items-center hover:space-x-12'
            >
              <p className='group-hover:text-[#4d93e9]'>Elbow Arthroscopy</p>
              <img src='/img/right-arrow-blue.png' className='w-3' alt='' />
            </Link>
            <Link
              href='#'
              className='group flex space-x-10  py-1 items-center hover:space-x-12'
            >
              <p className='group-hover:text-[#4d93e9]'>Colorectal</p>
              <img src='/img/right-arrow-blue.png' className='w-3' alt='' />
            </Link>
            <Link
              href='#'
              className='group flex space-x-10  py-1 items-center hover:space-x-12'
            >
              <p className='group-hover:text-[#4d93e9]'>Knee Arthroscopy</p>
              <img src='/img/right-arrow-blue.png' className='w-3' alt='' />
            </Link>
            <Link
              href='#'
              className='group flex space-x-10  py-1 items-center hover:space-x-12'
            >
              <p className='group-hover:text-[#4d93e9]'>Hemorrhoids</p>
              <img src='/img/right-arrow-blue.png' className='w-3' alt='' />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
export default News;
