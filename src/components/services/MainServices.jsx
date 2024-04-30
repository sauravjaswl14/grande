import Image from 'next/image';
import Link from 'next/link';

function MainServices() {
  return (
    <section className='m-5 lg:m-20'>
      <h1 className='text-[32px] font-bold lg:ml-36'>Featured Services</h1>
      <div className='lg:p-0 lg:my-10 flex flex-col space-y-10 lg:items-center'>
        {/* <!--  --> */}
        <div className='flex flex-col space-y-5 lg:space-y-0 lg:flex-row lg:space-x-10 lg:items-center'>
          <div className='lg:w-[530px] lg:h-[300px]'>
            <img
              src='/img/images/Grande-@-Home-scaled.jpg'
              className='w-full h-full rounded-md'
              alt=''
            />
          </div>

          <div className='flex flex-col space-y-10'>
            <div className='flex flex-col space-y-5'>
              <h3 className='text-[24px] text-start font-semibold'>
                Services at GIH
              </h3>
              <p className='max-w-lg'>
                GIH has a state-of-the-art 15 bedded Emergency with a
                resuscitation room and a stand-by trauma team. This is run 24×7
                by a team of consultants, Medical officers, trained nurses and
                paramedics. The Emergency Medical Services (EMS) promptly
                dispatches well equipped ambulances staffed by well trained
                paramedics. The staff are certified on regular basis following
                up-to-date evidence-based protocols.
              </p>
            </div>

            <button className='w-[194px] flex justify-center items-center py-2 px-5 bg-[#88be9b] text-white rounded-md hover:bg-[#2f884f] transition ease-in-out duration-200'>
              Read More
            </button>
          </div>
        </div>
        {/* <!--  --> */}
        <div className='flex flex-col-reverse space-y-5 lg:space-y-0 lg:flex-row lg:space-x-10 lg:items-center'>
          <div className='mt-5 lg:mt-0 flex flex-col space-y-10'>
            <div className='flex flex-col space-y-5'>
              <h3 className='text-[24px] text-start font-semibold'>
                Grande @ Home
              </h3>
              <p className='max-w-lg'>
                Grande @ home is offering specialized home care services. Our
                skilled medical team aims to deliver the best possible care to
                patients at their home, thus eliminating their need to travel to
                the hospital.
              </p>
            </div>

            <Link
              href='/services/grandeAtHome'
              className='w-[194px] flex justify-center items-center py-2 px-5 bg-[#88be9b] text-white rounded-md hover:bg-[#2f884f] transition ease-in-out duration-200'
            >
              Read More
            </Link>
          </div>

          <div className='lg:w-[530px] lg:h-[300px]'>
            <Image
              src='/img/images/csr-N1-min-1024x682.png'
              width={500}
              height={300}
              alt='Grande at Home'
              className='rounded-md'
            />
          </div>
        </div>
        {/* <!--  --> */}
        <div className='flex flex-col space-y-5 lg:space-y-0 lg:flex-row lg:space-x-10 lg:items-center'>
          <div className='lg:w-[530px] lg:h-[300px]'>
            <img
              src='/img/images/Tele-Consultation.jpg'
              alt='tele consultation'
              className='w-full h-full rounded-md'
            />
          </div>

          <div className='flex flex-col space-y-10'>
            <div className='flex flex-col space-y-5'>
              <h3 className='text-[24px] text-start font-semibold'>
                Tele Consultation
              </h3>
              <p className='max-w-lg'>
                Tele Consultation at Grande International Hospital allows the
                patient who reside outside the valley to stay in touch with
                their doctors. This service also helps patient who are unable to
                travel to the hospital.
              </p>
            </div>

            <Link
              href='/services/teleConsultation'
              className='w-[194px] flex justify-center items-center py-2 px-5 bg-[#88be9b] text-white rounded-md hover:bg-[#2f884f] transition ease-in-out duration-200'
            >
              Read More
            </Link>
          </div>
        </div>
        {/* <!--  --> */}
        <div className='flex flex-col-reverse space-y-5 lg:space-y-0 lg:flex-row lg:space-x-10 lg:items-center'>
          <div className='mt-5 lg:mt-0 flex flex-col space-y-10'>
            <div className='flex flex-col space-y-5'>
              <h3 className='text-[24px] text-start font-semibold'>
                Heli Rescue
              </h3>
              <p className='max-w-lg'>
                Grande International Hospital is the first hospital in Nepal to
                rescue patients by helicopter with specialist doctors. The
                hospital has the capacity to operate two helipads (one rooftop
                another ground helipad)at the same time. We have a dedicated
                team for Emergency Rescue, Critical Illness Rescue, Mountain
                Rescue from anywhere in the country. The rooftop helipad at GIH
                has allowed us to rescue patients from all over Nepal. The
                helipad is facilitated with a devoted lift that takes patients
                straight to the Emergency Room.
              </p>
            </div>

            <Link
              href='/services/heliRescue'
              className='w-[194px] flex justify-center items-center py-2 px-5 bg-[#88be9b] text-white rounded-md hover:bg-[#2f884f] transition ease-in-out duration-200'
            >
              Read More
            </Link>
          </div>

          <div className='lg:w-[530px] lg:h-[300px]'>
            <img
              src='img/heli-rescue.jpg'
              className='w-full h-full rounded-md'
              alt=''
            />
          </div>
        </div>
        {/* <!--  --> */}
        <div className='flex flex-col space-y-5 lg:space-y-0 lg:flex-row lg:space-x-10 lg:items-center'>
          <div className='lg:w-[530px] lg:h-[300px]'>
            <img
              src='img/featured-3.jpg'
              className='w-full h-full rounded-md'
              alt=''
            />
          </div>

          <div className='flex flex-col space-y-10'>
            <div className='flex flex-col space-y-5'>
              <h3 className='text-[24px] text-start font-semibold'>
                Wards and Rooms
              </h3>
              <p className='max-w-lg'>
                Grande International Hospital wards and rooms are designed in
                such a way that it meets its all basic requirement for every
                patient admitted in the hospital.
              </p>
            </div>

            <Link
              href='/services/wardsAndRooms'
              className='w-[194px] flex justify-center items-center py-2 px-5 bg-[#88be9b] text-white rounded-md hover:bg-[#2f884f] transition ease-in-out duration-200'
            >
              Read More
            </Link>
          </div>
        </div>
        {/* <!--  --> */}
        <div className='flex flex-col-reverse space-y-5 lg:space-y-0 lg:flex-row lg:space-x-10 lg:items-center'>
          <div className='mt-5 lg:mt-0 flex flex-col space-y-10'>
            <div className='flex flex-col space-y-5'>
              <h3 className='text-[24px] text-start font-semibold'>
                Ambulance
              </h3>
              <p className='max-w-lg'>
                A high-quality Emergency Medical Services (EMS) promptly
                dispatches properly equipped ambulances staffed by rigorously
                trained and regularly re-certified paramedics following
                up-to-date evidence-based protocols, alongside pre-hospital
                critical care doctor in serious cases, to patient in dire need
                of medical attention. The goal of EMS is therefore not only to
                safely transport patient to definitive care at the nearest
                hospital as quickly as possible, but also to assess patients and
                commence essential and potentially life-saving treatment at the
                scene and during transfer
              </p>
            </div>

            <Link
              href='/services/ambulance'
              className='w-[194px] flex justify-center items-center py-2 px-5 bg-[#88be9b] text-white rounded-md hover:bg-[#2f884f] transition ease-in-out duration-200'
            >
              Read More
            </Link>
          </div>

          <div className='lg:w-[530px] lg:h-[300px]'>
            <img
              src='img/ambulance.jpg'
              className='w-full h-full rounded-md'
              alt=''
            />
          </div>
        </div>
        {/* <!--  --> */}
        <div className='flex flex-col space-y-5 lg:space-y-0 lg:flex-row lg:space-x-10 lg:items-center'>
          <div className='lg:w-[530px] lg:h-[300px]'>
            <img
              src='img/images/7.jpg'
              className='w-full h-full rounded-md'
              alt=''
            />
          </div>

          <div className='flex flex-col space-y-10'>
            <div className='flex flex-col space-y-5'>
              <h3 className='text-[24px] text-start font-semibold'>Pharmacy</h3>
              <p className='max-w-lg'>
                Pharmacy is the science and technique of preparing and
                dispensing drugs. It plays a vital role to ensure the safe and
                effective use of drugs. At GIH, the department has a team of 21
                Pharmacists determined to go an extra mile to make the use of
                drugs for patients safer. “Good Pharmacy Practice” guidelines
                and legal requirements are strictly followed at zero tolerance
                in all pharmacy operations. Our Pharmacy infra-structure is
                well-designed to maintain the quality of sensitive items such as
                vaccines and life-saving drugs.
              </p>
            </div>

            <Link
              href='/services/pharmacy'
              className='w-[194px] flex justify-center items-center py-2 px-5 bg-[#88be9b] text-white rounded-md hover:bg-[#2f884f] transition ease-in-out duration-200'
            >
              Read More
            </Link>
          </div>
        </div>
        {/* <!--  --> */}
        <div className='flex flex-col-reverse space-y-5 lg:space-y-0 lg:flex-row lg:space-x-10 lg:items-center'>
          <div className='mt-5 lg:mt-0 flex flex-col space-y-10'>
            <div className='flex flex-col space-y-5'>
              <h3 className='text-[24px] text-start font-semibold'>Nursing</h3>
              <p className='max-w-lg'>
                Nursing department is the major and essential part of the GIH.
                This mobilizes all nurses and nursing service in the
                hospital.Nurses are the front-line force and they play a key
                role to achieve hospital motive and objectives with a culture of
                high-reliability, quality and safety service to patients and
                families in satisfying environment.
              </p>
            </div>

            <Link
              href='/services/nursing'
              className='w-[194px] flex justify-center items-center py-2 px-5 bg-[#88be9b] text-white rounded-md hover:bg-[#2f884f] transition ease-in-out duration-200'
            >
              Read More
            </Link>
          </div>

          <div className='lg:w-[530px] lg:h-[300px]'>
            <img
              src='img/images/2.jpg'
              className='w-full h-full rounded-md'
              alt=''
            />
          </div>
        </div>
        {/* <!--  --> */}
        <div className='flex flex-col space-y-5 lg:space-y-0 lg:flex-row lg:space-x-10 lg:items-center'>
          <div className='lg:w-[530px] lg:h-[300px]'>
            <img
              src='img/images/pcr.jpg'
              className='w-full h-full rounded-md'
              alt=''
            />
          </div>

          <div className='flex flex-col space-y-10'>
            <div className='flex flex-col space-y-5'>
              <h3 className='text-[24px] text-start font-semibold'>PCR Info</h3>
              <p className='max-w-lg'>
                The PCR test, which is short for Polymerase Chain Reaction, is
                currently the only type of test approved by the local and
                international health authorities to confirm the diagnosis of
                Covid-19 infection. The test is conducted through a naso and
                oropharyngeal swab. The swab is collected in the dedicated
                sample collection booth following NPHL guidelines.
              </p>
            </div>

            <Link
              href='/services/pcrInfo'
              className='w-[194px] flex justify-center items-center py-2 px-5 bg-[#88be9b] text-white rounded-md hover:bg-[#2f884f] transition ease-in-out duration-200'
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
export default MainServices;
