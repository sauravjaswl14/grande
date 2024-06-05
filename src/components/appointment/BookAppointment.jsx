// import { departments } from "@/data/departments";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { getData } from "../../../lib/departments";

async function DepartmentsGrid() {
  const departmentsData = await getData();

  let { data } = departmentsData;

  return (
    <div className="w-full grid grid-cols-3 gap-6">
      {data &&
        data.map((department) => {
          let { icon, name_en, slug } = department;
          return (
            <Link
              key={name_en}
              href={`/appointment/${slug}`}
              className="w-full bg-white p-6 rounded-md flex space-x-8 items-center hover:shadow-lg hover:cursor-pointer hover:-translate-y-2 transition ease-in-out duration-200"
            >
              <Image src={icon} width={60} height={10} alt="cardiology" />
              <p className="text-[#7d7d7d]">{name_en}</p>
            </Link>
          );
        })}
    </div>
  );
}

function BookAppointment() {
  return (
    <section className="p-10">
      <div className="w-full flex justify-center">
        <Suspense fallback={<p className="">Fetching Meals...</p>}>
          <DepartmentsGrid />
        </Suspense>
      </div>
    </section>
  );
}
export default BookAppointment;
