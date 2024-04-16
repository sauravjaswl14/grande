function Appointment() {
  return (
    <div className=' z-50 flex justify-center'>
      <div className='appointment lg:w-[90%] rounded-b-xl p-10'>
        <h2 className='mb-8 text-white text-[30px] font-semibold'>
          Make an appointment
        </h2>
        <form className='flex space-x-5 items-center'>
          <div className='w-[324px] flex flex-col space-y-5'>
            <input
              type='text'
              placeholder='Your Name'
              className='w-full text-[#184861] py-4 px-8 rounded-md bg-white'
            />
            <input
              type='email'
              placeholder='Your Email'
              className='w-full text-[#184861] py-4 px-8 rounded-md bg-white'
            />
          </div>
          <div className='w-[324px] flex flex-col space-y-5'>
            <input
              type='text'
              placeholder='Your Phone'
              className='w-full text-[#184861] py-4 px-8 rounded-md bg-white'
            />
            <select
              name='doctor'
              id='doctor'
              className='text-[#184861] w-full h-[56px] py-4 px-8 rounded-md bg-white'
            >
              <option>Choose Doctor</option>
              <option value='doctor-1'>Doctor 1</option>
              <option value='doctor-2'>Doctor 2</option>
              <option value='doctor-3'>Doctor 3</option>
            </select>
          </div>
          <textarea
            name='appointment-note'
            id='appointment-note'
            cols='10'
            rows='10'
            className='w-[405px] h-[140px] text-[#184861] py-4 px-8 rounded-md bg-white'
            placeholder='Type Appointment Note...'
          ></textarea>

          <button
            type='submit'
            className='w-56 flex justify-center items-center h-[59px] bg-[#031b4e] p-5 rounded-full text-white'
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
export default Appointment;
