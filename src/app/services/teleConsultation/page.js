import Footer from "@/components/Footer"
import { MegaMenuWithHover } from "@/components/Navbar"
import TeleConsultationSection from "@/components/services/TeleConsultation"
import Link from "next/link"

function Banner() {
  return <div className="p-10 h-[300px] bg-[#184861] text-white flex items-center">
    <div className="flex space-x-3 items-center">
      <Link href='/services'>Services</Link>
      <p>{'>>'}</p>
      <Link href='/services/teleConsultation'>Tele Consultation</Link>
    </div>
  </div>
}

function TeleConsultation() {
  return (
    <div>
      <MegaMenuWithHover />
      <Banner />
      <TeleConsultationSection />
      <Footer />
    </div>
  )
}
export default TeleConsultation