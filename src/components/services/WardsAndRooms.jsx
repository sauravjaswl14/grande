'use client';

import React, { useState, useEffect } from 'react';
import { Carousel } from 'primereact/carousel';
import Image from 'next/image';
// import { ProductService } from './service/ProductService';

function WardsAndRooms() {
  let rooms = [
    { img: '/img/images/bed1.png', name: 'name1' },
    { img: '/img/images/bed2.jpg', name: 'name2' },
    { img: '/img/images/bed3.png', name: 'name3' },
    { img: '/img/images/bed4.png', name: 'name4' },
    { img: '/img/images/bed5.png', name: 'name5' },
  ];

  let generalRooms = [
    { img: '/img/images/bed6.png', name: 'name6' },
    { img: '/img/images/bed11.png', name: 'name11' },
    { img: '/img/images/bed8.png', name: 'name8' },
    { img: '/img/images/bed9.png', name: 'name9' },
    { img: '/img/images/bed10.png', name: 'name10' },
  ];

  let cabin = [
    { img: '/img/images/bed1.png', name: 'name1' },
    { img: '/img/images/bed2.jpg', name: 'name2' },
    { img: '/img/images/premium-bed3.png', name: 'name3' },
    { img: '/img/images/cabin-1.jpg', name: 'cabin1' },
    { img: '/img/images/cabin-2.jpg', name: 'cabin2' },
    { img: '/img/images/cabin-3.jpg', name: 'cabin3' },
    { img: '/img/images/cabin-4.jpg', name: 'cabin4' },
  ];

  let singleCabin = [
    { img: '/img/images/singleCabin1.jpg' },
    { img: '/img/images/singleCabin2.png' },
    { img: '/img/images/cabin-1.jpg' },
  ];

  let privateCabin = [
    { img: '/img/images/privateCabin.jpg' },
    { img: '/img/images/privateCabin2.jpg' },
    { img: '/img/images/privateCabin3.png' },
  ];

  let deluxe = [
    { img: '/img/images/deluxe1.jpg' },
    { img: '/img/images/deluxe2.jpg' },
    { img: '/img/images/deluxe4.jpg' },
    { img: '/img/images/deluxe5.jpg' },
    { img: '/img/images/deluxe6.png' },
  ];

  let suite = [
    { img: '/img/images/suite1.png' },
    { img: '/img/images/suite2.jpg' },
    { img: '/img/images/suite3.jpg' },
    { img: '/img/images/suite4.png' },
    { img: '/img/images/suite5.png' },
  ];

  let twin = [
    { img: '/img/images/Twin-3.jpg' },
    { img: '/img/images/Twin-2.jpg' },
    { img: '/img/images/Twin-1.jpg' },
  ];

  let pediatric = [
    { img: '/img/images/Picu-3-scaled.jpg' },
    { img: '/img/images/Picu-2-scaled.jpg' },
    { img: '/img/images/Picu-1-scaled.jpg' },
  ];

  const [products, setProducts] = useState(rooms);

  let [generalRoomsBeds, setGeneralRoomsBeds] = useState(generalRooms);

  let [cabinRooms, setCabinRooms] = useState(cabin);
  let [singleCabinRooms, setsingleCabinRooms] = useState(singleCabin);
  let [privateCabinRooms, setPrivateCabinRooms] = useState(privateCabin);
  let [deluxeRooms, setDeluxeRooms] = useState(deluxe);
  let [suiteRooms, setSuiteRooms] = useState(suite);
  let [twinRooms, setTwinRooms] = useState(twin);
  let [picu, setpicu] = useState(pediatric);

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
      <div className='m-5 '>
        <img
          src={product.img}
          alt={product.name}
          className='rounded-md h-[329px]'
        />
      </div>
    );
  };
  return (
    <div className='m-5'>
      <div className='lg:px-10 lg:pt-20 w-full flex justify-between items-center'>
        <div className='flex flex-col space-y-10'>
          <h1 className='text-4xl font-semibold text-[#184861]'>
            Wards and Rooms
          </h1>

          <p className='max-w-3xl text-2xl'>
            Grande International Hospital wards and rooms are designed in such a
            way that it meets its all basic requirement for every patient
            admitted in the hospital.
          </p>
        </div>

        <div className='flex flex-col space-y-3'>
          <div className='flex space-x-3'>
            <Image
              src='/img/images/premium-bed1.png'
              width={300}
              height={150}
              alt='bed'
            />
            <Image
              src='/img/images/premiumWard.png'
              width={300}
              height={150}
              alt='bed'
            />
          </div>
          <div className='flex space-x-3'>
            <Image
              src='/img/images/premium-singleBed2.png'
              width={300}
              height={150}
              alt='bed'
            />
            <Image
              src='/img/images/premium-bed3.png'
              width={300}
              height={150}
              alt='bed'
            />
          </div>
        </div>
      </div>

      <div className='my-20 flex flex-col  space-y-5 '>
        <div className=' pl-10 flex flex-col space-y-5'>
          <h2 className='text-[30px] capitalize'>General Room</h2>
          <p>Some of the options available for general beds in hospital:</p>
          <div className='flex flex-col space-y-3'>
            <div className='flex space-x-3 items-center'>
              <Image width={28} height={20} src='/img/point.png' alt='point' />
              <p>3 Bedded</p>
            </div>
            <div className='flex space-x-3 items-center'>
              <Image width={28} height={20} src='/img/point.png' alt='point' />
              <p>4 Bedded</p>
            </div>
            <div className='flex space-x-3 items-center'>
              <Image width={28} height={20} src='/img/point.png' alt='point' />
              <p>5 Bedded</p>
            </div>
            <div className='flex space-x-3 items-center'>
              <Image width={28} height={20} src='/img/point.png' alt='point' />
              <p>6 Bedded</p>
            </div>
            <div className='flex space-x-3 items-center'>
              <Image width={28} height={20} src='/img/point.png' alt='point' />
              <p>8 Bedded</p>
            </div>
          </div>
        </div>
        <div className=''>
          <Carousel
            value={generalRoomsBeds}
            numVisible={3}
            numScroll={3}
            responsiveOptions={responsiveOptions}
            itemTemplate={productTemplate}
          />
        </div>
      </div>

      <div className='flex flex-col space-y-5'>
        <div className='pl-10  flex flex-col space-y-5'>
          <h2 className='text-[30px] capitalize'>Cabin</h2>
          <div className='flex flex-col space-y-3'>
            <div className='flex space-x-3 items-center'>
              <Image width={28} height={20} src='/img/point.png' alt='point' />
              <p>Single Cabin</p>
            </div>

            <div className='flex space-x-3 items-center'>
              <Image width={28} height={20} src='/img/point.png' alt='point' />
              <p>Private Cabin</p>
            </div>
          </div>
        </div>
        <div className=''>
          <Carousel
            value={cabinRooms}
            numVisible={3}
            numScroll={3}
            responsiveOptions={responsiveOptions}
            itemTemplate={productTemplate}
          />
        </div>
      </div>

      <div className='flex space-x-5 items-center'>
        <div className='pl-10 w-[30%]'>
          <h2 className='text-[30px] capitalize'>Single Cabin</h2>
        </div>
        <div className='w-[70%]'>
          <Carousel
            value={singleCabinRooms}
            numVisible={3}
            numScroll={3}
            responsiveOptions={responsiveOptions}
            itemTemplate={productTemplate}
          />
        </div>
      </div>
      <div className='flex space-x-5 items-center'>
        <div className='pl-10 w-[30%]'>
          <h2 className='text-[30px] capitalize'>Private Cabin</h2>
        </div>
        <div className='w-[70%]'>
          <Carousel
            value={privateCabinRooms}
            numVisible={3}
            numScroll={3}
            responsiveOptions={responsiveOptions}
            itemTemplate={productTemplate}
          />
        </div>
      </div>
      <div className=' my-20 flex flex-col space-y-5'>
        <div className='pl-10  flex flex-col space-y-5'>
          <h2 className='text-[30px] capitalize'>Deluxe Room</h2>
          <div className='flex flex-col space-y-3'>
            <div className='flex space-x-3 items-center'>
              <Image width={28} height={20} src='/img/point.png' alt='point' />
              <p>A comfortable Sofa for attendants.</p>
            </div>
            <div className='flex space-x-3 items-center'>
              <Image width={28} height={20} src='/img/point.png' alt='point' />
              <p>Television</p>
            </div>
            <div className='flex space-x-3 items-center'>
              <Image width={28} height={20} src='/img/point.png' alt='point' />
              <p>Pantry</p>
            </div>
          </div>
        </div>
        <div className=''>
          <Carousel
            value={deluxeRooms}
            numVisible={3}
            numScroll={3}
            responsiveOptions={responsiveOptions}
            itemTemplate={productTemplate}
          />
        </div>
      </div>
      <div className=' my-20 flex flex-col space-y-5'>
        <div className='pl-10  flex flex-col space-y-5'>
          <h2 className='text-[30px] capitalize'>Suite Room</h2>
          <div className='flex flex-col space-y-3'>
            <div className='flex space-x-3 items-center'>
              <Image width={28} height={20} src='/img/point.png' alt='point' />
              <p>Television</p>
            </div>

            <div className='flex space-x-3 items-center'>
              <Image width={28} height={20} src='/img/point.png' alt='point' />
              <p>Fridge</p>
            </div>

            <div className='flex space-x-3 items-center'>
              <Image width={28} height={20} src='/img/point.png' alt='point' />
              <p>Pantry</p>
            </div>
            <div className='flex space-x-3 items-center'>
              <Image width={28} height={20} src='/img/point.png' alt='point' />
              <p>Microwave</p>
            </div>
          </div>
        </div>
        <div className=''>
          <Carousel
            value={suiteRooms}
            numVisible={3}
            numScroll={3}
            responsiveOptions={responsiveOptions}
            itemTemplate={productTemplate}
          />
        </div>
      </div>
      <div className=' my-20 flex flex-col space-y-5'>
        <div className='pl-10  flex flex-col space-y-5'>
          <h2 className='text-[30px] capitalize'>Twin Sharing Room</h2>
          <p>
            Twin sharing room beds are partitioned with a curtain to maintain
            patient privacy.
          </p>
          <div className='flex flex-col space-y-3'>
            <div className='flex space-x-3 items-center'>
              <Image width={28} height={20} src='/img/point.png' alt='point' />
              <p>
                The twin room is equipped with a cupboard, television, telephone
                and basic amenities for each patient.{' '}
              </p>
            </div>

            <div className='flex space-x-3 items-center'>
              <Image width={28} height={20} src='/img/point.png' alt='point' />
              <p>A comfortable Sofa cum Bed for visitor/ attendant.</p>
            </div>
          </div>
        </div>
        <div className=''>
          <Carousel
            value={twinRooms}
            numVisible={3}
            numScroll={3}
            responsiveOptions={responsiveOptions}
            itemTemplate={productTemplate}
          />
        </div>
      </div>
      <div className=' my-20 flex flex-col space-y-5'>
        <div className='pl-10'>
          <h2 className='text-[30px] capitalize'>Pediatric Ward</h2>
        </div>
        <div className=''>
          <Carousel
            value={picu}
            numVisible={3}
            numScroll={3}
            responsiveOptions={responsiveOptions}
            itemTemplate={productTemplate}
          />
        </div>
      </div>
    </div>
  );
}

export default WardsAndRooms;
