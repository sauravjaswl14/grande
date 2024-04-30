import SpecificDepartmentSection from "@/components/departments/SpecificDepartment"
import Footer from "@/components/Footer"
import Hero from "@/components/Hero"
import { MegaMenuWithHover } from "@/components/Navbar"

function SpecificDepartment() {
  let imgSrcData = [
    '/img/images/GIH-service-website-04.jpg',
    '/img/images/Ambulance-service-scaled.jpg',
    '/img/images/GIH-service-website-03.jpg',
    '/img/images/GIH-service-website-02.jpg',
    '/img/images/Award-with-Acreedited.jpg',
  ];

  return (
    <div>
      <MegaMenuWithHover />
      <Hero imgSrcData={imgSrcData} />
      <SpecificDepartmentSection />
      <Footer />
    </div>
  )
}
export default SpecificDepartment