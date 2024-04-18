import Link from 'next/link';

const doctors = [
  {
    imageOfDoctor: '/img/images/Dr.-Utkarsa-Karki.png',
    doctorName: 'Dr. Utkarsha Karki',
    department: ' Child, Adolescent and Adult Psychiatry',
  },
  {
    imageOfDoctor: '/img/images/Dr.-Shuva-Jung-Rana.jpg',
    doctorName: 'Dr Shuva Jung Bahadur Rana',
    department: ' Cardiology and Interventional Cardiology',
  },
];

function Doctor({ img, doctorName, department }) {
  return (
    <div className='group w-[350px] flex flex-col items-center transition ease-in-out duration-200'>
      <div className='relative w-full'>
        <img src={img} className='w-full group-hover:cursor-pointer' alt='' />
        <div className='opacity-0 absolute top-0 right-5 bg-[#238751] w-16 py-5 group-hover:opacity-100 flex flex-col items-center space-y-5 transition ease-in-out duration-300'>
          <Link href='#'>
            <img
              src='/img/fb-white.png'
              className='w-8 hover:cursor-pointer hover:scale-75 transition ease-in-out duration-200'
              alt=''
            />
          </Link>

          <Link href='#'>
            <img
              src='/img/linkedin-white.png'
              className='w-8 hover:cursor-pointer hover:scale-75 transition ease-in-out duration-200'
              alt=''
            />
          </Link>

          <Link href='#'>
            <img
              src='/img/whatsapp-white.png'
              className='w-8 hover:cursor-pointer hover:scale-75 transition ease-in-out duration-200'
              alt=''
            />
          </Link>
          <Link href='#'>
            <img
              src='/img/twitter-white.png'
              className='w-5 hover:cursor-pointer hover:scale-75 transition ease-in-out duration-200'
              alt=''
            />
          </Link>
        </div>
      </div>

      <div className='w-[90%] -mt-10 bg-white z-30 p-5 rounded-md group-hover:cursor-pointer group-hover:-translate-y-2 transition ease-in-out duration-200'>
        <div className='flex flex-col space-y-3 items-center'>
          <h3 className='capitalize text-[#18100f] text-[18px] text-center font-semibold'>
            {doctorName}
          </h3>
          <p className='text-[#238751] text-center text-[14px] font-medium'>
            {department}
          </p>
        </div>
      </div>
    </div>
  );
}

function OurTeam() {
  return (
    <section className='p-5 pt-10  lg:p-20'>
      <div className='flex flex-col space-y-10'>
        <div className='flex flex-col space-y-5'>
          <div className='flex justify-center items-center py-2 w-44 text-[#238751] font-semibold bg-white rounded-full'>
            Our Team
          </div>

          <div className='flex justify-between items-center'>
            <h1 className='text-lg lg:text-[48px]'>Our Specialist Doctors</h1>
            <div className='flex space-x-5'>
              <button className='w-[60px] h-[50px] p-5 border-2 border-[#184861] rounded-md flex justify-center items-center'>
                <img
                  src='/img/right-arrow-blue.png'
                  className='rotate-180'
                  alt=''
                />
              </button>
              <button className='w-[60px] h-[50px] p-5 border-2 border-[#184861] rounded-md flex justify-center items-center'>
                <img src='/img/right-arrow-blue.png' alt='' />
              </button>
            </div>
          </div>
        </div>

        <div className='flex flex-col space-y-5 lg:space-y-0 lg:flex-row lg:space-x-10'>
          {doctors.map((doctor) => {
            return (
              <div key={doctor}>
                <Doctor
                  img={doctor.imageOfDoctor}
                  doctorName={doctor.doctorName}
                  department={doctor.department}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
export default OurTeam;
