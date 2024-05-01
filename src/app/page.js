"use client";

import { MegaMenuWithHover } from "@/components/Navbar";
import Hero from "@/components/Hero";
import Specialities from "@/components/Specialities";
import MajorServices from "@/components/MajorServices";
import Appointment from "@/components/AppointmentForm";
import WhyChooseUs from "@/components/WhyChooseUs";
import OurTeam from "@/components/OurTeam";
import News from "@/components/News";
import AdvertiseSectionBreaker from "@/components/AdvertiseSectionBreaker";
import UniqueServices from "@/components/UniqueServices";
import ParallaxSection from "@/components/ParallaxSection";
import { FeaturedImageGallery } from "@/components/HomeImageGallery"
import Footer from "@/components/Footer";
import TestimonialList from "@/components/TestimonialList";
import records from "../data/testimonials"
import AppointmentSection from "@/components/AppointmentSection";
import Tab from "@/components/Tab";
import Image from "next/image";

export default function Home() {

  let imgSrcData = [
    '/img/images/GIH-service-website-04.jpg',
    '/img/images/Ambulance-service-scaled.jpg',
    '/img/images/GIH-service-website-03.jpg',
    '/img/images/GIH-service-website-02.jpg',
    '/img/images/Award-with-Acreedited.jpg',
  ];

  return (
    <div className="reltaive">
      <div className="fixed bottom-5 right-5 z-50">
        <Image src="/img/consultation.png" className="z-50" width={80} height={80} alt="chatbot" />
      </div>
      <MegaMenuWithHover />
      <Hero imgSrcData={imgSrcData} />
      <Tab />
      <UniqueServices />
      {/* <Appointment /> */}
      <MajorServices />
      <Specialities />
      <ParallaxSection />
      <WhyChooseUs />
      <AppointmentSection />
      <OurTeam />
      <TestimonialList records={records} />
      <News />
      <AdvertiseSectionBreaker />
      <FeaturedImageGallery />

      <Footer />
    </div>
  );
}
