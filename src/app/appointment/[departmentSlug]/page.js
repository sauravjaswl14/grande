import FindADoctorSection from "@/components/findADoctor/appointment/FindADoctor";
import { getDoctors } from "../../../../lib/departments";

async function DepartmentDoctorsList({ params }) {
  let res = await getDoctors();

  let doctorsList = res.data.data;

  let filteredDoctors = doctorsList.filter((doc) => {
    return doc.department.slug === params.departmentSlug;
  });

  return (
    <div className="m-20">
      <FindADoctorSection doctors={filteredDoctors} />
    </div>
  );
}
export default DepartmentDoctorsList;
