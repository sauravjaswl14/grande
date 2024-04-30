import Image from 'next/image';

function TeleConsultationSection() {
  return (
    <div className='m-20 flex justify-center'>
      <div className='flex space-x-10 items-center'>
        <div className='flex flex-col space-y-10'>
          <p className='max-w-lg text-xl'>
            Tele Consultation at Grande International Hospital allows the
            patient who reside outside the valley to stay in touch with their
            doctors. This service also helps patient who are unable to travel to
            the hospital.
          </p>

          <p>For Tele Consultation please call. +977 9801202550</p>
        </div>
        <Image
          src='/img/images/Tele-Consultation.jpg'
          width={400}
          height={200}
          alt='tele consultation image'
        />
      </div>
    </div>
  );
}
export default TeleConsultationSection;
