import Image from "next/image";
import Link from "next/link";
import React from "react";

function DoctorDisplay({
  image,
  name_en,
  department,
  facebook,
  instagram,
  linkedin,
  twitter,
}) {
  return (
    <div className="w-[350px]  group flex flex-col items-center transition ease-in-out duration-200">
      <div className="relative w-full h-[428px]">
        <Image
          src={image}
          className="h-full group-hover:cursor-pointer"
          width={350}
          height={438}
          alt="doctor image"
        />
        <div className="opacity-0 absolute top-0 right-5 bg-[#238751] w-16 py-5 group-hover:opacity-100 flex flex-col items-center space-y-5 transition ease-in-out duration-300">
          <Link href={facebook || "/"}>
            <img
              src="/img/fb-white.png"
              className="w-8 hover:cursor-pointer hover:scale-75 transition ease-in-out duration-200"
              alt=""
            />
          </Link>

          <Link href={linkedin || "/"}>
            <img
              src="/img/linkedin-white.png"
              className="w-8 hover:cursor-pointer hover:scale-75 transition ease-in-out duration-200"
              alt=""
            />
          </Link>

          <Link href="#">
            <img
              src="/img/whatsapp-white.png"
              className="w-8 hover:cursor-pointer hover:scale-75 transition ease-in-out duration-200"
              alt=""
            />
          </Link>
          <Link href={twitter || "/"}>
            <img
              src="/img/twitter-white.png"
              className="w-5 hover:cursor-pointer hover:scale-75 transition ease-in-out duration-200"
              alt=""
            />
          </Link>
        </div>
      </div>

      <div className="w-full -mt-10 bg-white z-30 p-5 rounded-md group-hover:cursor-pointer group-hover:-translate-y-2 transition ease-in-out duration-200">
        <div className="flex flex-col space-y-3 items-center">
          <h3 className="capitalize text-[#18100f] text-[20px] text-center font-bold">
            {name_en}
          </h3>

          <p className="text-[#238751] font-semibold text-center text-[14px]">
            {department.name_en}
          </p>
        </div>
      </div>
    </div>
  );
}

export default DoctorDisplay;
