import Link from "next/link";
import React from "react";
import CaseStudies from "@/components/for-businesses/CaseStudies";
import ImageSlider from "@/components/for-freelancers/ImageSlider";
import Image from "next/image";
import Timeline from "@/components/for-businesses/Timeline";
import Technologies from "@/components/for-businesses/Technologies";
import ComparisonTable from "@/components/for-businesses/ComparisonTable";
import FAQ from "@/components/for-businesses/FAQ";
import WorkHistory from "@/components/for-businesses/WorkHistory";
import ReasonsData from "@/components/global/ReasonsData";
import ReasonsData02 from "@/components/for-businesses/ReasonsData02";
import CallToAction from "@/components/for-businesses/CallToAction";
import AboutDetails from "@/components/about/AboutDetails";
import LearnMoreHeader from "@/components/global/LearnMoreHeader";
import SingleGridContent from "@/components/global/SingleGridContent";
import TestimonialSlider from "@/components/for-businesses/TestimonialSlider";
import BookACall from "@/components/for-businesses/BookACall";

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

const someReasonsData = [
 {
  id: 1,
  title: "Comprehensive Analytics Training",
  paragraph:
   "Master the fundamentals of analytics with our structured courses designed for all skill levels. Learn how to make data-driven decisions to boost your business growth.",
  imageUrl: "/images/for-businesses/reason-data-001.png",
 },
 {
  id: 2,
  title: "Advanced Tag Manager Workshops",
  paragraph:
   "Dive deep into Google Tag Manager with our hands-on workshops. Learn how to set up, manage, and troubleshoot tags efficiently to ensure accurate data tracking.",
  imageUrl: "/images/for-businesses/reason-data-002.png",
 },
 {
  id: 3,
  title: "Expert Tracking Implementation",
  paragraph:
   "Gain practical skills in implementing and optimizing tracking solutions. Our training covers everything from basic setup to advanced tracking strategies.",
  imageUrl: "/images/for-businesses/reason-data-003.png",
 },
 {
  id: 4,
  title: "Interactive Reporting Techniques",
  paragraph:
   "Learn how to create and interpret insightful reports that drive action. Our courses teach you to use various tools to generate reports that are clear and actionable.",
  imageUrl: "/images/for-businesses/reason-data-004.png",
 },
];

function page() {
 return (
  <div>
   <main>
    <section className='gap-4 py-16 flex items-center flex-col text-center bg-gradient-to-t from-complementary via-slate-300 to-complementary'>
     <React.Fragment>
      <h1 className='text-3xl font-bold lg:py-5 container-secondary'>
       We create courses that equips you with Advanced Tracking Skills to{" "}
       <span className='bg-gradient-to-r from-accent via-accent  to-accent inline-block text-transparent bg-clip-text animate-gradient-move'>
        Maximize
       </span>{" "}
       Advertising Results
      </h1>
      <p className='container-secondary'>
       We offer comprehensive training in auditing, analytics, and tracking to
       enhance campaign performance and conversion rates, simplifying Tracking &
       Web Analytics for marketers, business owners, agencies, and freelancers.
      </p>
      <div className='flex gap-x-4 w-full items-center justify-center'>
       <Link href='/courses' className='link-primary'>
        Enroll Here
       </Link>
      </div>
     </React.Fragment>
    </section>

    <section className='pb-20'>
     <TestimonialSlider />
    </section>

    <section className='pb-20 gap-5 flex items-center flex-col container-primary'>
     <WorkHistory />
    </section>

    <section
     id='why-us'
     className='pt-3 flex items-center flex-col container-primary'>
     <ReasonsData
      title='4 Reasons Why You Should Enroll in Our Analytics and Tracking Courses'
      reasons={someReasonsData}
      intervalTime={5000} // optional, default is 2000 ms
     />
    </section>

    <section className='container-primary'>
     <ReasonsData02 />
    </section>

    <section className='container-primary'>
     <CallToAction />
    </section>

    <section
     id='about'
     className='flex flex-col pt-20 items-center justify-center container-primary'>
     <div>
      <p className='text-accent text-center'>
       Here's why you should trust Tracking Academy
      </p>
      <h2 className='text-2xl font-bold  text-dominant text-center'>
       We are the experts in Analytics Integration that's Accurate.
      </h2>
     </div>
     <div className='lg:pr-10 lg:pl-3 px-3 grid lg:grid-cols-2'>
      <div className='flex items-center justify-center flex-col py-6 space-y-6'>
       <p className='text-center lg:text-left'>
        Our founder, Ali Hassan, has configured and audited more than 1,000
        websites for eCommerce brands and lead generation websites with Google
        Analytics 4, Google Tag Manager, Facebook Pixel and more.
       </p>
       <p className='text-center lg:text-left'>
        After making hundreds of tracking integration and system for clients and
        agencies, Hassan put together a world-class team of strategists,
        Analysts, marketers, developers, and a conversion tracking experts that
        led to launch Tracking Academy — the most effective web analytics
        integration agency used by category-defining brands and agencies.
       </p>
      </div>
      <div className='relative w-full pt-4'>
       <Image
        className='w-full'
        width={1185}
        height={1080}
        src='/images/hero/about-image.png'
        alt='Imtiaz Ahmed'
       />
      </div>
     </div>
    </section>
    <section className='bg-dominant'>
     <div className='flex items-center flex-col container-primary px-4 py-20'>
      <p className='text-complementary font-semibold'>It works, too</p>
      <h2 className='text-2xl font-bold  text-center text-complementary container-secondary'>
       As you can see for yourself, we get results
      </h2>
      <div className='grid lg:grid-cols-4 sm:grid-cols-2 gap-2 pt-16 w-full'>
       {resultsData.map((result, index) => (
        <div key={index} className='bg-complementary border rounded-lg p-8'>
         <p className='text-3xl font-bold pb-5'> {result.percentage}% </p>
         <p className='text-sm'>{result.detail} </p>
        </div>
       ))}
      </div>
      <p className='pt-16 text-xs  text-complementary text-center'>
       Results may vary*
      </p>
     </div>
    </section>

    <section className='py-20 container-primary flex flex-col items-center'>
     <h2 className='text-2xl font-bold  text-center py-10 container-secondary'>
      What happens when you purchase a Tracking Package
     </h2>
     <Timeline />
    </section>

    <section id='case-studies' className='bg-dominant'>
     <CaseStudies />
    </section>
    <section
     id='call-to-action'
     className='grid lg:grid-cols-2 gap-4 py-10 items-center justify-center container-primary'>
     <div className='space-y-4'>
      <p className='text-accent'>
       Empower Your Future with Essential Analytics Skills
      </p>
      <h2 className='text-3xl font-bold '>Analytics & Tracking Solutions</h2>
      <p>
       We specialize in configuring advanced tracking and analytics for your
       website, ensuring you capture every interaction and gain insights that
       drive growth.
      </p>
      <p>
       Our solutions empower you to understand your audience, optimize your
       marketing strategies, and achieve higher conversion rates with
       data-driven decisions.
      </p>
     </div>

     <div className='bg-accent rounded-lg py-10 px-6 text-complementary divide-y divide-dominant'>
      <div className='pb-3'>
       <h3 className='text-xl font-bold   font-bold '>
        Analytics Setup Package
       </h3>
       <div className='py-4 flex items-center gap-4'>
        <p className='font-bold '>$2,000</p>
        <p className='text-xs '>Comprehensive analytics and tracking setup</p>
       </div>
      </div>
      <div className='py-4 text-sm'>
       <p className='font-bold  pt-3 pb-4'>What's Included</p>
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
       className='link-secondary flex mt-6 text-dominant'>
       <div className='w-full text-center'>Setup my Analytics</div>
      </Link>
     </div>
    </section>

    <section className=' bg-dominant'>
     <div className='container-primary pt-20 text-complementary text-center'>
      <h2 className='text-2xl font-bold  py-8'>We plug into your tech stack</h2>
      <Technologies />
     </div>
     <div className='text-dominant bg-complementary py-20'>
      <h2 className='text-2xl font-bold  text-center'>
       How we compare to other solutions
      </h2>
      <div className=' flex items-center justify-center py-6'>
       <p className='container-secondary text-center'>
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

    <section className='pb-20'>
     <h2 className='text-3xl font-bold container-primary py-12 text-center'>
      What others have to say about working with Tracking Academy
     </h2>
     <TestimonialSlider />

     <div className='flex container-primary lg:flex-row flex-col items-center justify-center gap-2 lg:gap-5 pt-10'>
      <BookACall />
      <Link
       href='/services/web-analytics-and-tracking'
       className='link-secondary'>
       <div className='w-full text-center'>Setup my Analytics</div>
      </Link>
     </div>
    </section>

    <section className='bg-dominant text-complementary py-20'>
     <h2 className='text-3xl font-bold container-primary text-center py-12'>
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
     <div className='grid lg:grid-cols-2 gap-2'>
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
    <section className='container-primary pb-20'>
     <LearnMoreHeader
      headingTexts={{
       heading: "Our expertise in website tracking",
       subHeading: "We have mastered web analytics from every angle.",
      }}
     />
     <AboutDetails />
    </section>

    <section className='bg-dominant py-20'>
     <div className='grid lg:grid-cols-2 gap-4 lg:gap-8 container-primary'>
      <div className='bg-accent rounded-lg flex flex-col justify-between text-complementary'>
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
         className='w-full'
         width={1000}
         height={1000}
         src='/images/for-businesses/hassan-image-001.png'
         alt='Imtiaz Ahmed'
        />
       </div>
      </div>
      <div className='bg-complementary rounded-lg text-dominant flex flex-col justify-between '>
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
         className='w-full'
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
