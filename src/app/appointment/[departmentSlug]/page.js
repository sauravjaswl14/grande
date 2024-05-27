import FindADoctorSection from "@/components/findADoctor/FindADoctor"
import { departments } from "@/data/departments"

function DepartmentDoctorsList({ params }) {
  let departmentSlug = params.departmentSlug

  let filteredDepartment = departments.filter((department) => {
    return department.slug === departmentSlug
  })

  let [department] = filteredDepartment

  let { listOfDoctors } = department


  return (
    <div>
      <FindADoctorSection doctors={listOfDoctors} />
    </div>
  )
}
export default DepartmentDoctorsList