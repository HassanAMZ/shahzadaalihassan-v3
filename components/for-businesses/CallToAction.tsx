"use client";

import Link from "next/link";
import React from "react";
import BookACall from "./BookACall";

export default function CallToAction() {
 return (
  <React.Fragment>
   {" "}
   <div className=' bg-accent rounded-lg py-10 flex items-center flex-col'>
    <h2 className='title-tertiary text-complementary text-center py-5 container-secondary'>
     Ready to get your analytics & tracking fixed that increases AOV, ROAS, and
     makes you happy?
    </h2>

    <div className='flex gap-x-2 lg:gap-x-4 py-4'>
     <BookACall />
     <Link
      href='/services/web-analytics-and-tracking'
      className='link-secondary'>
      Setup my Analytics
     </Link>
    </div>
   </div>
  </React.Fragment>
 );
}