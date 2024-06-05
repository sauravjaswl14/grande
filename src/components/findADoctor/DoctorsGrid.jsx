import React from "react";
import { getDoctors } from "../../../lib/departments";

import DoctorDisplay from "./DoctorDisplay";

async function DoctorsGrid() {
  let res = await getDoctors();

  let doctorsList = res.data.data;

  return (
    <div className="grid grid-cols-4 gap-10">
      {doctorsList.map((doctor) => {
        return (
          <div key={doctor.name_en}>
            <DoctorDisplay {...doctor} />
          </div>
        );
      })}
    </div>
  );
}

export default DoctorsGrid;
