import Footer from "@/components/Footer"
import InternationalPatientSection from "@/components/international patient/InternationalPatientSection"
import { MegaMenuWithHover } from "@/components/Navbar"

function InternationalPatient() {
  return (
    <div>
      <MegaMenuWithHover />
      <InternationalPatientSection />
      <Footer />
    </div>
  )
}
export default InternationalPatient