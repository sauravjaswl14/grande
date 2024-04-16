import MainDepartment from "@/components/departments/MainDepartment"
import Footer from "@/components/Footer"
import Hero from "@/components/Hero"
import { MegaMenuWithHover } from "@/components/Navbar"

function Departments() {
  return (
    <div>
      <MegaMenuWithHover />
      <Hero />
      <MainDepartment />
      <Footer />
    </div>
  )
}
export default Departments