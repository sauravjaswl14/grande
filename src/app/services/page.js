import Footer from "@/components/Footer"
import Hero from "@/components/Hero"
import { MegaMenuWithHover } from "@/components/Navbar"
import MainServices from "@/components/services/MainServices"

let imgSrcData = [
  '/img/images/GIH-service-website-04.jpg',
  '/img/images/Ambulance-service-scaled.jpg',
  '/img/images/GIH-service-website-03.jpg',
  '/img/images/GIH-service-website-02.jpg',
  '/img/images/Award-with-Acreedited.jpg',
];

function Services() {
  return (
    <>
      <MegaMenuWithHover />
      <Hero imgSrcData={imgSrcData} />
      <MainServices />
      <Footer />
    </>
  )
}
export default Services