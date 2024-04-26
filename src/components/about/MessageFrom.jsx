import Image from 'next/image';

function MessageFrom({ img, name, designation, title, content }) {
  return (
    <div className='m-5 lg:m-20 '>
      <div className='flex flex-col space-y-5 lg:space-y-0 lg:flex-row'>
        <div className='flex flex-col space-y-3'>
          <Image src={img} width={800} height={800} />
          <div className='flex space-x-3 items-center'>
            <div className='w-2 h-12 bg-[#184861]'></div>
            <div className='flex flex-col space-y-2'>
              <p className='font-semibold text-xl text-[#238751]'>{name}</p>
              <p>{designation}</p>
            </div>
          </div>
        </div>
        <div className='w-full text-[#000] lg:text-white lg:p-10 lg:bg-[#184861]'>
          <h2 className='text-2xl font-bold'>{title}</h2>

          <div className='mt-5 lg:mt-10 flex flex-col space-y-5'>
            {content.map((content, idx) => {
              return <p key={idx}>{content}</p>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
export default MessageFrom;
