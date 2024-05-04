import Footer from "@/components/Footer"
import { MegaMenuWithHover } from "@/components/Navbar"
import NursingSection from "@/components/services/Nursing"
import Link from "next/link"

function Banner() {
  return <div className="p-10 h-[300px] bg-[#184861] text-white flex items-center">
    <div className="flex space-x-3 items-center">
      <Link href='/services'>Services</Link>
      <p>{'>>'}</p>
      <Link href='/services/nursing'>Nursing</Link>
    </div>
  </div>
}

function Nursing() {
  return (
    <div>
      <MegaMenuWithHover />
      <Banner />
      <NursingSection />
      <Footer />
    </div>
  )
}
export default Nursing