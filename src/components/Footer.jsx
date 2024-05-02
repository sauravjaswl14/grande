import Image from 'next/image';

function Footer() {
  return (
    <footer className='z-30 mt-20 bg-[#184861] text-white p-5 lg:py-10 lg:px-20'>
      <div className='flex flex-col space-y-5 lg:space-y-0 lg:flex-row lg:justify-between'>
        {/* <!--  --> */}
        <div className='flex flex-col space-y-5 lg:space-y-0 lg:flex-row lg:space-x-20'>
          <div className='w-[140px] h-[52.16px]'>
            <Image
              src='/img/logo-white.png'
              width={140}
              height={52.16}
              alt='grande white logo'
            />
          </div>

          <div className='flex flex-col space-y-5'>
            <h4 className='text-[18px] uppercase font-bold'>Contact us</h4>
            <div className='flex flex-col space-y-[2px]'>
              <p>+977-1-5159266,</p>
              <p>+977-9801202550</p>
            </div>
            <p>P.O. Box 11796</p>
            <p>Dhapasi, Kathmandu</p>
            <p>info@grandehospital.com</p>
          </div>
        </div>
        {/* <!--  --> */}
        <div className='flex flex-col space-y-5 lg:space-y-0 lg:flex-row lg:space-x-20'>
          <div className='flex flex-col space-y-5'>
            <h4 className='text-[18px] uppercase font-bold'>Quick links</h4>
            <a href='#'>About GIH</a>
            <a href='#'>Health Packages</a>
            <a href='#'>Career</a>
            <a href='#'>Report Download</a>
          </div>

          <div className='flex flex-col space-y-5'>
            <h4 className='text-[18px] uppercase font-bold'>Enquiry</h4>
            <form className='flex flex-col space-y-2'>
              <input
                type='text'
                placeholder='Name'
                className='bg-white p-3 rounded-lg text-black placeholder:text-[#292929] focus:outline-none'
              />
              <div className='flex flex-col space-y-2 lg:space-y-0 lg:flex-row lg:space-x-5'>
                <input
                  type='tel'
                  placeholder='Your Contact Number'
                  className='bg-white p-3 rounded-lg text-black placeholder:text-[#292929] focus:outline-none'
                />
                <input
                  type='email'
                  placeholder='Your Email'
                  className='bg-white p-3 rounded-lg text-black placeholder:text-[#292929] focus:outline-none'
                />
              </div>
              <textarea
                name='message'
                id='message'
                cols='30'
                rows='5'
                placeholder='Your Message'
                className='bg-white p-3 rounded-lg text-black placeholder:text-[#292929] focus:outline-none'
              ></textarea>

              <button className='py-2 px-5 bg-white rounded-lg text-[#292929] w-44 font-semibold hover:bg-[#88be9b] hover:text-white transition ease-in-out duration-200'>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
