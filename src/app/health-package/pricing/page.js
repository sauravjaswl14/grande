import PricingSection from "@/components/health packages/Pricing"
import { MegaMenuWithHover } from "@/components/Navbar"
import Link from "next/link"

function Banner() {
  return <div className="p-20 h-[300px] text-white bg-[#184861] flex space-x-3cl items-center">
    <Link href='/'>Home</Link>
    <p>{'>>'}</p>
    <Link href='/health-package'>Health Packages</Link>
  </div>
}

function Pricing() {
  return (
    <div>
      <MegaMenuWithHover />
      <Banner />
      <PricingSection />
    </div>
  )
}
export default Pricing