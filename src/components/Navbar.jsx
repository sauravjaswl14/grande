'use client';

import { useRouter } from 'next/navigation';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from '@material-tailwind/react';
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import {
  Bars4Icon,
  GlobeAmericasIcon,
  NewspaperIcon,
  PhoneIcon,
  RectangleGroupIcon,
  SquaresPlusIcon,
  SunIcon,
  TagIcon,
  UserGroupIcon,
} from '@heroicons/react/24/solid';

import { departments } from '@/data/departments';

const navListMenuItems = [
  {
    title: 'About us',
    description: 'Find the perfect solution for your needs.',
    icon: SquaresPlusIcon,
    link: '/about',
  },

  {
    title: 'Services',
    description: 'Find the perfect solution for your needs.',
    icon: Bars4Icon,
    link: '/services',
  },
  {
    title: 'Departments',
    description: 'Learn how we can help you achieve your goals.',
    icon: SunIcon,
    link: '/departments',
  },
  {
    title: 'Contact us',
    description: 'Reach out to us for assistance or inquiries',
    icon: GlobeAmericasIcon,
    link: '/contact',
  },
  {
    title: 'Contact',
    description: 'Find the perfect solution for your needs.',
    icon: PhoneIcon,
    link: '/about',
  },
  {
    title: 'News',
    description: 'Read insightful articles, tips, and expert opinions.',
    icon: NewspaperIcon,
    link: '/about',
  },
  {
    title: 'Products',
    description: 'Find the perfect solution for your needs.',
    icon: RectangleGroupIcon,
    link: '/about',
  },
  {
    title: 'Special Offers',
    description: 'Explore limited-time deals and bundles',
    icon: TagIcon,
    link: '/about',
  },
];

const overviewMenuItems = [
  {
    title: 'About us',
    description: 'Find the perfect solution for your needs.',
    icon: SquaresPlusIcon,
    link: '/about',
  },
  {
    title: 'Board of Directors',
    description: 'Find the perfect solution for your needs.',
    icon: SquaresPlusIcon,
    link: '/about/bod',
  },
  {
    title: 'management team',
    description: 'Find the perfect solution for your needs.',
    icon: SquaresPlusIcon,
    link: '/about/managementTeam',
  },
  {
    title: 'message from chairman',
    description: 'Find the perfect solution for your needs.',
    icon: SquaresPlusIcon,
    link: '/about/messageFromChairman',
  },
  {
    title: 'message from medical director',
    description: 'Find the perfect solution for your needs.',
    icon: SquaresPlusIcon,
    link: '/about/messageFromMedicalDirector',
  },
];

const services = [
  {
    title: 'services at GIH',
    description: 'Find the perfect solution for your needs.',
    icon: SquaresPlusIcon,
    link: '/services',
  },
  {
    title: 'Grande @ Home',
    description: 'Find the perfect solution for your needs.',
    icon: SquaresPlusIcon,
    link: '/services/grandeAtHome',
  },
  {
    title: 'Tele-Consultation',
    description: 'Find the perfect solution for your needs.',
    icon: SquaresPlusIcon,
    link: '/services/teleConsultation',
  },
  {
    title: 'Heli Rescue',
    description: 'Find the perfect solution for your needs.',
    icon: SquaresPlusIcon,
    link: '/services/heliRescue',
  },
  {
    title: 'Wards and Rooms',
    description: 'Find the perfect solution for your needs.',
    icon: SquaresPlusIcon,
    link: '/services/wardsAndRooms',
  },
  {
    title: 'Ambulance',
    description: 'Find the perfect solution for your needs.',
    icon: SquaresPlusIcon,
    link: '/services/ambulance',
  },
  {
    title: 'Pharmacy',
    description: 'Find the perfect solution for your needs.',
    icon: SquaresPlusIcon,
    link: '/services/pharmacy',
  },
  {
    title: 'Nursing',
    description: 'Find the perfect solution for your needs.',
    icon: SquaresPlusIcon,
    link: '/services/nursing',
  },
  {
    title: 'PCR Info',
    description: 'Find the perfect solution for your needs.',
    icon: SquaresPlusIcon,
    link: '/services/pcrInfo',
  },
];

const academicWing = [
  {
    title: 'academic programs',
    description: 'Find the perfect solution for your needs.',
    icon: SquaresPlusIcon,
    link: '/academic-wing/academicPrograms',
  },
  {
    title: 'apply for clinical fellowship',
    description: 'Find the perfect solution for your needs.',
    icon: SquaresPlusIcon,
    link: '/academic-wing',
  },
  {
    title: 'IRC(Institutional Review Committee)',
    description: 'Find the perfect solution for your needs.',
    icon: SquaresPlusIcon,
    link: '/academic-wing/IRC',
  },
  {
    title: 'Our Fellows',
    description: 'Find the perfect solution for your needs.',
    icon: SquaresPlusIcon,
    link: '/academic-wing',
  },
  {
    title: 'Grande Medical Journal(GMJ)',
    description: 'Find the perfect solution for your needs.',
    icon: SquaresPlusIcon,
    link: '/academic-wing/GMJ',
  },
  {
    title: 'Grande Lectures',
    description: 'Find the perfect solution for your needs.',
    icon: SquaresPlusIcon,
    link: '/academic-wing/grandeLectures',
  },
  {
    title: 'published articles',
    description: 'Find the perfect solution for your needs.',
    icon: SquaresPlusIcon,
    link: '/academic-wing',
  },
  {
    title: 'academic wing contact',
    description: 'Find the perfect solution for your needs.',
    icon: SquaresPlusIcon,
    link: '/academic-wing',
  },
];

let d = departments.map((department, key) => {
  let { nameOfDepartment, link } = department;

  return {
    key,
    title: nameOfDepartment,
    link,
    description: 'Find the perfect solution for your needs.',
    icon: SquaresPlusIcon,
  };
});

function NavListMenu() {
  const [isOverviewMenuOpen, setIsOverviewMenuOpen] = React.useState(false);
  const [isDepartmentsMenuOpen, setIsDepartmentMenuOpen] =
    React.useState(false);
  const [isFacilitiesMenuOpen, setIsFacilitiesMenuOpen] = React.useState(false);
  const [isAcademicWingMenuOpen, setIsAcademicWingMenuOpen] =
    React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const renderItems = navListMenuItems.map(
    ({ icon, title, link, description }, key) => (
      <Link href={link} key={key}>
        <MenuItem className='flex items-center gap-3 rounded-lg'>
          <div className='flex items-center justify-center rounded-b-lg !bg-blue-gray-50 p-2 '>
            {' '}
            {React.createElement(icon, {
              strokeWidth: 2,
              className: 'h-6 text-gray-900 text-[14px] whitespace-nowrap w-6',
            })}
          </div>
          <div>
            <Typography
              variant='h6'
              color='blue-gray'
              className='flex items-center text-sm font-bold'
            >
              {title}
            </Typography>
            <Typography
              variant='paragraph'
              className='text-xs !font-medium text-blue-gray-500'
            >
              {description}
            </Typography>
          </div>
        </MenuItem>
      </Link>
    )
  );

  const overviewItems = overviewMenuItems.map(
    ({ icon, title, link, description }, key) => {
      return (
        <Link href={link} key={key}>
          <MenuItem className='flex items-center gap-3 rounded-lg'>
            <div className='flex items-center justify-center rounded-b-lg !bg-blue-gray-50 p-2 '>
              {' '}
              {React.createElement(icon, {
                strokeWidth: 2,
                className:
                  'h-6 text-gray-900 text-[14px] whitespace-nowrap w-6',
              })}
            </div>
            <div>
              <Typography
                variant='h6'
                color='blue-gray'
                className='flex capitalize items-center text-sm font-bold'
              >
                {title}
              </Typography>
              <Typography
                variant='paragraph'
                className='text-xs !font-medium text-blue-gray-500'
              >
                {description}
              </Typography>
            </div>
          </MenuItem>
        </Link>
      );
    }
  );

  const servicesItems = services.map(
    ({ icon, title, link, description }, key) => {
      return (
        <Link href={link} key={key}>
          <MenuItem className='flex items-center gap-3 rounded-lg'>
            <div className='flex items-center justify-center rounded-b-lg !bg-blue-gray-50 p-2 '>
              {' '}
              {React.createElement(icon, {
                strokeWidth: 2,
                className:
                  'h-6 text-gray-900 text-[14px] whitespace-nowrap w-6',
              })}
            </div>
            <div>
              <Typography
                variant='h6'
                color='blue-gray'
                className='flex items-center text-sm font-bold'
              >
                {title}
              </Typography>
              <Typography
                variant='paragraph'
                className='text-xs !font-medium text-blue-gray-500'
              >
                {description}
              </Typography>
            </div>
          </MenuItem>
        </Link>
      );
    }
  );

  const academicItems = academicWing.map(
    ({ icon, title, link, description }, key) => {
      return (
        <Link href={link} key={key}>
          <MenuItem className='flex items-center gap-3 rounded-lg'>
            <div className='flex items-center justify-center rounded-b-lg !bg-blue-gray-50 p-2 '>
              {' '}
              {React.createElement(icon, {
                strokeWidth: 2,
                className:
                  'h-6 text-gray-900 text-[14px] whitespace-nowrap w-6',
              })}
            </div>
            <div>
              <Typography
                variant='h6'
                color='blue-gray'
                className='flex capitalize items-center text-sm font-bold'
              >
                {title}
              </Typography>
              <Typography
                variant='paragraph'
                className='text-xs !font-medium text-blue-gray-500'
              >
                {description}
              </Typography>
            </div>
          </MenuItem>
        </Link>
      );
    }
  );

  const departmentLists = d.map(({ icon, title, link, description }, key) => {
    return (
      <Link href={link} key={key}>
        <MenuItem className='flex items-center gap-3 rounded-lg'>
          <div className='flex items-center justify-center rounded-b-lg !bg-blue-gray-50 p-2 '>
            {' '}
            {React.createElement(icon, {
              strokeWidth: 2,
              className: 'h-6 text-gray-900 text-[14px] whitespace-nowrap w-6',
            })}
          </div>
          <div>
            <Typography
              variant='h6'
              color='blue-gray'
              className='flex capitalize items-center text-sm font-bold'
            >
              {title}
            </Typography>
            <Typography
              variant='paragraph'
              className='text-xs !font-medium text-blue-gray-500'
            >
              {description}
            </Typography>
          </div>
        </MenuItem>
      </Link>
    );
  });

  return (
    <React.Fragment>
      <Menu
        open={isOverviewMenuOpen}
        handler={setIsOverviewMenuOpen}
        offset={{ mainAxis: 20 }}
        placement='bottom'
        allowHover={true}
      >
        <MenuHandler>
          <Typography as='div' variant='small' className='font-medium'>
            <ListItem
              className='flex items-center xl:gap-2 py-2 pr-1 font-medium text-gray-900 text-[14px] whitespace-nowrap'
              selected={isOverviewMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Overview
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isOverviewMenuOpen ? 'rotate-180' : ''
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? 'rotate-180' : ''
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className='hidden bg-white border-2 mt-3 ml-8  w-screen rounded-xl lg:block'>
          <ul className='p-10 grid grid-cols-3 gap-6 gap-y-2 outline-none outline-0'>
            {overviewItems}
          </ul>
        </MenuList>
      </Menu>
      <Menu
        open={isDepartmentsMenuOpen}
        handler={setIsDepartmentMenuOpen}
        offset={{ mainAxis: 20 }}
        placement='bottom'
        allowHover={true}
      >
        <MenuHandler>
          <Typography as='div' variant='small' className='font-medium'>
            <ListItem
              className='flex items-center xl:gap-2 py-2 pr-4 font-medium text-gray-900 text-[14px] whitespace-nowrap'
              selected={isDepartmentsMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Departments
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isDepartmentsMenuOpen ? 'rotate-180' : ''
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? 'rotate-180' : ''
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className='hidden  bg-white border-2 mt-3 ml-8  w-screen rounded-xl lg:block'>
          <ul className='grid grid-cols-3 gap-y-2 outline-none outline-0'>
            {departmentLists}
          </ul>
        </MenuList>
      </Menu>
      <Link
        href='/health-package'
        className='flex text-[#111827] text-[14px] font-medium items-center xl:gap-2  pr-4'
      >
        Health Packages
      </Link>
      <Menu
        open={isFacilitiesMenuOpen}
        handler={setIsFacilitiesMenuOpen}
        offset={{ mainAxis: 20 }}
        placement='bottom'
        allowHover={true}
      >
        <MenuHandler>
          <Typography as='div' variant='small' className='font-medium'>
            <ListItem
              className='flex items-center xl:gap-2 py-2 pr-4 font-medium text-gray-900 text-[14px] whitespace-nowrap'
              selected={isFacilitiesMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Facilities & Services
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isFacilitiesMenuOpen ? 'rotate-180' : ''
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? 'rotate-180' : ''
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className='hidden  bg-white border-2 mt-3 ml-8  w-screen rounded-xl lg:block'>
          <ul className='grid grid-cols-3 gap-y-2 outline-none outline-0'>
            {servicesItems}
          </ul>
        </MenuList>
      </Menu>
      <Link
        href='/internationalPatient'
        className='flex text-[14px] text-[#111827]  font-medium items-center xl:gap-2  pr-4'
      >
        International Patient
      </Link>
      <Link
        href='/career'
        className='flex text-[14px] text-[#111827]  font-medium items-center xl:gap-2  pr-4'
      >
        Career
      </Link>
      <Menu
        open={isAcademicWingMenuOpen}
        handler={setIsAcademicWingMenuOpen}
        offset={{ mainAxis: 20 }}
        placement='bottom'
        allowHover={true}
      >
        <MenuHandler>
          <Typography as='div' variant='small' className='font-medium'>
            <ListItem
              className='flex items-center xl:gap-2 py-2 pr-4 font-medium text-gray-900 text-[14px] whitespace-nowrap'
              selected={setIsAcademicWingMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Academic Wing
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isAcademicWingMenuOpen ? 'rotate-180' : ''
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? 'rotate-180' : ''
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className='hidden  bg-white border-2 mt-3 ml-8  w-screen rounded-xl lg:block'>
          <ul className='grid grid-cols-3 gap-y-2 outline-none outline-0'>
            {academicItems}
          </ul>
        </MenuList>
      </Menu>
      <div className='block lg:hidden'>
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}

function NavList() {
  // let router = useRouter();
  return (
    <List className='mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row space-x-[2px] items-center lg:p-1'>
      <Link href='/'>
        <ListItem className='flex items-center text-[#238751] xl:gap-2 py-2 '>
          <Image src='/img/home.png' width={20} height={30} alt='home icon' />
        </ListItem>
      </Link>

      <NavListMenu />

      <Link
        href='/contact'
        className='flex text-[#111827] text-[14px] font-medium items-center xl:gap-2 py-2 pr-4'
      >
        Contact Us
      </Link>
    </List>
  );
}

export function MegaMenuWithHover() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <Navbar className='sticky top-0 shadow-xl w-screen text-[10px] xl:px-10 xl:py-5 z-50'>
      <div className='flex items-center justify-between text-blue-gray-900'>
        <Link href='/'>
          <Image
            src='/img/logo.png'
            width={140}
            height={52.16}
            alt='grande-logo'
          />
        </Link>
        <div className='hidden lg:block'>
          <NavList />
        </div>

        <div className='hidden 2xl:flex 2xl:space-x-1 xl:items-center'>
          <Image
            src='/img/nabh.png'
            width={50}
            height={60}
            className=''
            alt='nabh'
          />
          <Image
            src='/img/hoty.png'
            width={60}
            height={60}
            className=''
            alt='hospitalOfTheYear'
          />
        </div>

        <IconButton
          variant='text'
          color='blue-gray'
          className='lg:hidden'
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className='h-6 w-6' strokeWidth={2} />
          ) : (
            <Bars3Icon className='h-6 w-6' strokeWidth={2} />
          )}
        </IconButton>
      </div>
      {/* <Collapse open={openNav}>
        <NavList />
      </Collapse> */}
    </Navbar>
  );
}
