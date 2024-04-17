"use client"

import About from "@/components/about/About"
import Department from "@/components/about/Department"
import Keypoints from "@/components/about/Keypoints"
import SectionBreaker from "@/components/about/Sectionbreaker"
import Tab from "@/components/about/Tab"
import Footer from "@/components/Footer"
import Hero from "@/components/Hero"
import { MegaMenuWithHover } from "@/components/Navbar"


function AboutUs() {
  return (
    <div>
      <MegaMenuWithHover />
      <Hero />
      <Tab />
      <About />
      <SectionBreaker />
      <Keypoints />
      <Department />
      <Footer />
    </div>
  )
}
export default AboutUs