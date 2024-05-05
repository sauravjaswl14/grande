function PricingSection() {
  return (
    <main className='p-5 flex flex-col space-y-14 lg:flex-row lg:space-y-0 lg:space-x-7'>
      {/* <!-- Categories --> */}
      <nav>
        <h3 className='bg-[#2F884F] text-white text-[24px] font-[900] py-4 pl-10 pr-36 rounded-lg'>
          Categories
        </h3>
        <ul className='h-[480px] noScrollbar overflow-y-auto'>
          <li className='py-8 pl-10 border-b-2 text-lg'>Cateogry 1</li>
          <li className='py-8 pl-10 border-b-2 text-lg'>Cateogry 2</li>
          <li className='py-8 pl-10 border-b-2 text-lg'>Cateogry 3</li>
          <li className='py-8 pl-10 border-b-2 text-lg'>Cateogry 4</li>
          <li className='py-8 pl-10 border-b-2 text-lg'>Cateogry 5</li>
          <li className='py-8 pl-10 border-b-2 text-lg'>Cateogry 6</li>
          <li className='py-8 pl-10 border-b-2 text-lg'>Cateogry 7</li>
        </ul>
      </nav>
      {/* <!-- Cards Section --> */}
      <section className='w-full lg:max-w-[289px] shadow-md rounded-md'>
        {/* <!-- card  --> */}
        <div className='font-[900] h-fit flex flex-col items-center'>
          {/* <!-- top --> */}
          <div className='px-3 pb-3 pt-28'>
            <p className='text-lg lg:w-40'>Basic Wellness Checkup</p>
          </div>
          {/* <!-- mid --> */}
          <div className='p-3 flex flex-col space-y-3'>
            <h4 className='text-sm font-normal'>Blood Tests</h4>
            <p className='text-[#ABABAB] font-normal max-w-52'>
              CBC, RBG, Total Cholestrol, SGOT, SGPT, Creatinine
            </p>
            <h4 className='text-sm font-normal'>Urine Routine</h4>
            <h4 className='text-sm font-normal'>Chest X-Ray</h4>
            <h4 className='text-sm font-normal'>ECG</h4>
            <h4 className='text-sm font-normal'>Doctor&apos;s Consultation</h4>
            <h4 className='text-sm font-normal pt-7'>
              Get report within ...hours
            </h4>
            <h2 className='text-2xl'>NPR 3,000/-</h2>
          </div>
        </div>
      </section>
      {/* <!-- Booking Section --> */}
      <section className='w-full'>
        <form className='w-full px-10 py-14 sm:px-24 sm:py-28 bg-[#F2F2F2]'>
          <h3 className='text-lg font-[900] mb-6'>Patient Information</h3>
          {/* <!-- full name --> */}
          <div className='flex flex-col space-y-3 mb-6'>
            <label for='fullname' className='text-[14px]'>
              Full Name*
            </label>
            <input
              id='fullname'
              type='text'
              className='px-3 border-[0.5px] border-[#707070] h-12 w-full lg:w-64 rounded-[4px]'
            />
          </div>
          {/* <!-- phone and email --> */}
          <div className='flex flex-col lg:flex-row lg:space-x-4'>
            {/* <!-- phone --> */}
            <div className='flex flex-col space-y-3 mb-6'>
              <label for='phone' className='text-[14px]'>
                Phone Number*
              </label>
              <input
                id='phone'
                type='number'
                className='px-3 border-[0.5px] border-[#707070] h-12 w-full lg:w-64 rounded-[4px]'
              />
            </div>
            {/* <!-- email --> */}
            <div className='flex flex-col space-y-3 mb-6'>
              <label for='email' className='text-[14px]'>
                Email*
              </label>
              <input
                id='email'
                type='email'
                className='px-3 border-[0.5px] border-[#707070] h-12 w-full lg:w-64 rounded-[4px]'
              />
            </div>
          </div>
          {/* <!-- appointment date and time --> */}
          <div className='flex flex-col lg:flex-row lg:space-x-4'>
            {/* <!-- appointment date --> */}
            <div className='flex flex-col space-y-3 mb-6'>
              <label for='date' className='text-[14px]'>
                Appointment Date*
              </label>
              <input
                id='date'
                type='date'
                className='px-3 border-[0.5px] border-[#707070] h-12 w-64 rounded-[4px]'
              />
            </div>
            {/* <!-- Time --> */}
            <div className='flex flex-col space-y-3 mb-6'>
              <label for='time' className='text-[14px]'>
                Time*
              </label>
              <input
                id='time'
                type='time'
                className='px-3 border-[0.5px] border-[#707070] h-12 w-64 rounded-[4px]'
              />
            </div>
          </div>
          {/* <!-- Address Line 1 --> */}
          <div className='flex flex-col space-y-3 mb-6'>
            <label for='address1' className='text-[14px]'>
              Address Line 1*
            </label>
            <input
              id='address1'
              type='text'
              className='px-3 border-[0.5px] border-[#707070] h-12 w-full lg:w-[530px] rounded-[4px]'
            />
          </div>
          {/* <!-- Address Line 2 --> */}
          <div className='flex flex-col space-y-3 mb-6'>
            <label for='address2' className='text-[14px]'>
              Address Line 2*
            </label>
            <input
              id='address2'
              type='text'
              className='px-3 border-[0.5px] border-[#707070] h-12 w-full lg:w-[530px] rounded-[4px]'
            />
          </div>
          {/* <!-- gender and age --> */}
          <div className='flex flex-col sm:flex-row sm:space-x-4'>
            {/* <!-- gender --> */}
            <div className='flex flex-col space-y-3 mb-6'>
              <label for='gender' className='text-[14px]'>
                Sex*
              </label>
              <input
                id='gender'
                type='text'
                className='px-3 border-[0.5px] border-[#707070] h-12 w-full lg:w-40 rounded-[4px]'
              />
            </div>
            {/* <!-- age --> */}
            <div className='flex flex-col space-y-3 mb-6'>
              <label for='age' className='text-[14px]'>
                Age*
              </label>
              <input
                id='age'
                type='number'
                className='px-3 border-[0.5px] border-[#707070] h-12 w-full lg:w-40 rounded-[4px]'
              />
            </div>
          </div>
          <button className='bg-[#88BE9B] text-white py-4 px-16 rounded-lg transition-all duration-300 hover:bg-[#2F884F]'>
            Book This Package
          </button>
        </form>
      </section>
    </main>
  );
}
export default PricingSection;
