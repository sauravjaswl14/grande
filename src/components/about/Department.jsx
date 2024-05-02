'use client';

import Link from 'next/link';

import Image from 'next/image';

let departmentData = [
  {
    img: '/img/dental-care.jpg',
    category: ' Cardiology',
    departmentName: 'Cardiac Surgery',
    departmentIcon: '/img/healthcare (1).png',
    description:
      'Cardiology as a team takes care of heart diseases and hypertension and has also performed hundreds of interventions when needed, for example – angiographies, angioplasties, pacemaker placement, etc.',
  },
  {
    img: '/img/dental-care.jpg',
    category: ' Gastroenterology ',
    departmentName: 'Gastrointestinal tract',
    departmentIcon: '/img/healthcare (1).png',
    description:
      'The Department of Gastroenterology at GIH is specialized in treating diseases and conditions related to Gastrointestinal tract such as stomach, small intestine, large intestine, liver, pancreatic and biliary tract.',
  },
  {
    img: '/img/dental-care.jpg',
    category: ' Orthopedics & Traumatology',
    departmentName:
      ' Spine Services: Center for Spinal Surgery and Rehabilitation (CSSR)',
    departmentIcon: '/img/healthcare (1).png',
    description:
      'The back, which supports the body, is a crucial organ, and backaches are among the most frequent illnesses for which people visit the hospital. The patients are extensively evaluated by our trained team of spine surgeons, who then either treat them with medication, rehabilitation, or in the worst instance, surgery.',
  },
  {
    img: '/img/dental-care.jpg',
    category: 'Physiotherapy and Rehabilitation',
    departmentName:
      ' Musculoskeletal, Neurological, Sports and Spine injuries, Intensive care, Pulmonological and cardiac, Pediatrics and Women’s Health',
    departmentIcon: '/img/healthcare (1).png',
    description:
      'The Department of Physiotherapy and Rehabilitation is well equipped with modern equipment and ambient space for patients. Qualified, skilled and experienced team of Physiotherapists provide Physiotherapy service in various field of rehabilitation (Musculoskeletal, Neurological, Sports and Spine injuries, Intensive care, Pulmonological and cardiac, Pediatrics and Women’s Health).',
  },
];

function Department() {
  return (
    <div className='m-20 flex space-x-20'>
      <div className='flex flex-col space-y-6'>
        <div className='w-44 bg-white py-2 px-5 flex justify-center items-center text-[#238751] font-semibold rounded-full shadow-xl'>
          Department
        </div>

        <h2 className='text-[48px] max-w-xl text-[#181a17] font-semibold'>
          Department of Grande International Hospital
        </h2>

        <p className='text-[#6e778c] max-w-lg'>
          The healthcare arena there was a felt need of developing new as well
          as upgrading the existing functioning and processes, consequently
          develop an institution supported with necessary
        </p>

        <Link
          href='#'
          className='group w-44 text-white font-semibold uppercase bg-[#184861] p-3 rounded-full flex space-x-3 justify-center items-center hover:bg-[#238751] transition ease-in-out duration-200'
        >
          <p>Read More</p>
          <img
            src='/img/arrow-up-white.svg'
            className='w-6 rotate-45 group-hover:scale-125 transition ease-in-out duration-200'
            alt=''
          />
        </Link>
      </div>

      <div className='h-[500px] flex flex-col space-y-5 overflow-y-auto noScrollbar'>
        {departmentData.map((department) => {
          const { img, category, departmentName, departmentIcon, description } =
            department;
          return (
            <div
              key={department.category}
              className='w-[736px] bg-white rounded-2xl shadow-xl p-5'
            >
              <div className='w-full flex flex-col space-y-8'>
                <div className='w-full flex justify-between'>
                  <div className='flex flex-col space-y-3'>
                    <div className='flex space-x-3 items-center'>
                      <div className='w-2 h-2 bg-[#238751] rounded-full'></div>
                      <p className='uppercase text-[#6e778c] text-xs'>
                        {category}
                      </p>
                    </div>
                    <p className='text-2xl font-semibold text-[#184861]'>
                      {departmentName}
                    </p>
                  </div>
                </div>

                <div className='border-t-2 pt-3'>{description}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Department;
