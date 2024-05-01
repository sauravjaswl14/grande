let editorialTeam = [
  {
    designation: 'Editor-in-Chief',
    members: ['Rupendra Bahadur Adhikari, MD, PhD'],
  },
  {
    designation: 'Executive Editors',
    members: ['Abish Adhikari, MD', 'Manish Kolakshyapati, MD, PhD'],
  },
  {
    designation: 'Editors',
    members: [
      'Bikash Shrestha, MDGP',
      'Byapak Paudel, MS',
      'Prerana Kansakar, MD',
      'Subhash Prasad Acharya, MD',
    ],
  },
  {
    designation: 'International Editors',
    members: [
      'Erina Kansakar, MD, FACS (Bariatric Surgeon, CHI Franciscan, Seattle, USA)',
      'Satoshi Yamaguchi, MD, PhD (Neurosurgeon, University of Iowa Carver College of Medicine, USA)',
      'Fumiyuki Yamasaki, MD, PhD (Neurosurgeon, Hiroshima University, Japan)',
    ],
  },
  {
    designation: 'Patrons',
    members: ['Binod Bijukachhe, MS', 'Prem Raj Gyawali, MS'],
  },
  {
    designation: 'Advisor',
    members: ['Shital Bandari, MSc, MPhil, FAIMER'],
  },
  {
    designation: 'International Advisor',
    members: [
      'Chester E Sutterlin III, MD, FACS (Neurosurgeon, University of Florida, Florida, USA) ',
    ],
  },
];

function EditorialTeam() {
  return (
    <div className='m-10 lg:my-20'>
      <h2 className='text-[24px] text-[#184861] font-semibold'>
        Editorial Team
      </h2>

      <div className='mt-8 grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {editorialTeam.map((data, idx) => {
          let { designation, members } = data;
          return (
            <div
              key={designation}
              className='bg-white shadow-md flex flex-col rounded-b-md'
            >
              <div className='bg-[#238751] p-3 flex justify-center items-center'>
                <p className='text-white font-semibold text-[18px]'>
                  {designation}
                </p>
              </div>
              <div className='m-10 flex flex-col space-y-5 justify-center items-center'>
                {members.map((member) => {
                  return <p className='text-center'>{member}</p>;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default EditorialTeam;
