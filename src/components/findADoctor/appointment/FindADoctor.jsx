"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
// import { doctors } from '@/data/doctors';

function FindADoctorSection({ doctors }) {
  let [active, setActive] = useState({
    specialization: true,
    qualification: false,
  });
  return (
    <div className="m-20">
      <div className="grid grid-cols-2 gap-6">
        {doctors.map((doctor) => {
          let {
            image,
            name_en,
            department,
            designations,
            qualifications,
          } = doctor;
          return (
            <div key={name_en} className="w-[584px] bg-white rounded-lg p-10">
              <div className="flex flex-col">
                <div className="flex space-x-5 pb-6 border-b-2">
                  <Image
                    src={image}
                    width={100}
                    height={100}
                    alt="doctor image"
                  />

                  <div className="flex flex-col space-y-4">
                    <h2 className="text-[#454545] text-[24px] font-semibold">
                      {name_en}
                    </h2>
                    {/* <p className='text-[13px] max-w-sm text-[#737476] border-b-2 pb-3'>
                      {designation}
                    </p> */}

                    <div className="flex space-x-5 items-center">
                      <p className="font-semibold text-[#444545] capitalize">
                        {department.name_en}
                      </p>
                      <div className="w-[10px] h-[10px] rounded-full bg-[#cbd1d3]"></div>
                      <Link
                        href="#"
                        className="text-[#238751] font-semibold whitespace-nowrap"
                      >
                        View Profile
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="pt-5 flex flex-col space-y-8">
                  <div className="flex space-x-5 items-center">
                    <button
                      onClick={() =>
                        setActive((prev) => {
                          return {
                            ...prev,
                            qualification: false,
                            specialization: !prev.specialization,
                          };
                        })
                      }
                      className={`uppercase font-semibold ${
                        active.specialization === true ? "text-[#238751]" : ""
                      }`}
                    >
                      Specialization and expertise
                    </button>
                    <button
                      onClick={() =>
                        setActive((prev) => {
                          return {
                            ...prev,
                            specialization: false,
                            qualification: !prev.qualification,
                          };
                        })
                      }
                      className={`uppercase font-semibold ${
                        active.qualification === true ? "text-[#238751]" : ""
                      }`}
                    >
                      Qualification
                    </button>
                  </div>
                  <div>
                    {active.specialization && designations[0].name_en}
                    {active.qualification && (
                      <div className="flex flex-col space-y-2">
                        {qualifications.map((e, key) => {
                          return (
                            <div
                              key={key}
                              className="flex space-x-3 items-center"
                            >
                              <Image
                                src="/img/point.png"
                                width={20}
                                height={10}
                                alt="pointer"
                              />
                              <p key={key}>{e.name_en}</p>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default FindADoctorSection;
