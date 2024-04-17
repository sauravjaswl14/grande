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

const navListMenuItems = [
  {
    title: 'About us',
    description: 'Find the perfect solution for your needs.',
    icon: SquaresPlusIcon,
    link: '/about',
  },
  {
    title: 'Mission and Vision',
    description: 'Meet and learn about our dedication',
    icon: UserGroupIcon,
    link: '/about/missionVision',
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
    link: '/department',
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
];

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
              className: 'h-6 text-gray-900 w-6',
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
              className='flex items-center xl:gap-2 py-2 pr-1 font-medium text-gray-900'
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
            {renderItems}
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
              className='flex items-center xl:gap-2 py-2 pr-4 font-medium text-gray-900'
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
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <Link
        href='#'
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
              className='flex items-center xl:gap-2 py-2 pr-4 font-medium text-gray-900'
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
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <Link
        href='#'
        className='flex text-[14px] text-[#111827]  font-medium items-center xl:gap-2  pr-4'
      >
        International Patient
      </Link>
      <Link
        href='#'
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
              className='flex items-center xl:gap-2 py-2 pr-4 font-medium text-gray-900'
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
            {renderItems}
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
          <Image src='/img/home.png' width={20} height={30} />
        </ListItem>
      </Link>

      <NavListMenu />
      <Typography
        as='a'
        href='#'
        variant='small'
        color='blue-gray'
        className='font-medium'
      >
        <ListItem className='flex text-[#111827]  items-center xl:gap-2 py-2 pr-4'>
          Contact Us
        </ListItem>
      </Typography>
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
    <Navbar className='sticky top-0 shadow-xl min-w-screen text-[10px] xl:px-10 xl:py-5 z-50'>
      <div className='flex items-center justify-between text-blue-gray-900'>
        <Link href='/'>
          <Image src='/img/logo.png' width={140} height={52.16} />
        </Link>
        <div className='hidden lg:block'>
          <NavList />
        </div>

        <div className='flex space-x-1 items-center'>
          <Image src='/img/nabh.png' width={50} height={60} className='' />
          <Image src='/img/hoty.png' width={60} height={60} className='' />
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

function SubNav() {}
