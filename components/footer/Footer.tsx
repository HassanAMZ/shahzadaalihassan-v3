import React from 'react';
import NavLink from '../navbar/NavLink';
import NavigationLinks from '../navbar/NavigationLinks';
import Image from 'next/image';
const Footer: React.FC = () => {
 return (
  <div className='container-primary py-3'>
   <div className='shadow-md border rounded-lg p-3 transition duration-300 ease-in-out w-full'>
    <footer className='gap-4 flex flex-col'>
     <div className='flex flex-row justify-between items-start lg:items-center w-full py-6'>
      <NavLink href='/'>
       <Image
        src='/logo.svg'
        alt='TrackingAcademy'
        width={500}
        height={145}
        className='w-32'
       />
      </NavLink>
      <nav className='flex flex-col lg:flex-row justify-end lg:gap-3 items-end w-full'>
       <NavigationLinks />
      </nav>
     </div>

     <p className='text-xs  text-center pt-12'>
      © {new Date().getFullYear()} TrackingAcademy, All rights reserved
     </p>
    </footer>
   </div>
  </div>
 );
};

export default Footer;
