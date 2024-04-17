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
      case 'virtualConsultation':
        setActive((prev) => {
          return {
            ...prev,
            bookAppointment: false,
            findADoctor: false,
            emergency: false,
            virtualConsultation: !prev.virtualConsultation,
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
    <nav className='w-full flex justify-center'>
      <div className='flex h-[80px] rounded-xl bg-[#fff] shadow-xl'>
        {/*  */}
        <div
          onClick={() => activeTab('bookAppointment')}
          className={`flex justify-center items-center py-[10px] px-[25px] rounded-l-xl hover:cursor-pointer ${
            isActive.bookAppointment ? 'bg-[#e5e5e5]' : ''
          } `}
        >
          <div className='flex space-x-5 items-center'>
            <Image src='/img/book-appointment.png' width={40} height={40} />

            <p className='text-[#184861] font-semibold text-[13px]'>
              Book Appointment
            </p>
          </div>
        </div>
        {/*  */}
        <div
          onClick={() => activeTab('findADoctor')}
          className={`flex justify-center items-center py-[10px] px-[25px]  hover:cursor-pointer ${
            isActive.findADoctor ? 'bg-[#e5e5e5]' : ''
          } `}
        >
          <div className='flex space-x-5 items-center'>
            <Image src='/img/findADoctor.png' width={40} height={40} />

            <p className='text-[#184861] font-bold text-[13px]'>
              Find a Doctor
            </p>
          </div>
        </div>
        {/*  */}
        <div
          onClick={() => activeTab('emergency')}
          className={`flex justify-center items-center py-[10px] px-[25px]  hover:cursor-pointer ${
            isActive.emergency ? 'bg-[#e5e5e5]' : ''
          } `}
        >
          <div className='flex space-x-5 items-center'>
            <Image src='/img/emergency-room.png' width={40} height={40} />

            <p className='text-[#184861] font-bold text-[13px]'>Emergency</p>
          </div>
        </div>
        {/*  */}
        <div
          onClick={() => activeTab('virtualConsultation')}
          className={`flex justify-center items-center py-[10px] px-[25px]  hover:cursor-pointer ${
            isActive.virtualConsultation ? 'bg-[#e5e5e5]' : ''
          } `}
        >
          <div className='flex space-x-5 items-center'>
            <Image src='/img/medical-checkup.png' width={40} height={40} />

            <p className='capitalize text-[#184861]  font-bold text-[13px]'>
              Book a virtual consultation
            </p>
          </div>
        </div>
        {/*  */}
        <div
          onClick={() => activeTab('grandeAtHome')}
          className={`flex justify-center items-center py-[10px] px-[25px]  hover:cursor-pointer ${
            isActive.grandeAtHome ? 'bg-[#e5e5e5]' : ''
          } `}
        >
          <div className='flex space-x-5 items-center'>
            <Image src='/img/hospitalAthome.png' width={40} height={40} />

            <p className='capitalize text-[#184861]  font-bold text-[13px]'>
              Grande @ Home
            </p>
          </div>
        </div>
        {/*  */}
        <div
          onClick={() => activeTab('bookATest')}
          className={`flex justify-center items-center py-[10px] px-[25px] rounded-r-xl hover:cursor-pointer ${
            isActive.bookATest ? 'bg-[#e5e5e5]' : ''
          } `}
        >
          <div className='flex space-x-5 items-center'>
            <Image src='/img/blood-test.png' width={40} height={40} />

            <p className=' text-[#184861]  font-bold text-[13px]'>
              Book a Test
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Tab;
