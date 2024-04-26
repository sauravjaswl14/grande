let lectures = [
  {
    topic: 'Medical Errors- Why do Doctors Fail?',
    lecturer: 'Dr. Binod Bijukachhe',
  },
  {
    topic: 'Bariatric Surgery',
    lecturer: 'Dr. Rakesh Kumar Shah',
  },
  {
    topic:
      'Upcoming Trend’s of Laparoscopy in Gynecological Surgeries-an Overview',
    lecturer: 'Dr. Asmita Ghimire',
  },
  {
    topic: 'Dental Care & Medical Care-Why often Separated ?',
    lecturer: 'Dr. Sumi Malla',
  },
  {
    topic: 'Patient Safety Initiatives in Critical Care',
    lecturer: 'Dr. Subhash Prasad Acharya',
  },
  {
    topic: 'Importance of Physical Activity and Fitness in Health Promotion',
    lecturer: 'Physio. Pratik Pokhrel',
  },
  {
    topic: 'Interventional Radiology: an Overview',
    lecturer: ' Dr. Saurav Krishna Malla',
  },
  {
    topic: 'Social Media in Medical Education',
    lecturer: 'Dr. Ajay Singh Thapa',
  },
  {
    topic: 'Unusual Cause of Headache',
    lecturer: 'Dr. Raju Poudel',
  },
  {
    topic: 'Unusual cause of Stroke',
    lecturer: 'Dr. Vivek Kumar Rauniyar',
  },
  {
    topic: 'Minimal Access Surgery for Spinal Conditions',
    lecturer: 'Dr. Rupendra Bahadur Adhikari',
  },
  {
    topic: 'Coblation Technology in ENT',
    lecturer: 'Dr. Jenu Suwal Dongol',
  },
  {
    topic: 'Diabetic Retinopathy',
    lecturer: 'Dr. Irina Kansakar',
  },
  {
    topic: 'Diabetic Nephropathy',
    lecturer: 'Dr. Bishnu Pahari',
  },
  {
    topic: 'Diabetes Mellitus: An Overview',
    lecturer: 'Dr. Sandesh Panthi',
  },
  {
    topic: 'Obstructive Prostate Gland',
    lecturer: 'Dr. Surendra Bikram Adhikari',
  },
  {
    topic: 'Improving Patient care Quality',
    lecturer: 'Ms. LD Maharjan',
  },
  {
    topic: 'Fasting Guidelines: Are we over Fasting our Patients?',
    lecturer: 'Dr. Sujata Niroula',
  },
  {
    topic: 'Role of Treadmill Test in Cardiology',
    lecturer: 'Dr. Bhawani Manandhar',
  },
  {
    topic: 'Update on Tuberculosis ',
    lecturer: 'Dr. Prabhat Adhikari',
  },
  {
    topic: 'Antimicrobial Stewardship- Finding What Fits ',
    lecturer: 'Dr. Siru Prasai',
  },
  {
    topic: 'Colon Cancer',
    lecturer: 'Dr. Sushil Raj Pandey',
  },
  {
    topic: 'Non-Communicable Diseases Screening- What Guidelines Say',
    lecturer: 'Dr. Bikash Shrestha',
  },
  {
    topic: 'What’s Pediatric Surgery?',
    lecturer: 'Prof.Dr. R.P. Chaudhary',
  },
  {
    topic: 'Pediatric Surgery at Grande…A Year and Beyond!!!',
    lecturer: 'Dr. Ashish Lal Shrestha',
  },
  {
    topic: 'Childhood Asthma – Updates ',
    lecturer: 'Dr. Amrit Ghimire',
  },
  {
    topic:
      'Immunofluorescence Microscopy at Grande International Hospital (GIH)',
    lecturer: 'Dr. Anil Dev Pant',
  },
  {
    topic:
      'Infection Prevention and Control (IPC) in Grande International Hospital: Where are we?',
    lecturer: 'Dr. Subhash Prasad Acharya',
  },
  {
    topic: 'Antibiotics Stewardship Program at GIH',
    lecturer: 'Dr. Bishnu Pahari',
  },
  {
    topic: 'The Relationship between Mental Health and Physical Health',
    lecturer: 'Dr. Anurag Misra',
  },
  {
    topic: 'Rational and Clinical Use of Blood & Blood Products',
    lecturer: 'Dr. Bipin Nepal',
  },
];

let secondRoundLectures = [
  {
    topic: 'Struggle, hard work and integrity, my mantras to Inner Happiness',
    lecturer: 'Dr. Chakra Raj Pandey',
  },
  {
    topic:
      'An initial experience of laparoscopic Sleeve Gastrectomy in morbidly obese, and super morbid obese patients',
    lecturer: 'Dr. Rakesh Kumar Sah',
  },
  {
    topic: 'Behind the Veil',
    lecturer: 'Dr. Samira Shafi Khan',
  },
  {
    topic: 'MDR gram negative bacteria ',
    lecturer: 'Dr. Prabhat Adhikari',
  },
  {
    topic: 'Health Promotion and Oral Health',
    lecturer: 'Dr. Amit Khanal',
  },
  {
    topic: 'Updates in Critical Care Medicine',
    lecturer: 'Dr. Subhash Prasad Acharya',
  },
  {
    topic: 'Rehabilitation of Ataxic Gait following Cerebellar Lesions',
    lecturer: 'Physio. Nima Sherpa ',
  },
  {
    topic: 'Early Experience of Neurointervention in Nepal: A Dawn of New Era',
    lecturer: 'Dr. Subash Phuyal',
  },
];

function Lectures() {
  return (
    <div className='m-10'>
      <h2 className='text-[#184861] font-semibold text-[28px]'>
        Grande Lectures
      </h2>

      <div className='mt-12 grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
        {lectures.map((lecture) => {
          let { topic, lecturer } = lecture;
          return (
            <div
              key={topic}
              className=' group py-5 px-8 h-[200px] bg-white rounded-md shadow-md flex flex-col justify-between '
            >
              <h3 className='text-lg font-semibold group-hover:text-[#238751] transition ease-in-out duration-200'>
                {topic}
              </h3>

              <div className='w-full flex justify-end'>
                <p>{lecturer}</p>
              </div>
            </div>
          );
        })}
      </div>

      <h2 className='mt-16 text-[#184861] font-semibold text-[28px]'>
        Second Round
      </h2>

      <div className='mt-12 grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
        {secondRoundLectures.map((lecture) => {
          let { topic, lecturer } = lecture;

          return (
            <div
              key={topic}
              className=' group py-5 px-8 h-[200px] bg-white rounded-md shadow-md flex flex-col justify-between '
            >
              <h3 className='text-lg font-semibold group-hover:text-[#238751] transition ease-in-out duration-200'>
                {topic}
              </h3>

              <div className='w-full flex justify-end'>
                <p>{lecturer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Lectures;
