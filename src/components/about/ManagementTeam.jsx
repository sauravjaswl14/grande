import Image from 'next/image';

function ManagementTeamSection() {
  return (
    <div className='m-5 lg:m-20'>
      <div className='flex justify-center'>
        <div className='flex flex-col space-y-8 lg:space-y-20 items-center'>
          <h2 className='text-3xl text-[#184861] font-semibold'>
            Management Team
          </h2>

          <div className='flex flex-col space-y-5 lg:space-y-0 lg:flex-row lg:space-x-20 lg:items-center'>
            {/*  */}
            <div className='w-[250px] flex flex-col items-center'>
              <Image
                src='/img/images/DR.-BINOD-BIJUKACHHE_-MEDICAL-DIRECTOR.jpeg'
                width={250}
                height={260}
                className='z-30'
              />
              <div className='z-20 w-full -mt-2 bg-white p-5 py-8 rounded-md shadow-md'>
                <div className='flex flex-col space-y-3 items-center'>
                  <p className='text-center'>Dr. Binod Bijukachhe</p>
                  <p className='text-center'>Medical Director (MD)</p>
                </div>
              </div>
            </div>
            {/*  */}
            <div className='w-[250px] flex flex-col items-center'>
              <Image
                src='/img/images/AMRIT-KHANNA.png'
                width={250}
                height={260}
                className='z-30'
              />
              <div className='z-20 w-full -mt-2 bg-white p-5 rounded-md shadow-md'>
                <div className='flex flex-col space-y-3 items-center'>
                  <p className='text-center'>Col. Amrit Khanna</p>
                  <p className='text-center'>Chief Operating Officer (COO)</p>
                </div>
              </div>
            </div>
          </div>

          <div className='flex flex-col space-y-5 lg:space-y-0 lg:flex-row lg:space-x-20 lg:items-center'>
            {/*  */}
            <div className='w-[250px] flex flex-col items-center'>
              <Image
                src='/img/images/AJEEB-BAR-SINGH-THAPA.png'
                width={250}
                height={260}
                className='z-30'
              />
              <div className='z-20 w-full -mt-2 bg-white p-5 py-8 rounded-md shadow-md'>
                <div className='flex flex-col space-y-3 items-center'>
                  <p className='text-center'>Er. Ajeev Bar Singh Thapa</p>
                  <p className='text-center'>
                    Assistant General Manager - Engineering
                  </p>
                </div>
              </div>
            </div>
            {/*  */}
            <div className='w-[250px] flex flex-col items-center'>
              <Image
                src='/img/images/CFO-Photograph.jpg'
                width={250}
                height={260}
                className='z-30'
              />
              <div className='z-20 w-full -mt-2 bg-white p-5 rounded-md shadow-md'>
                <div className='flex flex-col space-y-3 items-center'>
                  <p className='text-center'>Dipendra Pokharel</p>
                  <p className='text-center'>Chief Financial Officer (CFO)</p>
                </div>
              </div>
            </div>
            {/*  */}
            <div className='w-[250px] flex flex-col items-center'>
              <Image
                src='/img/images/ARCHANA-PRADHAN.png'
                width={250}
                height={260}
                className='z-30'
              />
              <div className='z-20 w-full -mt-2 bg-white p-5 rounded-md shadow-md'>
                <div className='flex flex-col space-y-3 items-center'>
                  <p className='text-center'>Archana Pradhan</p>
                  <p className='text-center'>
                    Assistant General Manager - Operations & Business
                    Development
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className='flex flex-col space-y-5 lg:space-y-0 lg:flex-row lg:space-x-20 lg:items-center'>
            {/*  */}
            <div className='w-[250px] flex flex-col items-center'>
              <Image
                src='/img/images/HARI-KHADKA.PNG'
                width={250}
                height={260}
                className='z-30'
              />
              <div className='z-20 w-full -mt-2 bg-white p-5 rounded-md shadow-md'>
                <div className='flex flex-col space-y-3 items-center'>
                  <p className='text-center'>Hari Khadka</p>
                  <p className='text-center'>
                    Assistant General Manager - Admin & Human Resources
                  </p>
                </div>
              </div>
            </div>
            {/*  */}
            <div className='w-[250px] flex flex-col items-center'>
              <Image
                src='/img/images/LD-maharjan.png'
                width={250}
                height={260}
                className='z-30'
              />
              <div className='z-20 w-full -mt-2 bg-white p-5 py-10 rounded-md shadow-md'>
                <div className='flex flex-col space-y-3 items-center'>
                  <p className='text-center'>Ms. L D Maharjan</p>
                  <p className='text-center'>Nursing Director</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ManagementTeamSection;
