import Image from 'next/image';

const TestimonCard = ({ title, image, name, description }) => {
  return (
    <div className='max-w-[400px] min-h-[296px] mb-10 border shadow-xl rounded-xl bg-white mr-4 flex justify-center items-center'>
      <div className='flex flex-col space-y-5 items-center'>
        <Image src={image} width={50} height={50} />
        <p>{name}</p>
        <p className='text-sm text-center px-8'>{description}</p>
      </div>
    </div>
  );
};

export default TestimonCard;
