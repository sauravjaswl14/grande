function HealthPackagesSection() {
  return (
    <main className='p-5 flex flex-col space-y-14 md:flex-row md:space-y-0 md:space-x-7'>
      {/* <!-- Categories --> */}
      <nav className=''>
        <h3 className='bg-[#184861] text-white text-[24px] font-[900] py-4 pl-10 pr-36 rounded-md'>
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
      <div className='w-full flex justify-center'>
        <section className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {/* <!-- card 1 --> */}
          <div className='font-[900] shadow-lg rounded-xl h-fit'>
            {/* <!-- top --> */}
            <div className='p-5 border-b-2 border-[#dee1e1]'>
              <h3 className='text-lg text-center'>Basic Wellness Checkup</h3>
            </div>
            {/* <!-- mid --> */}
            <div className='p-5 border-b-2 border-[#dee1e1] flex flex-col space-y-3'>
              <h4 className='text-sm font-normal'>Blood Tests</h4>
              <p className='text-[#ABABAB] font-normal max-w-52'>
                CBC, RBG, Total Cholestrol, SGOT, SGPT, Creatinine
              </p>
              <h4 className='text-sm font-normal'>Urine Routine</h4>
              <h4 className='text-sm font-normal'>Chest X-Ray</h4>
              <h4 className='text-sm font-normal'>ECG</h4>
              <h4 className='text-sm font-normal'>
                Doctor&apos;s Consultation
              </h4>
              <h4 className='text-sm font-normal pt-7'>
                Get report within ...hours
              </h4>
              <h2 className='text-2xl'>NPR 3,000/-</h2>
            </div>
            {/* <!-- Bottom --> */}
            <div className='py-3 flex justify-center items-center'>
              <button className='py-2 px-5 text-white bg-[#184861] transition duration-300 hover:bg-[#2F884F] rounded-md'>
                Read More
              </button>
            </div>
          </div>
          {/* <!-- card 2 --> */}
          <div className='font-[900] shadow-lg rounded-xl h-fit'>
            {/* <!-- top --> */}
            <div className='p-5 border-b-2 border-[#dee1e1]'>
              <h3 className='text-lg text-center'>Standard Wellness Checkup</h3>
            </div>
            {/* <!-- mid --> */}
            <div className='p-5 border-b-2 border-[#dee1e1] flex flex-col space-y-3'>
              <h4 className='text-sm font-normal'>Blood Tests</h4>
              <p className='text-[#ABABAB] font-normal max-w-52'>
                CBC, RBG, Total Cholestrol, SGOT, SGPT, Creatinine
              </p>
              <h4 className='text-sm font-normal'>Urine Routine</h4>
              <h4 className='text-sm font-normal'>Chest X-Ray</h4>
              <h4 className='text-sm font-normal'>ECG</h4>
              <h4 className='text-sm font-normal'>
                Doctor&apos;s Consultation
              </h4>
              <h4 className='text-sm font-normal pt-7'>
                Get report within ...hours
              </h4>
              <h2 className='text-2xl'>NPR 3,000/-</h2>
            </div>
            {/* <!-- Bottom --> */}
            <div className='py-3 flex justify-center items-center'>
              <button className='py-2 px-5 text-white bg-[#184861] transition duration-300 hover:bg-[#2F884F] rounded-md'>
                Read More
              </button>
            </div>
          </div>
          {/* <!-- card 3 --> */}
          <div className='font-[900] shadow-lg rounded-xl h-fit'>
            {/* <!-- top --> */}
            <div className='p-5 border-b-2 border-[#dee1e1]'>
              <h3 className='text-lg text-center'>Standard Wellness Checkup</h3>
            </div>
            {/* <!-- mid --> */}
            <div className='p-5 border-b-2 border-[#dee1e1] flex flex-col space-y-3'>
              <h4 className='text-sm font-normal'>Blood Tests</h4>
              <p className='text-[#ABABAB] font-normal max-w-52'>
                CBC, RBG, Total Cholestrol, SGOT, SGPT, Creatinine
              </p>
              <h4 className='text-sm font-normal'>Urine Routine</h4>
              <h4 className='text-sm font-normal'>Chest X-Ray</h4>
              <h4 className='text-sm font-normal'>ECG</h4>
              <h4 className='text-sm font-normal'>
                Doctor&apos;s Consultation
              </h4>
              <h4 className='text-sm font-normal pt-7'>
                Get report within ...hours
              </h4>
              <h2 className='text-2xl'>NPR 3,000/-</h2>
            </div>
            {/* <!-- Bottom --> */}
            <div className='py-3 flex justify-center items-center'>
              <button className='py-2 px-5 text-white bg-[#184861] transition duration-300 hover:bg-[#2F884F] rounded-md'>
                Read More
              </button>
            </div>
          </div>
          {/* <!-- card 4 --> */}
          <div className='font-[900] shadow-lg rounded-xl h-fit'>
            {/* <!-- top --> */}
            <div className='p-5 border-b-2 border-[#dee1e1]'>
              <h3 className='text-lg text-center'>Basic Wellness Checkup</h3>
            </div>
            {/* <!-- mid --> */}
            <div className='p-5 border-b-2 border-[#dee1e1] flex flex-col space-y-3'>
              <h4 className='text-sm font-normal'>Blood Tests</h4>
              <p className='text-[#ABABAB] font-normal max-w-52'>
                CBC, RBG, Total Cholestrol, SGOT, SGPT, Creatinine
              </p>
              <h4 className='text-sm font-normal'>Urine Routine</h4>
              <h4 className='text-sm font-normal'>Chest X-Ray</h4>
              <h4 className='text-sm font-normal'>ECG</h4>
              <h4 className='text-sm font-normal'>
                Doctor&apos;s Consultation
              </h4>
              <h4 className='text-sm font-normal pt-7'>
                Get report within ...hours
              </h4>
              <h2 className='text-2xl'>NPR 3,000/-</h2>
            </div>
            {/* <!-- Bottom --> */}
            <div className='py-3 flex justify-center items-center'>
              <button className='py-2 px-5 text-white bg-[#184861] transition duration-300 hover:bg-[#2F884F] rounded-md'>
                Read More
              </button>
            </div>
          </div>
          {/* <!-- card 5 --> */}
          <div className='font-[900] shadow-lg rounded-xl h-fit'>
            {/* <!-- top --> */}
            <div className='p-5 border-b-2 border-[#dee1e1]'>
              <h3 className='text-lg text-center'>Standard Wellness Checkup</h3>
            </div>
            {/* <!-- mid --> */}
            <div className='p-5 border-b-2 border-[#dee1e1] flex flex-col space-y-3'>
              <h4 className='text-sm font-normal'>Blood Tests</h4>
              <p class='text-[#ABABAB] font-normal max-w-52'>
                CBC, RBG, Total Cholestrol, SGOT, SGPT, Creatinine
              </p>
              <h4 class='text-sm font-normal'>Urine Routine</h4>
              <h4 class='text-sm font-normal'>Chest X-Ray</h4>
              <h4 class='text-sm font-normal'>ECG</h4>
              <h4 class='text-sm font-normal'>Doctor&apos;s Consultation</h4>
              <h4 class='text-sm font-normal pt-7'>
                Get report within ...hours
              </h4>
              <h2 class='text-2xl'>NPR 3,000/-</h2>
            </div>
            {/* <!-- Bottom --> */}
            <div class='py-3 flex justify-center items-center'>
              <button class='py-2 px-5 text-white bg-[#184861] transition duration-300 hover:bg-[#2F884F] rounded-md'>
                Read More
              </button>
            </div>
          </div>
          {/* <!-- card 6 --> */}
          <div class='font-[900] shadow-lg rounded-xl h-fit'>
            {/* <!-- top --> */}
            <div class='p-5 border-b-2 border-[#dee1e1]'>
              <h3 class='text-lg text-center'>Standard Wellness Checkup</h3>
            </div>
            {/* <!-- mid --> */}
            <div class='p-5 border-b-2 border-[#dee1e1] flex flex-col space-y-3'>
              <h4 class='text-sm font-normal'>Blood Tests</h4>
              <p class='text-[#ABABAB] font-normal max-w-52'>
                CBC, RBG, Total Cholestrol, SGOT, SGPT, Creatinine
              </p>
              <h4 class='text-sm font-normal'>Urine Routine</h4>
              <h4 class='text-sm font-normal'>Chest X-Ray</h4>
              <h4 class='text-sm font-normal'>ECG</h4>
              <h4 class='text-sm font-normal'>Doctor&apos;s Consultation</h4>
              <h4 class='text-sm font-normal pt-7'>
                Get report within ...hours
              </h4>
              <h2 class='text-2xl'>NPR 3,000/-</h2>
            </div>
            {/* <!-- Bottom --> */}
            <div class='py-3 flex justify-center items-center'>
              <button class='py-2 px-5 text-white bg-[#184861] transition duration-300 hover:bg-[#2F884F] rounded-md'>
                Read More
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
export default HealthPackagesSection;
