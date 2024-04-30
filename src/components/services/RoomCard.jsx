import Image from 'next/image';

function RoomCard({ img, name }) {
  return (
    <div className='flex flex-col'>
      <Image src={img} width={400} height={260} alt={name} />
      <div className='bg-white p-10 flex justify-center items-center'>
        <p>{name}</p>
      </div>
    </div>
  );
}
export default RoomCard;
