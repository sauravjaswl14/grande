import HealthPackagesSection from "@/components/health packages/HealthPackages"
import { MegaMenuWithHover } from "@/components/Navbar"
import Link from "next/link"


function Banner() {
  return <div className="p-20 h-[300px] text-white bg-[#184861] flex space-x-3 items-center">
    <Link href='/'>Home</Link>
    <p>{'>>'}</p>
    <Link href='/health-package'>Health Packages</Link>
  </div>
}

function HealthPackages() {
  return (
    <div>
      <MegaMenuWithHover />
      <Banner />
      <HealthPackagesSection />
    </div>
  )
}
export default HealthPackages