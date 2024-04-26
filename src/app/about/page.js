"use client"

import About from "@/components/about/About"
import Department from "@/components/about/Department"
import Keypoints from "@/components/about/Keypoints"
import MissionVision from "@/components/about/MissionVision"
import SectionBreaker from "@/components/about/Sectionbreaker"
import Tab from "@/components/about/Tab"
import Footer from "@/components/Footer"
import Hero from "@/components/Hero"
import { MegaMenuWithHover } from "@/components/Navbar"


function AboutUs() {

  let imgSrcData = [
    '/img/images/GIH-service-website-04.jpg',
    '/img/images/Ambulance-service-scaled.jpg',
    '/img/images/GIH-service-website-03.jpg',
    '/img/images/GIH-service-website-02.jpg',
    '/img/images/Award-with-Acreedited.jpg',
  ];

  return (
    <div>
      <MegaMenuWithHover />
      <Hero imgSrcData={imgSrcData} />
      <Tab />
      <About />
      <MissionVision />
      <SectionBreaker />
      <Keypoints />
      <Department />
      <Footer />
    </div>
  )
}
export default AboutUs