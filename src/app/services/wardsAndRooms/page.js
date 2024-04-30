import Footer from "@/components/Footer"
import { MegaMenuWithHover } from "@/components/Navbar"
import WardsAndRoomsSection from "@/components/services/WardsAndRooms"
import Link from "next/link"




function Banner() {
  return <div className="p-10 h-[300px] bg-[#184861] text-white flex items-center">
    <div className="flex space-x-3 items-center">
      <Link href='/services'>Services</Link>
      <p>{'>>'}</p>
      <Link href='/services/wardsAndRooms'>Wards and Rooms</Link>
    </div>
  </div>
}


function WardsAndRooms() {

  return (
    <div>
      <MegaMenuWithHover />
      <Banner />
      <WardsAndRoomsSection />
      <Footer />

    </div>
  )
}
export default WardsAndRooms