import Footer from "@/components/Footer"
import { MegaMenuWithHover } from "@/components/Navbar"
import PharmacySection from "@/components/services/Pharmacy"
import Link from "next/link"

function Banner() {
  return <div className="p-10 h-[300px] bg-[#184861] text-white flex items-center">
    <div className="flex space-x-3 items-center">
      <Link href='/services'>Services</Link>
      <p>{'>>'}</p>
      <Link href='/services/pharmacy'>Pharmacy</Link>
    </div>
  </div>
}

function Pharmacy() {
  return (
    <div>
      <MegaMenuWithHover />
      <Banner />
      <PharmacySection />
      <Footer />
    </div>
  )
}
export default Pharmacy