import Image from 'next/image';

function PharmacySection() {
  return (
    <div className='m-20 flex justify-center'>
      <div className='flex space-x-10 items-center'>
        <div className='flex flex-col space-y-3'>
          <p>
            Pharmacy is the science and technique of preparing and dispensing
            drugs. It plays a vital role to ensure the safe and effective use of
            drugs. At GIH, the department has a team of 21 Pharmacists
            determined to go an extra mile to make the use of drugs for patients
            safer. “Good Pharmacy Practice” guidelines and legal requirements
            are strictly followed at zero tolerance in all pharmacy operations.
            Our Pharmacy infra-structure is well-designed to maintain the
            quality of sensitive items such as vaccines and life-saving drugs.
          </p>

          <p>
            With world class infra structure, the humidity, temperature and all
            other parameters are kept in standard at the pharmacy and the store
            so that the quality of sensitive drugs like vaccines, life-saving
            drugs and chemotherapeutic drugs are very well maintained. With the
            computerized record keeping and use of patient database, the
            appropriate drugs reach the admitted patients with almost zero
            chances of medicinal errors.
          </p>

          <p>
            The pharmacy at GIH is also the cornerstone of our Antibiotic
            Stewardship Program (ASP) which for the first time in the country
            has been implemented at our hospital. ASP is a check mechanism which
            ensures that the antibiotics are used appropriately in the patients
            so that the drug resistance and hospital infections can be better
            controlled.
          </p>
        </div>

        <Image
          src='/img/images/1-100001.jpg'
          width={600}
          height={300}
          alt='pharmacy image'
        />
      </div>
    </div>
  );
}
export default PharmacySection;
