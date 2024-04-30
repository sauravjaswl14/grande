function AppointmentSection() {
  return (
    <div className='bg-gray-100 appointment-section p-8 lg:p-20 flex justify-center items-center'>
      <div className='flex flex-col-reverse space-y-5 lg:space-y-0 lg:flex-row lg:space-x-20 lg:items-center '>
        <div className='mt-12 lg:mt-0 w-full lg:w-[570px] bg-white shadow-xl py-20 px-10 rounded-lg'>
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

        <div className='p-3 flex flex-col space-y-6'>
          <h2 className='text-[24px] lg:text-[18px] font-semibold text-[#238751]'>
            Need a Doctor for Check-up?
          </h2>

          <p className='text-lg lg:text-[36px] font-semibold leading-snug max-w-xl'>
            Just Make an Appointment and You&apos;re Done!
          </p>

          <p className='text-[#666]'>
            You can contact us on this number: <br />
            <span className='text-[18px] lg:text-[24px] pr-5'>
              +977-1-5159266
            </span>
            <span className='text-[18px] lg:text-[24px]'>+977-9801202550</span>
          </p>
        </div>
      </div>
    </div>
  );
}
export default AppointmentSection;
