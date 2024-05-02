import Link from "next/link"
import { MegaMenuWithHover } from "@/components/Navbar"
import CareerMain from "@/components/career/CareerMain"
import Footer from "@/components/Footer"

function Banner() {
  return <div className="p-10 h-[300px] bg-[#184861] text-white flex items-center">
    <div className="flex space-x-3 items-center">
      <Link href='/'>Home</Link>
      <p>{'>>'}</p>
      <Link href='/career'>Career</Link>
    </div>
  </div>
}

function page() {
  return (
    <div>
      <MegaMenuWithHover />
      <Banner />
      <CareerMain />
      <Footer />
    </div>
  )
}
export default page