import Image from 'next/image';
import CareerApplyform from './CareerApplyform';

function CareerMain() {
  return (
    <div className='m-5 lg:m-20'>
      <div className='flex justify-center'>
        <div className='flex space-x-20 '>
          {/*  */}
          <div className='flex flex-col space-y-10'>
            <h2 className='text-lg font-semibold text-[#238751] bg-white w-fit px-5 py-2 rounded-full shadow-xl'>
              The Grande Philosophy
            </h2>

            <div className='flex space-x-10 items-center'>
              <Image
                src='/img/mission2.png'
                width={100}
                height={20}
                alt='mission'
              />

              <div className='flex flex-col space-y-5 border-r-2 pr-20 border-[#184861]'>
                <p className='text-2xl font-semibold'>Our Mission</p>
                <p className='max-w-xs'>
                  Our mission is to deliver world class, patient centric,
                  integrated and affordable healthcare through a dynamic
                  institution that focuses on the development of people and
                  knowledge.
                </p>
              </div>
            </div>
          </div>

          {/*  */}
          <div className='flex flex-col space-y-10'>
            <h2 className='text-lg font-semibold text-[#238751] bg-white w-fit px-5 py-2 rounded-full shadow-xl'>
              Our Core Values
            </h2>

            <div className='grid grid-cols-2 gap-6'>
              <div className='flex space-x-10 items-center'>
                <Image
                  width={40}
                  height={20}
                  src='/img/parient-centric.png'
                  alt='patient centric'
                />

                <div className='flex flex-col space-y-3'>
                  <h2 className='text-xl font-semibold'>Patient-centric</h2>
                  <p className='max-w-xs'>
                    Foster a culture where every one of us is committed to care
                    for patients and their caregivers.
                  </p>
                </div>
              </div>
              <div className='flex space-x-10 items-center'>
                <Image
                  width={40}
                  height={20}
                  src='/img/leadership.png'
                  alt='patient centric'
                />

                <div className='flex flex-col space-y-3'>
                  <h2 className='text-xl font-semibold'>
                    Leadership and quality
                  </h2>
                  <p className='max-w-xs'>
                    Commit to delivering excellence in everything we do through
                    exemplary action and behaviour.
                  </p>
                </div>
              </div>
              <div className='flex space-x-10 items-center'>
                <Image
                  width={40}
                  height={20}
                  src='/img/integrity.png'
                  alt='patient centric'
                />

                <div className='flex flex-col space-y-3'>
                  <h2 className='text-xl font-semibold'>
                    Integrity and courage
                  </h2>
                  <p className='max-w-xs'>
                    Maintain the highest ethical standards by putting the
                    patient first and demonstrating the courage to do what is
                    right
                  </p>
                </div>
              </div>
              <div className='flex space-x-10 items-center'>
                <Image
                  width={40}
                  height={20}
                  src='/img/collaborate.png'
                  alt='patient centric'
                />

                <div className='flex flex-col space-y-3'>
                  <h2 className='text-xl font-semibold'>
                    Collaboration, learning and innovation
                  </h2>
                  <p className='max-w-xs'>
                    promote teamwork and collaboration, welcome changes and
                    creativity, encourage innovation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='mt-20'>
        <div className='w-full flex justify-between'>
          <div className='flex flex-col space-y-10'>
            <h3 className='text-2xl font-bold'>
              Empowering clinical talent with advanced technology
            </h3>

            <div className='grid grid-cols-3 gap-6'>
              {/*  */}
              <div className='flex space-x-5 items-center'>
                <div className='w-20 h-20 flex justify-center items-center rounded-full bg-[#184861]'>
                  <Image
                    src='/img/bestInfrastructure.png'
                    width={40}
                    height={20}
                    alt='world class infrastructure'
                  />
                </div>
                <p className='text-xl max-w-xs font-semibold'>
                  World-class Infrastructure
                </p>
              </div>
              {/*  */}
              <div className='flex space-x-5 items-center'>
                <div className='w-20 h-20 flex justify-center items-center rounded-full bg-[#184861]'>
                  <Image
                    src='/img/ct-scan.png'
                    width={40}
                    height={20}
                    alt='Exceptional Clinical Talent'
                  />
                </div>
                <p className='text-xl max-w-[200px] font-semibold'>
                  Exceptional Clinical Talent
                </p>
              </div>
              {/*  */}
              <div className='flex space-x-5 items-center'>
                <div className='w-20 h-20 flex justify-center items-center rounded-full bg-[#184861]'>
                  <Image
                    src='/img/bed.png'
                    width={40}
                    height={20}
                    alt='Exceptional Clinical Talent'
                  />
                </div>
                <p className='text-xl max-w-[200px] font-semibold'>
                  Latest high-wnd technology
                </p>
              </div>
              {/*  */}
              <div className='flex space-x-5 items-center'>
                <div className='w-20 h-20 flex justify-center items-center rounded-full bg-[#184861]'>
                  <Image
                    src='/img/ecg-reading.png'
                    width={40}
                    height={20}
                    alt='Exceptional Clinical Talent'
                  />
                </div>
                <p className='text-xl max-w-[200px] font-semibold'>
                  Trust-based compassionate care
                </p>
              </div>
              {/*  */}
              <div className='flex space-x-5 items-center'>
                <div className='w-20 h-20 flex justify-center items-center rounded-full bg-[#184861]'>
                  <Image
                    src='/img/innovation.png'
                    width={40}
                    height={20}
                    alt='Exceptional Clinical Talent'
                  />
                </div>
                <p className='text-xl max-w-[200px] font-semibold'>
                  Caring systems and processes
                </p>
              </div>
            </div>
          </div>

          <Image
            src='/img/images/tech.jpg'
            width={400}
            height={150}
            alt='ct-scan'
          />
        </div>
      </div>

      <div className='mt-20'>
        <CareerApplyform />
      </div>
    </div>
  );
}
export default CareerMain;
