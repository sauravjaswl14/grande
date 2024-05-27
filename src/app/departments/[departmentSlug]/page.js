import DepartmentSection from "@/components/departments/DepartmentSection"
import { MegaMenuWithHover } from "@/components/Navbar"

import { departments } from "@/data/departments"

function DepartmentBanner({ nameOfDepartment }) {

  return <section className="bg-[#184861] h-[300px] text-white p-10 text-2xl capitalize flex items-center">
    <h2>{nameOfDepartment}</h2>
  </section>
}

function DepartmentPage({ params }) {
  let filteredDepartment = departments.filter((department) => {
    return department.slug === params.departmentSlug
  })

  console.log('executing...')


  let [department] = filteredDepartment

  let { nameOfDepartment, description, img, slug } = department
  return (
    <section>
      <MegaMenuWithHover />
      <DepartmentBanner nameOfDepartment={nameOfDepartment} />
      <DepartmentSection nameOfDepartment={nameOfDepartment} description={description} img={img} slug={slug} />
    </section>
  )
}
export default DepartmentPage