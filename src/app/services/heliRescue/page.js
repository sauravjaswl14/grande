import Footer from "@/components/Footer"
import { MegaMenuWithHover } from "@/components/Navbar"
import HeliRescueSection from "@/components/services/HeliRescueSection"
import Link from "next/link"

function Banner() {
  return <div className="p-10 h-[300px] bg-[#184861] text-white flex items-center">
    <div className="flex space-x-3 items-center">
      <Link href='/services'>Services</Link>
      <p>{'>>'}</p>
      <Link href='/services/heliRescue'>Heli Rescue</Link>
    </div>
  </div>
}

function HeliRescue() {
  return (
    <div>
      <MegaMenuWithHover />
      <Banner />
      <HeliRescueSection />
      <Footer />
    </div>
  )
}
export default HeliRescue