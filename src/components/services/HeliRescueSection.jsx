'use client';

import { useState, useEffect } from 'react';
import { Carousel } from 'primereact/carousel';
import Image from 'next/image';

import { MegaMenuWithHover } from '../Navbar';

function HeliRescueSection() {
  let heliImages = [
    { img: '/img/heliRescue/heli7.jpg' },
    { img: '/img/heliRescue/heli5.jpg' },
    { img: '/img/heliRescue/heli4.jpg' },
    { img: '/img/heliRescue/heli3.jpg' },
    { img: '/img/heliRescue/heli2.jpeg' },
    { img: '/img/heliRescue/heli1.jpeg' },
    { img: '/img/heliRescue/heli8.jpg' },
  ];

  let [heliRescue, setHeliRescue] = useState(heliImages);
  const responsiveOptions = [
    {
      breakpoint: '1400px',
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: '1199px',
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: '767px',
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: '575px',
      numVisible: 1,
      numScroll: 1,
    },
  ];

  const productTemplate = (product) => {
    return (
      <div className='m-5'>
        <img src={product.img} alt={product.name} className='rounded-md ' />
      </div>
    );
  };
  return (
    <div className='m-20 flex justify-center'>
      <div className='flex flex-col space-y-8 items-center'>
        <div className='flex flex-col space-y-5'>
          <p>
            Grande International Hospital is the first hospital in Nepal to
            rescue patients by helicopter with specialist doctors. The hospital
            has the capacity to operate two helipads (one rooftop another ground
            helipad)at the same time. We have a dedicated team for Emergency
            Rescue, Critical Illness Rescue, Mountain Rescue from anywhere in
            the country.
          </p>
          <p>
            The rooftop helipad at GIH has allowed us to rescue patients from
            all over Nepal. The helipad is facilitated with a devoted lift that
            takes patients straight to the Emergency Room.
          </p>

          <p className='text-center text-3xl text-red-500'>
            Heli Rescue Hotline +977 9801202552, 9801202537
          </p>
        </div>

        <Carousel
          value={heliRescue}
          numVisible={3}
          numScroll={3}
          responsiveOptions={responsiveOptions}
          itemTemplate={productTemplate}
        />
      </div>
    </div>
  );
}
export default HeliRescueSection;
