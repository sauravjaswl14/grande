import IRCcommittee from "@/components/academic wings/IRC/IRCcommittee"
import Footer from "@/components/Footer"
import { MegaMenuWithHover } from "@/components/Navbar"

function Banner() {
  return (
    <section className="w-full p-10 lg:p-20 h-[300px] bg-[#184861] lg:text-[24px] font-semibold text-white flex items-center">
      <div className="flex space-x-5 lg:space-x-8 items-center">
        <p>Home</p>
        <p>{'>>'}</p>
        <p>IRC (Institutional Review Committee)</p>
      </div>
    </section>
  )
}

function InstitutionalReviewCommittee() {
  return (
    <>
      <MegaMenuWithHover />
      <Banner />
      <IRCcommittee />
      <Footer />
    </>

  )
}
export default InstitutionalReviewCommittee