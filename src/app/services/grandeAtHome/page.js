import Footer from "@/components/Footer"
import { MegaMenuWithHover } from "@/components/Navbar"
import GrandeAtHomeSection from "@/components/services/GrandeAtHome"
import Link from "next/link"

function Banner() {
  return <div className="p-10 h-[300px] bg-[#184861] text-white flex items-center">
    <div className="flex space-x-3 items-center">
      <Link href='/services'>Services</Link>
      <p>{'>>'}</p>
      <Link href='/services/grandeAtHome'>Grande@Home</Link>
    </div>
  </div>
}

function GrandeAtHome() {
  return (
    <div>
      <MegaMenuWithHover />
      <Banner />
      <GrandeAtHomeSection />
      <Footer />
    </div>
  )
}
export default GrandeAtHome