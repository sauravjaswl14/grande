import Image from 'next/image';

function DepartmentSection({ nameOfDepartment, description, img, slug }) {
  return (
    <section className='m-10'>
      <main className='flex  justify-between items-center'>
        <div>
          <h2 className='capitalize text-3xl font-bold'>{nameOfDepartment}</h2>
          <p className='pt-8 max-w-3xl'>{description}</p>
        </div>

        <Image
          src='/img/anesthesiology.jpg'
          width={600}
          height={300}
          alt='anesthia'
          className='rounded-md'
        />
      </main>
    </section>
  );
}
export default DepartmentSection;
