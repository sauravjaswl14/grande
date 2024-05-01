import { MegaMenuWithHover } from "@/components/Navbar"
import Link from "next/link"

function Banner() {
  return (
    <div className="p-10 w-full flex items-center lg:text-[24px] bg-[#184861] text-white h-[300px] font-semibold">
      <div className="flex space-x-5 items-center">
        <Link href="/">Home</Link>
        <p>{'>>'}</p>
        <Link href='/academic-wing/GMJ'>Image Gallery</Link>
      </div>
    </div>
  )
}
function ImageGallery() {
  return (
    <div>
      <MegaMenuWithHover />
      <Banner />
    </div>
  )
}
export default ImageGallery