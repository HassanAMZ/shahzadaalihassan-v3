"use client";

import React, { useState } from "react";
import ContainerLayout from "@/layouts/ContainerLayout";
import FreeResoursesSection from "@/components/global/FreeResoursesSection";
import SelectionButton from "@/components/global/SelectionButton";

const StartHereSection = () => {
 const [selectedButton, setSelectedButton] = useState<number>(1);

 return (
  <React.Fragment>
   <div className='flex flex-row gap-2 items-center justify-center py-2'>
    <SelectionButton
     isSelected={selectedButton === 1}
     onClick={() => setSelectedButton(1)}>
     I'm new to Freelancing!
    </SelectionButton>
    <SelectionButton
     isSelected={selectedButton === 2}
     onClick={() => setSelectedButton(2)}>
     I'm already Freelancing!
    </SelectionButton>
   </div>

   {selectedButton === 1 && (
    <div className='flex flex-col gap-2'>
     <FreeResoursesSection
      headingTexts={{
       heading: "Roadmap to Web Analytics",
       subHeading:
        "Start your freelancing journey with a comprehensive guide to mastering the basics of web analytics.",
      }}
      image={{
       src: "/images/supportingImages/001.png",
       alt: "Imtiaz Ahmed - Job Ready Programmer",
       height: 1920,
       width: 1080,
      }}
      links={{
       primary: { src: "#", text: "Coming Soon" },
      }}
      order='items-center justify-center p-2 lg:p-6'
     />
     <FreeResoursesSection
      headingTexts={{
       heading: "UpWork profile Cheklist",
       subHeading:
        "Download the checklist, and land more clients with the perfect UpWork profile!",
      }}
      image={{
       src: "/images/supportingImages/002.png",
       alt: "Imtiaz Ahmed - Job Ready Programmer",
       height: 1920,
       width: 1080,
      }}
      links={{
       primary: { src: "#", text: "Coming Soon" },
      }}
      order='items-center justify-center p-2 lg:p-6'
     />
     <FreeResoursesSection
      headingTexts={{
       heading: "Guidebook to Freelancing",
       subHeading:
        "Learn about the five key ingredients to freelancing that you need to succeed.",
      }}
      image={{
       src: "/images/supportingImages/003.png",
       alt: "Imtiaz Ahmed - Job Ready Programmer",
       height: 1920,
       width: 1080,
      }}
      links={{
       primary: { src: "#", text: "Coming Soon" },
      }}
      order='items-center justify-center p-2 lg:p-6'
     />
    </div>
   )}
   {selectedButton === 2 && (
    <div className='flex flex-col gap-2'>
     <FreeResoursesSection
      headingTexts={{
       heading: "6 tips to Client Management and Analytics",
       subHeading:
        "Effective strategies to manage client expectations, deliverables, and communication in the analytics domain.",
      }}
      image={{
       src: "/images/supportingImages/004.png",
       alt: "Imtiaz Ahmed - Job Ready Programmer",
       height: 1920,
       width: 1080,
      }}
      links={{
       primary: { src: "#", text: "Coming Soon" },
      }}
      order='items-center justify-center p-2 lg:p-6'
     />
     <FreeResoursesSection
      headingTexts={{
       heading: "Diversifying Web Analytics Services",
       subHeading:
        "Strategies to expand your offerings and tap into uncharted territories within web analytics freelancing.",
      }}
      image={{
       src: "/images/supportingImages/005.png",
       alt: "Imtiaz Ahmed - Job Ready Programmer",
       height: 1920,
       width: 1080,
      }}
      links={{
       primary: { src: "#", text: "Coming Soon" },
      }}
      order='items-center justify-center p-2 lg:p-6'
     />
     <FreeResoursesSection
      headingTexts={{
       heading: "Agency Model Business",
       subHeading:
        "Learn to Scale from Freelancer to a Full-fledged Analytics Agency. Strategies and Insights for Evolving Your Freelancing Into an Agency",
      }}
      image={{
       src: "/images/supportingImages/006.png",
       alt: "Imtiaz Ahmed - Job Ready Programmer",
       height: 1920,
       width: 1080,
      }}
      links={{
       primary: { src: "#", text: "Coming Soon" },
      }}
      order='items-center justify-center p-2 lg:p-6'
     />
    </div>
   )}
  </React.Fragment>
 );
};

export default StartHereSection;
