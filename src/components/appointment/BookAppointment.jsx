import { departments } from '@/data/departments';
import Image from 'next/image';
import Link from 'next/link';

function BookAppointment() {
  return (
    <section className='p-10'>
      <div className='w-full flex justify-center'>
        <div className='w-full grid grid-cols-3 gap-6'>
          {departments.map((department) => {
            let { img, nameOfDepartment, slug } = department;
            return (
              <Link
                key={nameOfDepartment}
                href={`/appointment/${slug}`}
                className='w-full bg-white p-6 rounded-md flex space-x-8 items-center hover:shadow-lg hover:cursor-pointer hover:-translate-y-2 transition ease-in-out duration-200'
              >
                <Image src={img} width={60} height={10} alt='cardiology' />
                <p className='text-[#7d7d7d]'>{nameOfDepartment}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
export default BookAppointment;
