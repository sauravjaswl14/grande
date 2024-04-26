'use client'

import ManagementTeamSection from "@/components/about/ManagementTeam";
import Footer from "@/components/Footer";
import { MegaMenuWithHover } from "@/components/Navbar"
import Link from "next/link";

let imgSrcData = [
  '/img/images/GIH-service-website-04.jpg',
  '/img/images/Ambulance-service-scaled.jpg',
  '/img/images/GIH-service-website-03.jpg',
  '/img/images/GIH-service-website-02.jpg',
  '/img/images/Award-with-Acreedited.jpg',
];

function Banner() {
  return <div className="p-10 h-[300px] bg-[#184861] flex items-center text-white">
    <div className="flex space-x-5 items-center">
      <Link href='/'>Home</Link>
      <p>{'>>'}</p>
      <Link href='/about/managementTeam'>Management Team</Link>
    </div>
  </div>
}

function ManagementTeam() {
  return (
    <div>
      <MegaMenuWithHover />
      <Banner />
      <ManagementTeamSection />
      <Footer />
    </div>
  )
}
export default ManagementTeam