import Image from 'next/image';

let membersData = [
  {
    img: '/img/images/Dr.-Byapak-Paudel.png',
    nameOfDoctor: 'Dr. Byapak Paudel',
  },
  {
    img: '/img/images/Dr.-Rupendra-Bahadur-Adhikari.png',
    nameOfDoctor: 'Dr. Rupendra Bahadur Adhikari',
  },
  {
    img: '/img/images/Assoc.-Prof.-Dr.-Akhilesh-Kumar-Kasyap.png',
    nameOfDoctor: 'Dr. Akhilesh Kumar Kasyap',
  },
  {
    img: '/img/images/LD-maharjan.png',
    nameOfDoctor: 'Dr. L D Maharjan',
  },
  {
    img: '/img/images/Dr.-Nilam-Subedi.png',
    nameOfDoctor: 'Dr. Nilam Subedi',
  },
];

function Members() {
  return (
    <div className='mt-10 lg:mt-0'>
      <h2 className='text-[20px] text-center uppercase text-[#184861] font-semibold lg:text-start'>
        Members
      </h2>
      <div className='mt-8 flex justify-center lg:justify-start'>
        <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          {membersData.map((data) => {
            let { img, nameOfDoctor } = data;
            return (
              <div className='group w-[262px] flex flex-col hover:cursor-pointer'>
                <Image src={img} width={262} height={262} />
                <div className='w-full bg-white p-5 rounded-md flex flex-col space-y-3 items-center group-hover:-translate-y-5 transition ease-in-out duration-200'>
                  <p className='text-center'>{nameOfDoctor}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function IRCcommittee() {
  return (
    <div className='m-5 lg:m-10 lg:my-20'>
      <div className='flex flex-col-reverse space-y-5 lg:space-y-0 lg:flex-row lg:space-x-20 lg:justify-center'>
        <Members />

        <div className='flex flex-col space-y-10 lg:space-y-0 lg:flex-row lg:space-x-5'>
          {/*  */}
          <div className='flex flex-col space-y-5 items-center'>
            <h2 className='text-[20px] uppercase text-[#184861] font-semibold'>
              Chairperson
            </h2>

            <div className='w-[300px] group flex flex-col items-center hover:cursor-pointer'>
              <Image
                src='/img/images/Dr.-Raju-Paudel.jpg'
                width={300}
                height={360}
              />
              <div className='w-full lex flex-col space-y-3 items-center bg-white p-6 rounded-md group-hover:-translate-y-5 transition ease-in-out duration-200'>
                <p className='text-center'>Dr. Raju Paudel, MD, DM</p>
                <p className='text-center'>Neuroscience</p>
                <p className='text-center'>Consultant, Neurologist</p>
              </div>
            </div>
          </div>

          {/*  */}
          <div className='flex flex-col space-y-5 items-center'>
            <h2 className='text-[20px] uppercase text-[#184861] font-semibold'>
              Member Secretary
            </h2>

            <div className='group flex flex-col items-center hover:cursor-pointer'>
              <Image
                src='/img/images/Dr.-Bishnu-Pahari.png'
                width={316}
                height={280}
              />
              <div className=' flex flex-col space-y-3 py-5 items-center bg-white  rounded-md group-hover:-translate-y-5 transition ease-in-out duration-200'>
                <p>Dr. Bishnu Pahari, MD, DM</p>
                <p>Nephrology and Transplant Medicine</p>
                <p className='max-w-xs text-center'>
                  Consultant Nephrologist and Renal Transplant Physician
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default IRCcommittee;
