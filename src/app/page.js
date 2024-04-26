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
import { FeaturedImageGallery } from "@/components/ImageGallery"
import Footer from "@/components/Footer";
import TestimonialList from "@/components/TestimonialList";
import records from "../data/testimonials"
import AppointmentSection from "@/components/AppointmentSection";
import Tab from "@/components/Tab";

export default function Home() {

  let imgSrcData = [
    '/img/images/GIH-service-website-04.jpg',
    '/img/images/Ambulance-service-scaled.jpg',
    '/img/images/GIH-service-website-03.jpg',
    '/img/images/GIH-service-website-02.jpg',
    '/img/images/Award-with-Acreedited.jpg',
  ];

  return (
    <>
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
    </>
  );
}
