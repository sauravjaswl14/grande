'use client';

function CareerApplyform() {
  return (
    <form className='p-10 bg-white rounded-md shadow-xl flex flex-col space-y-5 '>
      <div className='grid grid-cols-3 gap-6'>
        <div className='flex flex-col space-y-3'>
          <label htmlFor='fullname'>Full Name</label>
          <input
            type='text'
            id='fullname'
            placeholder='full name'
            className='border-2 border-[#e5e5e5] py-2 px-5 rounded-md bg-white'
          />
        </div>
        <div className='flex flex-col space-y-3'>
          <label htmlFor='gender'>Gender</label>
          <select
            name='gender'
            id='gender'
            className='border-2 border-[#e5e5e5] py-2 px-5 rounded-md bg-white'
          >
            <option value='male'>Male</option>
            <option value='female'>Female</option>
            <option value='others'>Others</option>
          </select>
        </div>
        <div className='flex flex-col space-y-3'>
          <label htmlFor='dob'>Date of Birth</label>
          <input
            id='dob'
            type='date'
            className='border-2 border-[#e5e5e5] py-2 px-5 rounded-md bg-white'
          />
        </div>
        <div className='flex flex-col space-y-3'>
          <label htmlFor='current_address'>Current Address</label>
          <input
            id='current_address'
            type='text'
            placeholder='Current Address'
            className='border-2 border-[#e5e5e5] py-2 px-5 rounded-md bg-white'
          />
        </div>
        <div className='flex flex-col space-y-3'>
          <label htmlFor='contact_number'>Contact Number</label>
          <input
            id='contact_number'
            type='tel'
            placeholder='Contact Number'
            className='border-2 border-[#e5e5e5] py-2 px-5 rounded-md bg-white'
          />
        </div>
        <div className='flex flex-col space-y-3'>
          <label htmlFor='email'>Email Address</label>
          <input
            id='email'
            type='email'
            placeholder='Email Address'
            className='border-2 border-[#e5e5e5] py-2 px-5 rounded-md bg-white'
          />
        </div>
        <div className='flex flex-col space-y-3'>
          <label htmlFor='education'>Highest Education Qualification</label>
          <input
            id='education'
            type='text'
            placeholder='Education'
            className='border-2 border-[#e5e5e5] py-2 px-5 rounded-md bg-white'
          />
        </div>
        <div className='flex flex-col space-y-3'>
          <label htmlFor='position'>Applying for position</label>
          <input
            id='position'
            type='text'
            placeholder='Position'
            className='border-2 border-[#e5e5e5] py-2 px-5 rounded-md bg-white'
          />
        </div>
        <div className='flex flex-col space-y-3'>
          <label htmlFor='experience1'>Experience(1)</label>
          <input
            id='experience1'
            type='text'
            placeholder='Experience'
            className='border-2 border-[#e5e5e5] py-2 px-5 rounded-md bg-white'
          />
        </div>
        <div className='flex flex-col space-y-3'>
          <label htmlFor='total_years'>Total period (In Years)</label>
          <input
            id='total_years'
            type='number'
            placeholder='specify the number of years you have worked'
            className='border-2 border-[#e5e5e5] py-2 px-5 rounded-md bg-white'
          />
        </div>
        <div className='flex flex-col space-y-3'>
          <label htmlFor='experience2'>Experience(2)</label>
          <input
            id='experience2'
            type='text'
            placeholder='Experience'
            className='border-2 border-[#e5e5e5] py-2 px-5 rounded-md bg-white'
          />
        </div>
        <div className='flex flex-col space-y-3'>
          <label htmlFor='total_years'>Total period (In Years)</label>
          <input
            id='total_years'
            type='number'
            placeholder='specify the number of years you have worked'
            className='border-2 border-[#e5e5e5] py-2 px-5 rounded-md bg-white'
          />
        </div>
        <div className='flex flex-col space-y-3'>
          <label htmlFor='reference1'>Reference(1)</label>
          <input
            id='reference1'
            type='text'
            placeholder='Mention with Name, Organization and contact
          Details'
            className='border-2 border-[#e5e5e5] py-2 px-5 rounded-md bg-white'
          />
        </div>
        <div className='flex flex-col space-y-3'>
          <label htmlFor='reference2'>Reference(2)</label>
          <input
            id='reference2'
            type='text'
            placeholder='Mention with Name, Organization and contact
          Details'
            className='border-2 border-[#e5e5e5] py-2 px-5 rounded-md bg-white'
          />
        </div>
        <div className='flex flex-col space-y-3'>
          <label htmlFor='application_letter'>
            Please upload your Application Letter
          </label>
          <input
            id='application_letter'
            type='file'
            className='border-2 border-[#e5e5e5] py-2 px-5 rounded-md bg-white'
          />
        </div>
        <div className='flex flex-col space-y-3'>
          <label htmlFor='cv'>
            Please upload your CV. Note : (Please mention Reference Name with
            Organization and Contact Details in CV)
          </label>
          <input
            id='cv'
            type='file'
            className='border-2 border-[#e5e5e5] py-2 px-5 rounded-md bg-white'
          />
        </div>
      </div>

      <button
        type='submit'
        className='w-44 py-2 px-5 rounded-md bg-[#184861] hover:bg-[#238751] text-white transition ease-in-out duration-200'
      >
        Submit
      </button>
    </form>
  );
}
export default CareerApplyform;
