function AppointmentSection() {
  return (
    <div className='appointment-section p-20 flex justify-center items-center'>
      <div className='flex space-x-20 '>
        <div className='w-[570px] bg-white shadow-xl py-20 px-10 rounded-lg'>
          <form className='flex flex-col space-y-5'>
            <input
              type='text'
              placeholder='Your Name'
              className=' border-2 text-[#363636] border-[#e1e1e1] bg-white p-3 rounded-md placeholder:text-[#5c6770]'
            />
            <input
              type='email'
              placeholder='Your Email'
              className=' border-2 text-[#363636] border-[#e1e1e1] bg-white p-3 rounded-md placeholder:text-[#5c6770]'
            />
            <input
              type='tel'
              placeholder='Your Phone'
              className=' border-2 text-[#363636] border-[#e1e1e1] bg-white p-3 rounded-md placeholder:text-[#5c6770]'
            />
            <textarea
              name='message'
              id='message'
              cols='30'
              rows='10'
              placeholder='Patient Message'
              className=' border-2 text-[#363636] border-[#e1e1e1] bg-white p-3 rounded-md placeholder:text-[#5c6770]'
            ></textarea>

            <button
              type='submit'
              className='w-44 py-2 px-5 rounded-md border-2 border-[#238751] flex justify-center items-center hover:bg-[#238751] hover:text-white transition duration-200 ease-in-out'
            >
              Submit
            </button>
          </form>
        </div>

        <div className='flex flex-col space-y-6'>
          <h2 className='text-[18px] font-semibold text-[#238751]'>
            Need a Doctor for Check-up?
          </h2>

          <p className='text-[36px] font-semibold max-w-xl'>
            Just Make an Appointment and You&apos;re Done!
          </p>

          <p className='text-[#666]'>
            You can contact us on this number: <br />{' '}
            <span className='text-[24px] pr-5'>+977-1-5159266</span>{' '}
            <span className='text-[24px]'>+977-9801202550</span>
          </p>
          <h3 className='text-[36px] font-semibold text-[#238751]'>
            Opening Hours
          </h3>

          <div className='flex flex-col space-y-4 divide-y-2'>
            {/*  */}
            <div className='w-[500px] text-[18px] text-[#777] py-3 flex justify-between'>
              <div className='flex space-x-5 items-center'>
                <img src='/img/clock-green.png' className='w-5' alt='' />
                <p className=''>Monday - Thursday</p>
              </div>
              <p className=''>08:00 - 20:00</p>
            </div>
            {/*  */}
            <div className='w-[500px] text-[18px] text-[#777] py-3 flex justify-between'>
              <div className='flex space-x-5 items-center'>
                <img src='/img/clock-green.png' className='w-5' alt='' />
                <p className=''>Friday</p>
              </div>
              <p className=''>09:00 - 19:00</p>
            </div>
            {/*  */}
            <div className='w-[500px] text-[18px] text-[#777] py-3 flex justify-between'>
              <div className='flex space-x-5 items-center'>
                <img src='/img/clock-green.png' className='w-5' alt='' />
                <p className=''>Saturday - Thursday</p>
              </div>
              <p className=''>09:00 - 18:00</p>
            </div>
            {/*  */}
            <div className='w-[500px] text-[18px] text-[#777] py-3 flex justify-between'>
              <div className='flex space-x-5 items-center'>
                <img src='/img/clock-green.png' className='w-5' alt='' />
                <p className=''>Sunday - Thursday</p>
              </div>
              <p className=''>09:00 - 18:00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AppointmentSection;
