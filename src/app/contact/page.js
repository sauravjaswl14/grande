import ContactMain from "@/components/contact/ContactMain"
import Hero from "@/components/Hero"
import { MegaMenuWithHover } from "@/components/Navbar"

function Contact() {
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
      <ContactMain />
    </div>
  )
}
export default Contact