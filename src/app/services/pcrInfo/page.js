import { MegaMenuWithHover } from "@/components/Navbar"
import Link from "next/link"

function Banner() {
  return <div className="p-10 h-[300px] bg-[#184861] text-white flex items-center">
    <div className="flex space-x-3 items-center">
      <Link href='/services'>Services</Link>
      <p>{'>>'}</p>
      <Link href='/services/pcrInfo'>PCR Info</Link>
    </div>
  </div>
}

function PCRInfo() {
  return (
    <div>
      <MegaMenuWithHover />
      <Banner />
    </div>
  )
}
export default PCRInfo