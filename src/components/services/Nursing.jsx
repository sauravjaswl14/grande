function NursingSection() {
  return (
    <main className='flex justify-center items-center h-full w-full py-8 lg:px-8'>
      <section className='flex flex-col space-y-8 max-w-[80%]'>
        {/* <!-- container 1 --> */}
        <div className='flex flex-col space-y-10 lg:flex-row items-center lg:space-y-0 lg:space-x-10'>
          {/* <!-- left --> */}
          <div className='flex flex-col space-y-4 lg:w-[50%]'>
            <h3 className='text-xl font-bold'>Introduction</h3>
            <p>
              Nursing department is the major and essential part of the GIH.
              This mobilizes all nurses and nursing service in the
              hospital.Nurses are the front-line force and they play a key role
              to achieve hospital motive and objectives with a culture of
              high-reliability, quality and safety service to patients and
              families in satisfying environment.
            </p>
          </div>
          {/* <!-- right --> */}
          <div className='lg:w-[50%] rounded-lg shadow-lg overflow-hidden'>
            <img
              src='/img/images/nursing1.jpg'
              alt=''
              className='transtion-all w-[630px] h-[354px] hover:scale-110 duration-300'
            />
          </div>
        </div>
        {/* <!-- container 2 --> */}
        <div className='flex flex-col-reverse space-y-reverse space-y-10 lg:flex-row items-center lg:space-y-0 lg:space-x-10'>
          {/* <!-- left --> */}
          <div className='lg:w-[50%] rounded-lg shadow-lg overflow-hidden'>
            <img
              src='/img/images/nursing2.jpg'
              alt=''
              className='transtion-all w-[630px] h-[354px] hover:scale-110 duration-300'
            />
          </div>

          {/* <!-- right --> */}
          <div className='flex flex-col space-y-4 lg:w-[50%]'>
            <h3 className='text-xl font-bold'>Scope of Care</h3>
            <p>
              The Nursing Department provides care for a wide variety of
              in-patients (IPD), Operation theater (OT), Emergency (ER),
              Outpatients (OPD) and wellness as well as clients in the community
              through various camps & clinics.
            </p>
            <p>
              Nursing care is provided for patients on a 24-hour basis 7 days a
              week.
            </p>
          </div>
        </div>
        {/* <!-- container 3 --> */}
        <div className='flex flex-col space-y-10 lg:flex-row items-center lg:space-y-0 lg:space-x-10'>
          {/* <!-- left --> */}
          <div className='flex flex-col space-y-4 lg:w-[50%]'>
            <h3 className='text-xl font-bold'>Mission and philosophy</h3>
            <p>
              The Department of Nursing is committed to the hospital motive
              “Care to Cure” as well as values to a “Patient First” philosophy
              for delivering quality healthcare in the safest environment.
            </p>
            <h3 className='text-xl font-bold'>Objectives</h3>
            <p>
              The objective of nursing department is to provide safe and quality
              nursing service maintaining the standard nursing practice and
              nurse patient ratio as per international standard.
            </p>
          </div>
          {/* <!-- right --> */}
          <div className='lg:w-[50%] rounded-lg shadow-lg overflow-hidden'>
            <img
              src='/img/images/nursing3.jpg'
              alt=''
              className='transtion-all w-[630px] h-[354px] hover:scale-110 duration-300'
            />
          </div>
        </div>
        {/* <!-- container 4 --> */}
        <div className='flex flex-col-reverse space-y-reverse space-y-10 lg:flex-row items-center lg:space-y-0 lg:space-x-10'>
          {/* <!-- left --> */}
          <div className='lg:w-[50%] rounded-lg shadow-lg overflow-hidden'>
            <img
              src='/img/images/nursing4.jpg'
              alt=''
              className='transtion-all w-[630px] h-[354px] hover:scale-110 duration-300'
            />
          </div>

          {/* <!-- right --> */}
          <div className='flex flex-col space-y-4 lg:w-[50%]'>
            <h3 className='text-xl font-bold'>Value Statements</h3>
            <ul>
              <li>
                <span className='font-bold'> Patient Satisfaction: </span>
                We consistently strive to exceed expectations from our patients,
                physicians, and colleagues.
              </li>
              <li>
                <span className='font-bold'> Respect & Privacy: </span>
                We respect the patient as an individual irrespective of age,
                sex, race and religion with the right to privacy and
                confidentiality. We respect, appreciate, and acknowledge each
                individual’s contribution to the work environment.
              </li>
              <li>
                <span className='font-bold'> Accountability: </span>
                We are accountable for our actions and accept responsibility as
                individuals, as members of a team, and as professional nurses.
              </li>
              <li>
                <span className='font-bold'> Diversity: </span>
                We recognize the diversity of our patients and our staff and are
                committed to deliver compassionate, culturally sensitive and
                holistic care.
              </li>
              <li>
                <span className='font-bold'> Research and Education: </span>
                We promote and enhance the research and educational activities
                for nursing quality improvement.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
export default NursingSection;
