import Link from "next/link";
import React from "react";
import CaseStudies from "@/components/home/CaseStudies";
import ImageSlider from "@/components/home/ImageSlider";
import Image from "next/image";
import Timeline from "@/components/home/Timeline";
import Technologies from "@/components/home/Technologies";
import ComparisonTable from "@/components/home/ComparisonTable";
import FAQ from "@/components/home/FAQ";
import WorkHistory from "@/components/home/WorkHistory";
import ReasonsData from "@/components/home/ReasonsData";
import ReasonsData02 from "@/components/home/ReasonsData02";
import CallToAction from "@/components/home/CallToAction";
import AboutDetails from "@/components/about/AboutDetails";
import LearnMoreHeader from "@/components/global/LearnMoreHeader";
import SingleGridContent from "@/components/global/SingleGridContent";
import TestimonialSlider from "@/components/home/TestimonialSlider";
import BookACall from "@/components/home/BookACall";

const resultsData = [
 {
  id: 1,
  percentage: "23",
  detail:
   "Decrease in Cost Per Acquisition (CPA) by 23%. Proper tracking allows for more efficient ad targeting and budget allocation, leading to a significant reduction in the cost to acquire a new customer.",
 },
 {
  id: 2,
  percentage: "37",
  detail:
   "Increase in Return on Ad Spend (ROAS) by 37%. With accurate conversion tracking, businesses can optimize their ad campaigns for better performance, resulting in a higher return on their advertising investments.",
 },
 {
  id: 3,
  percentage: "19",
  detail:
   "Improvement in conversion attribution accuracy by 19%. Enhanced tracking provides clearer insights into the customer journey, allowing businesses to attribute conversions more accurately to the correct marketing channels.",
 },
 {
  id: 4,
  percentage: "27",
  detail:
   "Increase in Customer Lifetime Value (LTV) by 27%. By understanding customer behavior through detailed analytics, businesses can tailor their marketing strategies to increase the overall value generated by each customer over time.",
 },
];

function page() {
 return (
  <div>
   <main>
    <section className='gap-4 py-16 flex items-center flex-col text-center container-primary'>
     <React.Fragment>
      <h1 className='title-primary lg:py-5 container-secondary'>
       We configure tracking that{" "}
       <span className='bg-gradient-to-r from-primary via-secondary to-primary inline-block text-transparent bg-clip-text animate-gradient-move'>
        unlocks
       </span>{" "}
       more efficient advertising spend
      </h1>
      <p className='container-secondary paragraph-primary pb-4'>
       We handle auditing, analytics, tracking tag's implementations and
       reporting. You drive traffic with a higher conversion rate.
      </p>
      <div className='flex gap-x-4 py-4 w-full items-center justify-center '>
       <BookACall />
       <Link href='#why-us' className='link-secondary px-4 lg:px-16 py-3'>
        Learn More
       </Link>
      </div>
     </React.Fragment>
    </section>

    <section>
     <ImageSlider />
    </section>

    <section className='py-20 gap-5 flex items-center flex-col container-primary'>
     <WorkHistory />
    </section>

    <section
     id='why-us'
     className='pt-3 flex items-center flex-col container-primary'>
     <ReasonsData />
    </section>

    <section className='container-primary'>
     <ReasonsData02 />
    </section>

    <section className='container-primary'>
     <CallToAction />
    </section>

    <section
     id='about'
     className='flex flex-col pt-20 items-end justify-center container-primary'>
     <div className='py-12'>
      <p className='text-primary text-center'>
       Here's why you should trust Tracking Academy
      </p>
      <h2 className='title-secondary text-light-primary text-center '>
       We are the experts in Analytics Integration that's Accurate.
      </h2>
     </div>
     <div className='lg:pr-10 lg:pl-3 px-3 grid lg:grid-cols-2'>
      <div>
       <p className='py-6 paragraph-primary text-center lg:text-left'>
        Our founder, Ali Hassan, has configured and audited more than 1,000
        websites for eCommerce brands and lead generation websites with Google
        Analytics 4, Google Tag Manager, Facebook Pixel and more.
       </p>
       <p className='paragraph-primary text-center lg:text-left'>
        After making hundreds of tracking integration and system for clients and
        agencies, Hassan put together a world-class team of strategists,
        Analysts, marketers, developers, and a conversion tracking experts that
        led to launch Tracking Academy — the most effective web analytics
        integration agency used by category-defining brands and agencies.
       </p>
      </div>
      <div className='relative w-full pt-4'>
       <Image
        className='w-full grayscale'
        width={1185}
        height={1080}
        src='/images/hero/about-image.png'
        alt='Imtiaz Ahmed'
       />
      </div>
     </div>
    </section>
    <section className='bg-light-primary '>
     <div className='flex items-center flex-col container-primary px-4 py-20'>
      <p className='text-secondary font-semibold'>It works, too</p>
      <h2 className='title-secondary text-center text-dark-primary container-secondary'>
       As you can see for yourself, we get results
      </h2>
      <div className='grid lg:grid-cols-4 sm:grid-cols-2 gap-2 pt-16 w-full'>
       {resultsData.map((result, index) => (
        <div key={index} className='bg-dark-primary border rounded-lg p-8'>
         <p className='title-primary pb-5'> {result.percentage}% </p>
         <p className='paragraph-secondary'>{result.detail} </p>
        </div>
       ))}
      </div>
      <p className='pt-16 paragraph-tertiary text-dark-primary text-center'>
       Results may vary*
      </p>
     </div>
    </section>

    <section className='py-20 container-primary flex flex-col items-center'>
     <h2 className='title-secondary text-center py-10 container-secondary'>
      What happens when you purchase a Tracking Package
     </h2>
     <Timeline />
    </section>

    <section id='case-studies' className='bg-light-primary'>
     <CaseStudies />
    </section>
    <section
     id='call-to-action'
     className='grid lg:grid-cols-2 gap-4 py-10 items-center justify-center container-primary'>
     <div className='space-y-4 '>
      <p className='text-primary'>Let's Enhance Your Digital Presence</p>
      <h2 className='title-primary'>Analytics & Tracking Solutions</h2>
      <p className='paragraph-primary'>
       We specialize in configuring advanced tracking and analytics for your
       website, ensuring you capture every interaction and gain insights that
       drive growth.
      </p>
      <p className='paragraph-primary'>
       Our solutions empower you to understand your audience, optimize your
       marketing strategies, and achieve higher conversion rates with
       data-driven decisions.
      </p>
     </div>

     <div className='bg-primary rounded-lg py-10 px-6 text-dark-primary divide-y divide-dark-secondary'>
      <div className='pb-3'>
       <h3 className='title-tertiary font-bold'>Analytics Setup Package</h3>
       <div className='py-4 flex items-center gap-4'>
        <p className='paragraph-secondary font-bold'>$2,000</p>
        <p className='paragraph-tertiary'>
         Comprehensive analytics and tracking setup
        </p>
       </div>
      </div>
      <div className='py-4 paragraph-secondary'>
       <p className='font-bold pt-3 pb-4'>What's Included</p>
       <ul className='list-inside grid gap-4 sm:grid-cols-2 lg:grid-cols-2'>
        <li className='flex items-center'>✔ Google Analytics Setup</li>
        <li className='flex items-center'>
         ✔ Google Tag Manager Configuration
        </li>
        <li className='flex items-center'>✔ Conversion Tracking</li>
        <li className='flex items-center'>✔ Custom Event Tracking</li>
        <li className='flex items-center'>✔ E-commerce Tracking</li>
        <li className='flex items-center'>✔ Data Layer Implementation</li>
        <li className='flex items-center'>✔ Dashboard & Report Setup</li>
        <li className='flex items-center'>✔ Ongoing Support & Optimization</li>
       </ul>
      </div>

      <Link
       href='/services/web-analytics-and-tracking'
       className='link-secondary flex mt-6 p-4 text-light-primary'>
       <div className='w-full text-center'>Setup my Analytics</div>
      </Link>
     </div>
    </section>

    <section className=' bg-light-primary'>
     <div className='container-primary py-20 text-dark-primary text-center '>
      <h2 className='title-secondary py-8'>We plug into your tech stack</h2>
      <Technologies />
     </div>
     <div className='text-dark-primary'>
      <h2 className='title-secondary text-center'>How we compare</h2>
      <div className=' flex items-center justify-center py-6'>
       <p className='paragraph-primary container-secondary text-center'>
        At Tracking Academy, we understand the importance of seamless
        integration with your existing tech stack. Our analytics and tracking
        solutions are designed to work effortlessly with your marketing tools,
        providing you with a unified view of your digital performance and
        enabling more effective decision-making.
       </p>
      </div>
      <ComparisonTable />
     </div>
    </section>

    <section className='py-20 container-primary'>
     <TestimonialSlider />

     <div className='flex lg:flex-row flex-col items-center justify-center gap-2 lg:gap-5 pt-10'>
      <BookACall />
      <Link
       href='/services/web-analytics-and-tracking'
       className='link-secondary flex py-4 px-8  w-full lg:w-fit text-light-primary'>
       <div className='w-full text-center'>Setup my Analytics</div>
      </Link>
     </div>
    </section>

    <section className='bg-light-primary text-dark-primary py-20'>
     <h2 className='title-primary container-primary text-center py-12'>
      Frequently Asked Questions
     </h2>
     <div className='container-secondary'>
      <FAQ />
     </div>
    </section>

    <section className='container-primary py-10'>
     <LearnMoreHeader
      headingTexts={{
       heading: "Boost Your Web Analytics 🚀",
       subHeading:
        "From setting up tracking tools to personalized consultations, discover how I can elevate your business's web analytics capabilities.",
      }}
     />
     <div className='grid lg:grid-cols-2 gap-2 '>
      <SingleGridContent
       imagesData={{
        src: "/images/hero/001.png",
        alt: "Description of image",
        width: 600,
        height: 400,
       }}
       headingTexts={{ heading: "Audit Current Tracking" }}
       paragraphTexts={{
        primary: "Audit Your Setup:",
        secondary:
         "I'll look at your current tracking tools for GA4, FB Pixel etc. and see where things can be improved. We'll make sure everything is set up right and catching all the data you need.",
       }}
      />

      <SingleGridContent
       imagesData={{
        src: "/images/hero/004.png",
        alt: "Description of image",
        width: 600,
        height: 400,
       }}
       headingTexts={{ heading: "Expert Consultation Sessions" }}
       paragraphTexts={{
        primary: "Get Expert Advice:",
        secondary:
         "Not sure where to start with web analytics or how to optimize your current setup? Let's chat. I offer personalized consultations to help you understand and make the most of your data tools.",
       }}
      />
      <SingleGridContent
       imagesData={{
        src: "/images/hero/002.png",
        alt: "Description of image",
        width: 600,
        height: 400,
       }}
       headingTexts={{ heading: "Client-Side Tracking Setup" }}
       paragraphTexts={{
        primary: "Set Up Client Side Tracking:",
        secondary:
         "I'll set up tools like GA4, UA, and FB Pixel for you. This will help us see what your visitors are doing on your website and how we can serve them better.",
       }}
      />
      <SingleGridContent
       imagesData={{
        src: "/images/hero/003.png",
        alt: "Description of image",
        width: 600,
        height: 400,
       }}
       headingTexts={{ heading: "Master Server-Side Tracking" }}
       paragraphTexts={{
        primary: "Server-Side Tracking:",
        secondary:
         "I'll set up server-side tracking for tools like Facebook's Conversion API. This means better data collection without slowing down your website.",
       }}
      />
     </div>
    </section>
    <section className='container-primary'>
     <LearnMoreHeader
      headingTexts={{
       heading: "Our expertise in website tracking",
       subHeading: "We have mastered web analytics from every angle.",
      }}
     />
    </section>
    <AboutDetails />

    <section className='bg-light-primary py-20'>
     <div className='grid lg:grid-cols-2 gap-4 lg:gap-8 container-primary'>
      <div className='bg-primary rounded-lg flex flex-col justify-between text-dark-primary'>
       <div className='p-4 lg:p-8 items-center flex flex-col'>
        <LearnMoreHeader
         headingTexts={{
          heading: <div>Ready to Enhance Your Analytics & Tracking?</div>,
          subHeading: (
           <div>
            Discover why brands like Bookonline, TicketOnline, and Comrade trust
            us for their analytics and tracking needs.
           </div>
          ),
         }}
        />

        <Link
         href='/services/web-analytics-and-tracking'
         className='link-secondary'>
         Get Started
        </Link>
       </div>

       <div className='relative w-full pt-4'>
        <Image
         className='w-full grayscale'
         width={1000}
         height={1000}
         src='/images/home/hassan-image-001.png'
         alt='Imtiaz Ahmed'
        />
       </div>
      </div>
      <div className='bg-dark-primary rounded-lg text-light-primary flex flex-col justify-between  '>
       <div className='p-4 lg:p-8 items-center flex flex-col'>
        <LearnMoreHeader
         headingTexts={{
          heading: <div>Not ready to start yet? Book a consultation 🤙</div>,
          subHeading: (
           <div>
            Schedule a call to discuss how our expertise in analytics and
            tracking can boost your marketing efforts.
           </div>
          ),
         }}
        />
        <BookACall />
       </div>
       <div className='relative w-full pt-4'>
        <Image
         className='w-full grayscale'
         width={1185}
         height={1080}
         src='/images/hero/about-image.png'
         alt='Imtiaz Ahmed'
        />
       </div>
      </div>
     </div>
    </section>
   </main>
  </div>
 );
}

export default page;
