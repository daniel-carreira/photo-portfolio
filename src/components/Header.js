import React from 'react';

import Socials from './Socials'
import MobileNav from './MobileNav'

import { Link } from 'react-router-dom';

const Header = () => {
  return <header className='fixed w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex items-center'>
      <div className='flex flex-row lg:items-center w-full justify-between'>
        <Link to={'/'}>
          <span className='text-primary text-2xl lg:text-4xl font-primary font-bold'>Daniel Carreira</span>
        </Link>
        <nav className='hidden xl:flex gap-x-12 font-semibold'>
          <Link to={'/'} className='text-primary hover:text-[#dddddd] transition'>Home</Link>
          <Link to={'/portfolio'} className='text-primary hover:text-[#dddddd] transition'>Portfolio</Link>
          <Link to={'/contact'} className='text-primary hover:text-[#dddddd] transition'>Contact</Link>
        </nav>
        <Socials />
        <MobileNav />
      </div>
    </header>;
};

export default Header;
