'use client';
import { useState } from 'react';
import Image from 'next/image';

function Tab() {
  let [isActive, setActive] = useState({
    bookAppointment: false,
    findADoctor: false,
    emergency: false,
    virtualConsultation: false,
    grandeAtHome: false,
    bookATest: false,
  });

  function activeTab(opt) {
    switch (opt) {
      case 'bookAppointment':
        setActive((prev) => {
          return {
            ...prev,
            bookAppointment: !prev.bookAppointment,
            findADoctor: false,
            emergency: false,
            virtualConsultation: false,
            grandeAtHome: false,
            bookATest: false,
          };
        });
        break;
      case 'findADoctor':
        setActive((prev) => {
          return {
            ...prev,
            bookAppointment: false,
            findADoctor: !prev.findADoctor,
            emergency: false,
            virtualConsultation: false,
            grandeAtHome: false,
            bookATest: false,
          };
        });
        break;
      case 'emergency':
        setActive((prev) => {
          return {
            ...prev,
            bookAppointment: false,
            findADoctor: false,
            emergency: !prev.emergency,
            virtualConsultation: false,
            grandeAtHome: false,
            bookATest: false,
          };
        });
        break;

      case 'grandeAtHome':
        setActive((prev) => {
          return {
            ...prev,
            bookAppointment: false,
            findADoctor: false,
            emergency: false,
            virtualConsultation: false,
            grandeAtHome: !prev.grandeAtHome,
            bookATest: false,
          };
        });
        break;
      case 'bookATest':
        setActive((prev) => {
          return {
            ...prev,
            bookAppointment: false,
            findADoctor: false,
            emergency: false,
            virtualConsultation: false,
            grandeAtHome: false,
            bookATest: !prev.bookATest,
          };
        });
        break;
    }
  }
  return (
    <nav className='my-10 w-full hidden lg:flex lg:justify-center'>
      <div className='flex space-x-5 items-center'>
        {/*  */}
        <div
          // onClick={() => activeTab('bookAppointment')}
          className={`w-[178px] h-[146px] bg-white hover:-translate-y-5 hover:border-b-4 hover:border-[#184861] transition duration-200 ease-in-out rounded-lg shadow-xl flex justify-center items-center py-[10px] px-[25px] rounded-l-xl hover:cursor-pointer`}
        >
          <div className='flex flex-col space-y-5 items-center'>
            <Image
              src='/img/book-appointment.png'
              width={40}
              height={40}
              alt='book appointment'
            />

            <p className='text-[#184861] font-semibold text-[13px]'>
              Book Appointment
            </p>
          </div>
        </div>
        {/*  */}
        <div
          // onClick={() => activeTab('findADoctor')}
          className={`w-[178px] h-[146px] bg-white hover:-translate-y-5 hover:border-b-4 hover:border-[#184861] transition duration-200 ease-in-out rounded-lg shadow-xl flex justify-center items-center py-[10px] px-[25px]  hover:cursor-pointer`}
        >
          <div className='flex flex-col space-y-5 items-center'>
            <Image
              src='/img/findADoctor.png'
              width={40}
              height={40}
              alt='find a doctor'
            />

            <p className='text-[#184861] font-bold text-[13px]'>
              Find a Doctor
            </p>
          </div>
        </div>
        {/*  */}
        <div
          // onClick={() => activeTab('emergency')}
          className={`w-[178px] h-[146px] bg-white hover:-translate-y-5 hover:border-b-4 hover:border-[#184861] transition duration-200 ease-in-out rounded-lg shadow-xl flex justify-center items-center py-[10px] px-[25px]  hover:cursor-pointer `}
        >
          <div className='flex flex-col space-y-5 items-center'>
            <Image
              src='/img/emergency-room.png'
              width={40}
              height={40}
              alt='emergency'
            />

            <p className='text-[#184861] font-bold text-[13px]'>Emergency</p>
          </div>
        </div>

        {/*  */}
        <div
          // onClick={() => activeTab('grandeAtHome')}
          className={`w-[178px] h-[146px] bg-white hover:-translate-y-5 hover:border-b-4 hover:border-[#184861] transition duration-200 ease-in-out rounded-lg shadow-xl flex justify-center items-center py-[10px] px-[25px]  hover:cursor-pointer  `}
        >
          <div className='flex flex-col space-y-5 items-center'>
            <Image
              src='/img/hospitalAthome.png'
              width={40}
              height={40}
              alt='hospital at home'
            />

            <p className='capitalize text-[#184861]  font-bold text-[13px]'>
              Grande @ Home
            </p>
          </div>
        </div>
        {/*  */}
        <div
          // onClick={() => activeTab('bookATest')}
          className={`w-[178px] h-[146px] bg-white hover:-translate-y-5 hover:border-b-4 hover:border-[#184861] transition duration-200 ease-in-out rounded-lg shadow-xl flex justify-center items-center py-[10px] px-[25px] rounded-r-xl hover:cursor-pointer `}
        >
          <div className='flex flex-col space-y-5 items-center'>
            <Image
              src='/img/blood-test.png'
              width={40}
              height={40}
              alt='blood test'
            />

            <p className=' text-[#184861] text-center font-bold text-[13px]'>
              Lab report Download
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Tab;
