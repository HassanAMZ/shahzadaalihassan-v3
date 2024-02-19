"use client";

import React from "react";
import Image from "next/image";

export default function ReasonsData02() {
 return (
  <div className='pt-10 pb-2 md:py-10'>
   <p className='text-primary text-center'>
    Configuring & Optimizing Website Tracking Setups 🚀
   </p>
   <h2 className='title-primary text-center py-4 container-secondary'>
    Here's why you should trust our{" "}
    <div className='relative inline-block'>
     <span>expertise</span>
     <span className='absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary rounded-full'></span>
    </div>{" "}
    in website tracking?
   </h2>
   <p className='text-center container-secondary paragraph-primary py-8'>
    For 240+ clients and 25+ agencies, from startups to multi-million-dollar
    websites, we have made setting up and fixing tracking systems simple, fast,
    efficient, and successful.
   </p>
   <div className='rounded-lg'>
    {/* Horizontal video for md screens and above */}
    <video
     autoPlay
     loop
     muted
     className='hidden md:block rounded-lg md:p-5 p-2 bg-light-secondary w-full'
     onLoadedMetadata={(e) => {
      e.currentTarget.playbackRate = 1;
     }}>
     <source
      src='/videos/home/reason-comparison-horizontal.mp4'
      type='video/mp4'
     />
     <Image
      src='/images/home/reason-comparison-horizontal.svg'
      alt='comparison image'
      width={1200}
      height={400}
      className=''
     />
    </video>

    {/* Vertical video for screens smaller than md */}
    <video
     autoPlay
     loop
     muted
     className='md:hidden rounded-lg md:p-5 p-2 bg-light-secondary w-full'
     onLoadedMetadata={(e) => {
      e.currentTarget.playbackRate = 1;
     }}>
     <source
      src='/videos/home/reason-comparison-vertical.mp4'
      type='video/mp4'
     />
     <Image
      src='/images/home/reason-comparison-vertical.svg'
      alt='comparison image'
      width={400}
      height={525}
      className=''
     />
    </video>
   </div>
  </div>
 );
}
