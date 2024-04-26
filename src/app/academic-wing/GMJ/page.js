import EditorialTeam from "@/components/academic wings/GMJ/EditorialTeam"
import Footer from "@/components/Footer"
import { MegaMenuWithHover } from "@/components/Navbar"
import Link from "next/link"

function Banner() {
  return (
    <div className="p-10 w-full flex items-center lg:text-[24px] bg-[#184861] text-white h-[300px] font-semibold">
      <div className="flex space-x-5 items-center">
        <Link href="/">Home</Link>
        <p>{'>>'}</p>
        <Link href='/academic-wing/GMJ'>Grande Medical Journal(GMJ)</Link>
      </div>
    </div>
  )
}

function GrandeMedicalJournal() {
  return (
    <div>
      <MegaMenuWithHover />
      <Banner />
      <EditorialTeam />
      <Footer />
    </div>
  )
}
export default GrandeMedicalJournal