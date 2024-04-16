function MainDepartment() {
  return (
    <section className='service flex flex-col gap-10 justify-center items-center py-20'>
      {/* <!-- Card container --> */}
      <div>
        {/* <!-- grid --> */}
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7'>
          {/* <!-- grid 1 container--> */}
          <div className='group p-[10px] w-[375px] lg:w-[430px] shadow-lg'>
            {/* <!-- image box --> */}
            <div className='overflow-hidden'>
              <img
                src='/img/image1.jpg'
                alt=''
                className='w-[100%] transtion-all ease-in-out duration-300 group-hover:scale-125'
              />
            </div>
            {/* <!-- lower --> */}
            <div className='flex flex-col'>
              {/* <!-- title --> */}
              <div className='flex space-x-5 items-center pt-5 px-3 pb-8'>
                <span>
                  <img src='/img/heart.png' alt='' className='w-[32px]' />
                </span>
                <h3 className='text-[24px] text-[#184861] font-semibold'>
                  Cardiology Department
                </h3>
              </div>
              <p className='px-5 pb-8'>
                Introduction. Cardiology is the study heart conditions. The
                Consultant with whom you have an appointment is a specialist.
              </p>
            </div>
          </div>
          {/* <!-- grid 2 container--> */}
          <div className='group p-[10px] w-[375px] lg:w-[430px] shadow-lg'>
            {/* <!-- image box --> */}
            <div className='overflow-hidden'>
              <img
                src='/img/image2.jpg'
                alt=''
                className='w-[100%] transtion-all ease-in-out duration-300 group-hover:scale-125'
              />
            </div>
            {/* <!-- lower --> */}
            <div className='flex flex-col'>
              {/* <!-- title --> */}
              <div className='flex space-x-5 items-center pt-5 px-3 pb-8'>
                <span>
                  <img src='/img/heart.png' alt='' className='w-[32px]' />
                </span>
                <h3 className='text-[24px] text-[#184861] font-semibold'>
                  Neurology Department
                </h3>
              </div>
              <p className='px-5 pb-8'>
                Introduction. Cardiology is the study heart conditions. The
                Consultant with whom you have an appointment is a specialist.
              </p>
            </div>
          </div>
          {/* <!-- grid 3 container--> */}
          <div className='group p-[10px] w-[375px] lg:w-[430px] shadow-lg'>
            {/* <!-- image box --> */}
            <div className='overflow-hidden'>
              <img
                src='/img/image3.jpg'
                alt=''
                className='w-[100%] transtion-all ease-in-out duration-300 group-hover:scale-125'
              />
            </div>
            {/* <!-- lower --> */}
            <div className='flex flex-col'>
              {/* <!-- title --> */}
              <div className='flex space-x-5 items-center pt-5 px-3 pb-8'>
                <span>
                  <img src='/img/heart.png' alt='' className='w-[32px]' />
                </span>
                <h3 className='text-[24px] text-[#184861] font-semibold'>
                  Urology Department
                </h3>
              </div>
              <p className='px-5 pb-8'>
                Introduction. Cardiology is the study heart conditions. The
                Consultant with whom you have an appointment is a specialist.
              </p>
            </div>
          </div>
          {/* <!-- grid 4 container--> */}
          <div className='group p-[10px] w-[375px] lg:w-[430px] shadow-lg'>
            {/* <!-- image box --> */}
            <div className='overflow-hidden'>
              <img
                src='/img/image4.jpg'
                alt=''
                className='w-[100%] transtion-all ease-in-out duration-300 group-hover:scale-125'
              />
            </div>
            {/* <!-- lower --> */}
            <div className='flex flex-col'>
              {/* <!-- title --> */}
              <div className='flex space-x-5 items-center pt-5 px-3 pb-8'>
                <span>
                  <img src='/img/heart.png' alt='' className='w-[32px]' />
                </span>
                <h3 className='text-[24px] text-[#184861] font-semibold'>
                  Gynecological
                </h3>
              </div>
              <p className='px-5 pb-8'>
                Introduction. Cardiology is the study heart conditions. The
                Consultant with whom you have an appointment is a specialist.
              </p>
            </div>
          </div>
          {/* <!-- grid 5 container--> */}
          <div className='group p-[10px] w-[375px] lg:w-[430px] shadow-lg'>
            {/* <!-- image box --> */}
            <div className='overflow-hidden'>
              <img
                src='/img/image5.jpg'
                alt=''
                className='w-[100%] transtion-all ease-in-out duration-300 group-hover:scale-125'
              />
            </div>
            {/* <!-- lower --> */}
            <div className='flex flex-col'>
              {/* <!-- title --> */}
              <div className='flex space-x-5 items-center pt-5 px-3 pb-8'>
                <span>
                  <img src='/img/heart.png' alt='' className='w-[32px]' />
                </span>
                <h3 className='text-[24px] text-[#184861] font-semibold'>
                  Pediatrical
                </h3>
              </div>
              <p className='px-5 pb-8'>
                Introduction. Cardiology is the study heart conditions. The
                Consultant with whom you have an appointment is a specialist.
              </p>
            </div>
          </div>
          {/* <!-- grid 6 container--> */}
          <div className='group p-[10px] w-[375px] lg:w-[430px] shadow-lg'>
            {/* <!-- image box --> */}
            <div className='overflow-hidden'>
              <img
                src='/img/image6.jpg'
                alt=''
                className='w-[100%] transtion-all ease-in-out duration-300 group-hover:scale-125'
              />
            </div>
            {/* <!-- lower --> */}
            <div className='flex flex-col'>
              {/* <!-- title --> */}
              <div className='flex space-x-5 items-center pt-5 px-3 pb-8'>
                <span>
                  <img src='/img/heart.png' alt='' className='w-[32px]' />
                </span>
                <h3 className='text-[24px] text-[#184861] font-semibold'>
                  Laboratory
                </h3>
              </div>
              <p className='px-5 pb-8'>
                Introduction. Cardiology is the study heart conditions. The
                Consultant with whom you have an appointment is a specialist.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Buttons --> */}
      <div className='flex space-x-'>
        <ul className='flex justify-center items-center space-x-3'>
          <li className='flex justify-center items-center h-10 w-16 rounded-sm shadow-lg transition-all ease-in-out duration-300 cursor-pointer hover:bg-[#1370b5]'>
            <img
              src='./img/arrow-left.svg'
              alt=''
              className='h-5 w-5 align-middle'
            />
          </li>
          <li className='flex justify-center items-center h-10 w-10 rounded-sm shadow-lg transition-all ease-in-out duration-300 cursor-pointer hover:bg-[#1370b5] hover:text-white'>
            1
          </li>
          <li className='flex justify-center items-center h-10 w-10 rounded-sm shadow-lg transition-all ease-in-out duration-300 cursor-pointer hover:bg-[#1370b5] hover:text-white'>
            2
          </li>
          <li className='flex justify-center items-center h-10 w-10 rounded-sm shadow-lg transition-all ease-in-out duration-300 cursor-pointer hover:bg-[#1370b5] hover:text-white'>
            3
          </li>
          <li className='flex justify-center items-center h-10 w-16 rounded-sm shadow-lg transition-all ease-in-out duration-300 cursor-pointer hover:bg-[#1370b5]'>
            <img
              src='./img/arrow-right.svg'
              alt=''
              className='h-5 w-5 align-middle'
            />
          </li>
        </ul>
      </div>
    </section>
  );
}
export default MainDepartment;
