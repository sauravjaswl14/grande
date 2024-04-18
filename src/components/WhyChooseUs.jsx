import Image from 'next/image';
import ExtraServices from './ExtraServices';

function WhyChooseUs() {
  return (
    <section className='p-5 pt-20 lg:p-20 flex flex-col space-y-20 items-center'>
      {/*  */}
      <div className='flex flex-col space-y-5 items-center'>
        <div className='w-[145px] flex justify-center items-center rounded-full py-2 bg-white text-[12px] text-[#238751] font-semibold uppercase'>
          Why choose us
        </div>
        <h3 className='text-lg lg:text-[48px] lg:leading-snug text-center text-[#181a17] font-semibold max-w-2xl'>
          We are always open for your health services
        </h3>
      </div>

      {/*  */}
      <div className='flex flex-col space-y-5 lg:space-y-0 lg:flex-row lg:space-x-10'>
        {/*  */}
        <div className='group relative'>
          <div className=' card h-[346px] bg-white p-10 rounded-2xl group-hover:cursor-pointer '>
            <div className='flex flex-col space-y-20'>
              {/*  */}
              <div className='flex flex-col space-y-5'>
                {/*  */}
                <div className='flex space-x-5 items-center'>
                  <div className='w-[8px] h-[8px] bg-[#238751] rounded-full'></div>
                  <p className='uppercase font-medium text-[#6e778c] text-[12px]'>
                    Quality Support
                  </p>
                </div>
                {/*  */}
                <h2 className=' text-[#181a17] font-medium text-[26px] max-w-[238px]'>
                  Compassionate & Expert Care
                </h2>
              </div>

              {/*  */}

              <Image src='/img/expert-care.png' width={70} height={70.4} />
            </div>
          </div>
          <div className='absolute bottom-0 right-0 w-14 h-14 rounded-full bg-white flex justify-center items-center'>
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
            <div className='flex flex-col space-y-20'>
              {/*  */}
              <div className='flex flex-col space-y-5'>
                {/*  */}
                <div className='flex space-x-5 items-center'>
                  <div className='w-[8px] h-[8px] bg-[#238751] rounded-full'></div>
                  <p className='uppercase font-medium text-[#6e778c] text-[12px]'>
                    Our Doctors
                  </p>
                </div>
                {/*  */}
                <h2 className=' text-[#181a17] font-medium text-[26px] max-w-[238px]'>
                  Multi Speciality Hospital
                </h2>
              </div>

              {/*  */}

              <Image src='/img/healthcare.png' width={70} height={70.4} />
            </div>
          </div>
          <div className='absolute bottom-0 right-0 w-14 h-14 rounded-full bg-white flex justify-center items-center'>
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
            <div className='flex flex-col space-y-20'>
              {/*  */}
              <div className='flex flex-col space-y-5'>
                {/*  */}
                <div className='flex space-x-5 items-center'>
                  <div className='w-[8px] h-[8px] bg-[#238751] rounded-full'></div>
                  <p className='uppercase font-medium text-[#6e778c] text-[12px]'>
                    24/7 Services
                  </p>
                </div>
                {/*  */}
                <h2 className='capitalize text-[#181a17] font-medium text-[26px] max-w-[238px]'>
                  24 hours medical service
                </h2>
              </div>

              {/*  */}

              <Image src='/img/doctor-icon.png' width={70} height={70.4} />
            </div>
          </div>
          <div className='absolute bottom-0 right-0 w-14 h-14 rounded-full bg-white flex justify-center items-center'>
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
            <div className='flex flex-col space-y-20'>
              {/*  */}
              <div className='flex flex-col space-y-5'>
                {/*  */}
                <div className='flex space-x-5 items-center'>
                  <div className='w-[8px] h-[8px] bg-[#238751] rounded-full'></div>
                  <p className='uppercase font-medium text-[#6e778c] text-[12px]'>
                    Caring Staff
                  </p>
                </div>
                {/*  */}
                <h2 className='capitalize text-[#181a17] font-medium text-[26px] max-w-[238px]'>
                  Personalized treatment plans
                </h2>
              </div>

              {/*  */}

              <Image
                src='/img/personalizedTreatmentPlans.png'
                width={70}
                height={70.4}
              />
            </div>
          </div>
          <div className='absolute bottom-0 right-0 w-14 h-14 rounded-full bg-white flex justify-center items-center'>
            <img
              src='/img/arrow-up-svgrepo-com.svg'
              className='w-4 rotate-45 group-hover:scale-150 transition ease-in-out duration-200'
              alt=''
            />
          </div>
        </div>
      </div>

      {/*  */}
      <ExtraServices />
    </section>
  );
}
export default WhyChooseUs;
