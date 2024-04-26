import { Doctor } from '../../OurTeam';

function Specialities() {
  return (
    <div className='m-20 '>
      <h2 className='text-3xl font-bold text-[#184861]'>
        National Board of Medical Specialities
      </h2>

      <div className='mt-8 w-full flex flex-col space-y-5 lg:space-y-0 lg:flex-row lg:justify-between'>
        <div className='flex flex-col space-y-20'>
          <div className='flex space-x-10 items-center'>
            <div className='h-[200px] bg-white rounded-md shadow-xl p-10 flex justify-center items-center'>
              <p className='font-semibold text-[#238751] max-w-sm text-xl text-center leading-relaxed'>
                Orthopedics(Speciality Program) Equivalent to MS
              </p>
            </div>
            <div className='h-[200px] bg-white rounded-md shadow-xl p-10 flex justify-center items-center'>
              <p className='font-semibold text-[#238751] max-w-sm text-xl text-center leading-relaxed'>
                Critical Care (Sub-Speciality Program) Equivalent to DM
              </p>
            </div>
          </div>

          <div className='flex flex-col space-y-8'>
            <h2 className='text-xl font-bold text-[#184861]'>
              Clinical Fellowship Programs
            </h2>

            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 pr-20'>
              <div className='bg-white p-8 rounded-md shadow-lg flex justify-center items-center hover:text-[#238751] hover:cursor-pointer transition ease-in-out duration-200'>
                <p className='text-center'>
                  Fellowship in Spinal Reconstructive Surgery
                </p>
              </div>
              <div className='bg-white p-8 rounded-md shadow-lg flex justify-center items-center hover:text-[#238751] hover:cursor-pointer transition ease-in-out duration-200'>
                <p className='text-center'>Fellowship in Emergency Medicine</p>
              </div>
              <div className='bg-white p-8 rounded-md shadow-lg flex justify-center items-center hover:text-[#238751] hover:cursor-pointer transition ease-in-out duration-200'>
                <p className='text-center'>
                  Fellowship in Sports Medicine, Arthroscopy and Arthroplasty
                </p>
              </div>
              <div className='bg-white p-8 rounded-md shadow-lg flex justify-center items-center hover:text-[#238751] hover:cursor-pointer transition ease-in-out duration-200'>
                <p className='text-center'>
                  Fellowship in Minimal Invasive and Hepatopancreatic biliary
                  Surgery
                </p>
              </div>
              <div className='bg-white p-8 rounded-md shadow-lg flex justify-center items-center hover:text-[#238751] hover:cursor-pointer transition ease-in-out duration-200'>
                <p className='text-center'>Fellowship in Neurology</p>
              </div>
            </div>
          </div>
        </div>

        {/* Dr.-Ramkrishna-Dahal.jpeg */}
        <Doctor
          img='/img/images/Dr.-Ramkrishna-Dahal.jpeg'
          doctorName='Dr. Ramkrishna Dahal'
          department='Fellowship in Spine Reconstructive Surgery'
          extra={['Academic Co-ordinator', 'MS Orthopedics']}
        />
      </div>

      <div className='mt-20'>
        <h2 className='text-xl font-bold text-[#184861]'>
          Critical Care Nurse Training Program (CCNTP)
        </h2>

        <div className='mt-8 flex flex-col space-y-5'>
          <p>
            In the healthcare system, the Nurses have a pivotal role in the
            delivery of Quality Healthcare. The enhancement of the Nursing
            Profession can be best achieved by education. With accelerating
            scientific, technical and social changes, the Nurses are challenged
            to be more accountable. Therefore, the Nurses have to respond to the
            changing times and new demands by taking added responsibilities and
            expanded roles.
          </p>
          <p>
            The Critical Care Nurse Training Program (CCNTP) is being organized
            in Grande International Hospital in collaboration with the Critical
            Care Nurses Association of Nepal (CCNAN).The CCNTP is based totally
            on the curriculum of CCNTP that has been given by CCNAN as this is a
            CCNAN endorsed program.
          </p>
          <h4 className='text-[#184861] text-lg font-bold'>Goal</h4>
          <p>
            The goal of Critical Care Nurse Training Program (CCNTP) is to train
            a Nurse specialist in the field of Critical Care Nursing who has got
            relevant knowledge and skills.
          </p>

          <p>
            This program will help to fill the gap of knowledge and skills among
            the Nurses in ICU and increase the quality of care in ICU.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Specialities;
