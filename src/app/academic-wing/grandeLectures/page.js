import Lectures from "@/components/academic wings/grande lectures/Lectures"
import Footer from "@/components/Footer"
import { MegaMenuWithHover } from "@/components/Navbar"
import Link from "next/link"

function Banner() {
  return (
    <div className="p-10 bg-[#184861] text-white h-[300px] flex items-center">
      <div className="flex space-x-5 items-center">
        <Link href="/">Home</Link>
        <p>{'>>'}</p>
        <Link href='/academic-wing/grandeLectures'>Grande Lectures</Link>
      </div>
    </div>
  )
}

function GrandeLectures() {
  return (
    <div>
      <MegaMenuWithHover />
      <Banner />
      <Lectures />
      <Footer />
    </div>
  )
}
export default GrandeLectures