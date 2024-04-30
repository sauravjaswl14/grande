import Image from 'next/image';

function GrandeAtHomeSection() {
  return (
    <section>
      <div className='m-20 flex flex-col space-y-5 lg:space-y-0 lg:flex-row lg:space-x-64 lg:justify-center lg:items-center'>
        <div className='flex flex-col space-y-10'>
          <h2 className='capitalize text-4xl font-semibold text-[#184861]'>
            Grande At Home
          </h2>
          <p className='text-xl max-w-lg'>
            Grande @ home is offering specialized home care services. Our
            skilled medical team aims to deliver the best possible care to
            patients at their home, thus eliminating their need to travel to the
            hospital.
          </p>
          <p>For further details contact 9801202535.</p>
        </div>
        <Image
          src='/img/images/Grande-@-Home-scaled.jpg'
          width={600}
          height={200}
          alt='grande at home'
        />
      </div>

      <div className='m-20'>
        <h2 className='text-[#184861] text-2xl font-semibold'>
          Following services can be availed from our Grande @ Home Team.
        </h2>

        <div className='mt-20 flex justify-between '>
          <div className='pt-10 flex flex-col space-y-3 w-fit'>
            <div className='px-5 py-2 bg-white shadow-md rounded-md inline-block '>
              <div className='flex space-x-5 items-center'>
                <Image
                  src='/img/point.png'
                  width={32}
                  height={32}
                  alt='point'
                />
                <p>Physiotherapy</p>
              </div>
            </div>
            <div className='px-5 py-2 bg-white shadow-md rounded-md inline-block '>
              <div className='flex space-x-5 items-center'>
                <Image
                  src='/img/point.png'
                  width={32}
                  height={32}
                  alt='point'
                />
                <p>PCR Home Collection</p>
              </div>
            </div>
            <div className='px-5 py-2 bg-white shadow-md rounded-md inline-block '>
              <div className='flex space-x-5 items-center'>
                <Image
                  src='/img/point.png'
                  width={32}
                  height={32}
                  alt='point'
                />
                <p>Dressing</p>
              </div>
            </div>
            <div className='px-5 py-2 bg-white shadow-md rounded-md inline-block '>
              <div className='flex space-x-5 items-center'>
                <Image
                  src='/img/point.png'
                  width={32}
                  height={32}
                  alt='point'
                />
                <p>Ambulance</p>
              </div>
            </div>
            <div className='px-5 py-2 bg-white shadow-md rounded-md inline-block '>
              <div className='flex space-x-5 items-center'>
                <Image
                  src='/img/point.png'
                  width={32}
                  height={32}
                  alt='point'
                />
                <p>Sample collection for investigation</p>
              </div>
            </div>
            <div className='px-5 py-2 bg-white shadow-md rounded-md inline-block '>
              <div className='flex space-x-5 items-center'>
                <Image
                  src='/img/point.png'
                  width={32}
                  height={32}
                  alt='point'
                />
                <p>patient Care Attendant</p>
              </div>
            </div>
          </div>

          <div className='flex space-x-5'>
            <div className='flex flex-col space-y-5'>
              <Image
                src='/img/images/pcr.jpg '
                width={400}
                height={200}
                alt='grande at Home Image'
              />
              <Image
                src='/img/images/csr-N1-min-1024x682.png'
                width={400}
                height={200}
                alt='grande at Home Image'
              />
            </div>
            <div className='flex flex-col space-y-5'>
              <Image
                src='/img/images/700003.jpg'
                width={410}
                height={200}
                alt='grande at Home Image'
              />
              {/* <Image
                src='/img/images/2-1000011.jpg'
                width={400}
                height={200}
                alt='grande at Home Image'
              /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default GrandeAtHomeSection;

/**
 * 
 * 
 * 
 *   {
                  ' public public'
                }
 */
