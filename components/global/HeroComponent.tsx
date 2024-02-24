import Image from "next/image";
import React from "react";
import {
 Heading2xl,
 Heading3xl,
 Heading5xl,
 Headingxl,
 Paragraphmd,
} from "@/components/typography/Heading";
import Link from "next/link";
import lightenDarkenColor from "@/utils/lightenDarkenColor";
import LearnMoreHeader from "@/components/global/LearnMoreHeader";
import { HeroProps } from "@/types/index";

const HeroComponent: React.FC<HeroProps> = ({
 textGroup,
 links,
 images,
 colorDetails,
}) => {
 // Validations and color calculations
 const color = lightenDarkenColor(
  colorDetails.primary,
  colorDetails?.light.value || 10,
  colorDetails?.dark.value || 90,
  colorDetails?.light.opacity || 1,
  colorDetails?.dark.opacity || 0.5
 );

 return (
  <React.Fragment>
   <section className='relative bg-dark-secondary rounded-md flex flex-col shadow-md items-center justify-center'>
    {images?.background?.desktop && (
     <Image
      alt='Shahzada Ali Hassan'
      src={images.background.desktop}
      placeholder='blur'
      blurDataURL={images.background.desktop}
      quality={100}
      fill
      className='sm:block hidden opacity-75'
      sizes='100vw'
      style={{
       objectFit: "cover",
      }}
     />
    )}
    {images?.background?.mobile && (
     <Image
      alt='Mountains'
      src={images.background.mobile}
      placeholder='blur'
      blurDataURL={images.background.mobile}
      quality={100}
      className='sm:hidden block object-right-bottom opacity-50'
      fill
      sizes='100vw'
      style={{
       objectFit: "cover",
      }}
     />
    )}
    <div className='relativ z-10 flex flex-col justify-center items-start px-4 sm:px-8 lg:px-10 lg:px-14 py-20 lg:py-24'>
     <aside className='space-y-5 pb-6'>
      {images.group?.list && (
       <div className='relative h-10 w-10'>
        {images.group.list.map((image, index) => (
         <Image
          src={image.src}
          alt={image.alt}
          width={1920}
          height={1080}
          key={index}
          className={`rounded-full absolute opacity-90
          ${index === 0 ? "left-0 top-0 z-10" : ""} 
          ${index === 1 ? "left-4 top-0 z-20" : ""} 
          ${index === 2 ? "left-8 top-0 z-30" : ""}
          ${index === 3 ? "left-12 top-0 z-30" : ""}
          
          `}
         />
        ))}
       </div>
      )}
      {textGroup.welcomeText && (
       <p className='paragraph-primary text-left'>{textGroup.welcomeText}</p>
      )}
      {textGroup.heading && (
       <h1 className='title-primary'>{textGroup.heading}</h1>
      )}
      {textGroup.subHeading && (
       <div className=''>
        <p className='title-tertiary'>
         {textGroup.subHeading.one}
         <span className='font-normal'>{textGroup.subHeading.two}</span>
        </p>
       </div>
      )}
     </aside>

     <div className='flex gap-2 text-lg'>
      <Link href={links.primary.src} className='link-primary'>
       {links.primary.text}
      </Link>
      {links.secondary && (
       <Link href={links.secondary.src} className='link-secondary'>
        {links.secondary.text}
       </Link>
      )}
     </div>
    </div>
   </section>
   {textGroup.learnMore && (
    <LearnMoreHeader
     headingTexts={{
      heading: textGroup.learnMore.heading,
      subHeading: textGroup.learnMore.subHeading,
     }}
     colorDetails={{ primary: colorDetails.primary }}
    />
   )}
  </React.Fragment>
 );
};

export default HeroComponent;
