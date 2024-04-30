import BoardOfDirectors from "@/components/about/Bod"
import Footer from "@/components/Footer"
import { MegaMenuWithHover } from "@/components/Navbar"
import Link from "next/link"

function Banner() {
  return <div className="h-[300px] bg-[#184861] text-white p-10 flex items-center">
    <div className="flex items-center">
      <div className="flex space-x-5 items-center">
        <Link href='/about'>Overview</Link>
        <p>{'>>'}</p>
        <Link href='/about/bod'>Board of Directors</Link>
      </div>
    </div>
  </div>
}

function BOD() {
  return (
    <div>
      <MegaMenuWithHover />
      <Banner />
      <BoardOfDirectors />
      <Footer />
    </div>
  )
}
export default BOD