import HeroComponent from "@/components/cards/HeroComponent";
import {
 Paragraph,
 SubHeader,
 TitleHeader,
} from "@/components/typography/Heading";
import Image from "next/image";
import React from "react";

interface DetailsProps {
 icon?: string;
 header: string;
 details: string;
}

export default function Page() {
 const Details: React.FC<DetailsProps> = ({ icon, header, details }) => {
  return (
   <React.Fragment>
    <div className=' flex gap-2 py-4'>
     <div>
      <div className='bg-gray-100 bg-opacity-20 rounded-full p-2'>{icon}</div>
     </div>
     <div className='flex flex-col gap-2'>
      <Paragraph>{header}</Paragraph>
      <Paragraph className='opacity-80'>{details}</Paragraph>
     </div>
    </div>
   </React.Fragment>
  );
 };
 return (
  <section className=''>
   {/* <div className=''>
    <Image
     src='/images/social-sharing.png'
     alt='Imtiaz Ahmed'
     width={1920}
     height={1080}
     className='rounded-md'
    />
   </div> */}

   <TitleHeader className='text-center py-4'>Hey, I'm Hassan 👋</TitleHeader>
   <SubHeader className='text-center '>
    I'm a Top Rated Freelancer on Upwork Pizza, here's what you should know
    about me.
   </SubHeader>
   <div className='divide-y p-4'>
    <Details
     icon='📚'
     header='Top Rated Web Analytics Expert'
     details='With 98% Job Success on Upwork, I specialize in web analytics, providing expertise in tools like GA4, UA, FB Pixel, and CAPI server-side tracking, and have worked with renowned clients like BookOnline.com and TruelyBeauty.com.'
    />
    <Details
     icon='🌎'
     header='Global Impact'
     details='My work has not only spanned 230 diverse clients but has also been featured in substantial corporations, enabling me to navigate and understand varied industry landscapes and cultural nuances in business.'
    />
    <Details
     icon='🔧'
     header='251 Total Jobs Completed'
     details='Successfully completed a spectrum of 251 jobs, delving into diverse challenges in web analytics and tracking setups, always dedicated to delivering value and tangible solutions to clients across various industries.'
    />

    <Details
     icon='⌚'
     header='523 Total Hours Worked'
     details='Invested 523 hours working closely with clients, ensuring their web analytics are set up correctly, data is accurate, and strategic insights can be derived from their data, thereby guiding informed business decisions.'
    />

    <Details
     icon='🚀'
     header='Proven Success and Reliability'
     details='“He completed the project as required and gave me some insights and reports that were not included in our project. I will hire him again for sure if I needed help in conversion tracking again.” - A Satisfied Client'
    />

    <Details
     icon='🎓'
     header='Academic and Professional Development'
     details="I'm pursuing my Masters in Control Sciences and Engineering at Northwestern Polytechnical University, Xi'an, China, alongside holding Google Analytics certifications and completing various web analytics courses via LinkedIn."
    />
    <Details
     icon='🛠️'
     header='Versatile Service Offerings'
     details='My offerings envelop measurement strategy and consulting, Google Tag Manager, and Segment implementation, web redesign, landing page design, and development, and server-side tracking, facilitating a comprehensive web analytics and tracking setup.'
    />
   </div>
   {/* <HeroComponent
    clientImageBoolean={false}
    linksBoolean={false}
    welcomeText='Welcome to Freelance Pizza!'
    heading="Hey, I'm Hassan."
    subHeading1='A top rated Freelancer on Upwork,  '
    subHeading2="here's what you should know about me."
    primaryLink='startHereLink'
    secondaryLink='membershipLink'
    imagesData={[
     {
      src: "/images/clients/001_1.jfif",
      alt: "Imtiaz Ahmed - Job Ready Programmer",
     },
     { src: "/images/clients/007.jfif", alt: "Client" },
     { src: "/images/clients/008.jfif", alt: "Pjipipp Herglotz - Kiss Agency" },
     {
      src: "/images/clients/001.jpg",
      alt: "Imtiaz Ahmed - Job Ready Programmer",
     },
    ]}
    backgroundImage='/images/hero/hero-image.png'
    primaryColor='rgba(255,87,51,1)'
   /> */}
  </section>
 );
}
