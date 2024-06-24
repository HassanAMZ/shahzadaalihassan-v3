import YoutubeEmbed from "@/components/mdx/YoutubeEmbed";
import Link from "next/link";
import Image from "next/image";
import FAQ from "@/components/for-businesses/FAQ";
import ClientTestimonial from "@/components/landing-pages/ClientTestimonial";
import CallToAction from "@/components/landing-pages/CallToAction";
import Divider from "@/components/landing-pages/Divider";
import Navbar from "@/components/for-businesses/Navbar";

function page() {
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
   title: "Clear, Actionable Insights",
   paragraph:
    "Get straightforward insights from your data without complex setups. We make your data work for you, providing clear, actionable insights for growth.",
   imageUrl: "/images/for-businesses/reason-data-001.png",
  },
  {
   id: 2,
   title: "Unique Problems, Custom Solutions",
   paragraph:
    "We tailor solutions to your unique needs, from sensible ecommerce tracking to analytics for decision-making. Enjoy better decisions, more conversions, and clearer goals.",
   imageUrl: "/images/for-businesses/reason-data-002.png",
  },
  {
   id: 3,
   title: "Fast, Efficient, and Transparent",
   paragraph:
    "We set up your tracking quickly, keep you informed, and ensure transparency in costs. No hidden fees, just honest work for your business growth.",
   imageUrl: "/images/for-businesses/reason-data-003.png",
  },
  {
   id: 4,
   title: "Reports You'll Actually Read",
   paragraph:
    "Our reports are like a chat with a knowledgeable friend. Easy to read, understand, and use. No jargon or endless tables, just useful insights.",
   imageUrl: "/images/for-businesses/reason-data-004.png",
  },
 ];

 const images = {
  group: {
   list: [
    {
     src: "/images/clients/001_1.jfif",
     alt: "Imtiaz Ahmed - Job Ready Programmer",
    },
    { src: "/images/clients/007.jfif", alt: "Client" },
    {
     src: "/images/clients/008.jfif",
     alt: "Pjipipp Herglotz - Kiss Agency",
    },
    {
     src: "/images/clients/001.jpg",
     alt: "Imtiaz Ahmed - Job Ready Programmer",
    },
    {
     src: "/images/clients/001.jpg",
     alt: "Imtiaz Ahmed - Job Ready Programmer",
    },
   ],
  },
  background: {
   desktop: "/images/hero/hero-image-md.png",
   mobile: "/images/hero/hero-image-sm.png",
  },
 };

 return (
  <main className='container-secondary'>
   <section className='pt-6 pb-2 space-y-2'>
    <h1 className='text-center text-3xl md:text-4xl font-semibold '>
     <span className='text-danger'>Get 95% Accurate Tracking</span> in 7 Days –
     Guaranteed! Turn your data into{" "}
     <span className='text-danger'>easy-to-use insights </span> and{" "}
     <span className='text-danger'>see your profits grow quickly</span>.
    </h1>

    <div className='flex justify-center'>
     <YoutubeEmbed embedId={"9MGpL_AmEYM"} />
    </div>
    <h3 className=' text-2xl md:text-3xl font-semibold text-center py-2'>
     Ready to see how it works? Watch the video and apply below!
    </h3>
    <div className='text-center '>
     <Link
      href='/landing-pages/offer-001/book-a-call'
      type='button'
      className='link-primary-danger text-2xl !px-12'>
      Apply Now
     </Link>
    </div>
   </section>

   <Divider />
   <section className=' space-y-3'>
    <h3 className=' text-3xl md:text-4xl font-semibold text-center py-2'>
     Improve Your Tracking with Proven Results. Here’s How:
    </h3>
    <p>
     We make sure your tracking is accurate with an easy setup, full testing,
     and low maintenance. Our system helps you make better decisions and
     increase your profits.
    </p>
    <div className='space-y-3'>
     <h4 className='text-4xl font-semibold text-danger'>Fast Implementation</h4>
     <p>
      We set up your tracking system in 7 days. Our team handles everything to
      make sure it works smoothly with no downtime.
     </p>
    </div>

    <div className='space-y-3'>
     <h4 className='text-4xl font-semibold text-danger'>High Accuracy</h4>
     <p>
      Get 95% accuracy, which helps you make better decisions and increase your
      profits. Our system is easy to keep running with low costs.
     </p>
    </div>

    <div className='space-y-3'>
     <h4 className='text-4xl font-semibold text-danger'>Ease of Use</h4>
     <p>
      Our system is simple and doesn’t need much technical knowledge. It grows
      with your business while staying accurate and efficient.
     </p>
    </div>
    <div className='space-y-3'>
     <h4 className='text-4xl font-semibold text-danger'>The End Result?</h4>
     <p>
      We are so sure of our process that we guarantee 95% tracking accuracy in 7
      days, or you get a full refund. Enjoy 24/7 support from our customer
      service team.
     </p>
     <p>
      See the difference our system makes and take your business to the next
      level. Book a free consultation now and secure your spot before it’s too
      late!
     </p>
    </div>

    <div className='text-center py-2'>
     <Link
      href='/landing-pages/offer-001/book-a-call'
      type='button'
      className='link-primary-danger text-2xl !px-12'>
      Schedule Your Call
     </Link>
    </div>
   </section>
   <Divider />
   <ClientTestimonial />
   <CallToAction />
   {/* <section className='py-2'>
        <div className='text-dominant bg-complementary py-6'>
         <h2 className='text-4xl font-semibold  text-center'>
          Why we Outsmokes the Competition! 💨
         </h2>
         <div className=' flex items-center justify-center py-6'>
          <p className=' text-center'>
           At Tracking Academy, we understand the importance of seamless
           integration with your existing tech stack. Our analytics and tracking
           solutions are designed to work effortlessly with your marketing tools,
           providing you with a unified view of your digital performance and
           enabling more effective decision-making.
          </p>
         </div>
         <ComparisonTable />
        </div>
       </section> */}
   {/* <section >
        <ReasonsData02 />
       </section> */}
   {/* <section >
        <CallToAction />
       </section> */}
   {/* <section
        id='about'
        className='flex flex-col pt-20 items-center justify-center '>
        <div >
         <p className='text-danger text-center'>
          Here's why you should trust Tracking Academy
         </p>
         <h2 className='text-4xl font-semibold  text-dominant text-center'>
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
       </section> */}
   {/* <section className='bg-dominant'>
        <div className='flex items-center flex-col  px-4 py-30'>
         <p className='text-complementary font-semibold'>It works, too</p>
         <h2 className='text-4xl font-semibold  text-center text-complementary '>
          As you can see for yourself, we get results
         </h2>
         <div className='grid lg:grid-cols-4 sm:grid-cols-2 gap-2 pt-16 w-full'>
          {resultsData.map((result, index) => (
           <div key={index} className='bg-complementary border rounded-lg p-8'>
            <p className='text-4xl font-semibold pb-5'> {result.percentage}% </p>
            <p className='text-sm'>{result.detail} </p>
           </div>
          ))}
         </div>
         <p className='pt-16 text-xs  text-complementary text-center'>
          Results may vary*
         </p>
        </div>
       </section> */}
   {/* <section className='py-20  flex flex-col items-center'>
        <h2 className='text-4xl font-semibold  text-center py-10 '>
         What happens when you purchase a Tracking Package
        </h2>
        <Timeline />
       </section> */}
   {/* <section id='case-studies' className='bg-dominant'>
        <CaseStudies />
       </section> */}
   {/* <section
        id='call-to-action'
        className='grid lg:grid-cols-2 gap-4 py-10 items-center justify-center '>
        <div className='space-y-4'>
         <p className='text-danger'>Let's Enhance Your Digital Presence</p>
         <h2 className='text-4xl font-semibold '>Analytics & Tracking Solutions</h2>
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
   
        <div className='bg-danger rounded-lg py-10 px-6 text-complementary divide-y divide-dominant'>
         <div className='pb-3'>
          <h3 className='text-3xl font-semibold   font-semibold '>
           Analytics Setup Package
          </h3>
          <div className='py-4 flex items-center gap-4'>
           <p className='font-semibold '>$2,000</p>
           <p className='text-xs '>Comprehensive analytics and tracking setup</p>
          </div>
         </div>
         <div className='py-4 text-sm'>
          <p className='font-semibold  pt-3 pb-4'>What's Included</p>
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
       </section> */}
   {/* <section className='pb-20'>
        <h2 className='text-4xl font-semibold  py-12 text-center'>
         What others have to say about working with Tracking Academy
        </h2>
        <TestimonialSlider />
   
        <div className='flex  lg:flex-row flex-col items-center justify-center gap-2 lg:gap-5 pt-10'>
         <BookACall />
         <Link
          href='/services/web-analytics-and-tracking'
          className='link-secondary'>
          <div className='w-full text-center'>Setup my Analytics</div>
         </Link>
        </div>
       </section> */}
   {/* /}

    {/* <section className=' py-10'>
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
       </section> */}
   {/* <section className=' pb-20'>
        <LearnMoreHeader
         headingTexts={{
          heading: "Our expertise in website tracking",
          subHeading: "We have mastered web analytics from every angle.",
         }}
        />
        <AboutDetails />
       </section> */}
   {/* <section className='bg-dominant py-20'>
        <div className='grid lg:grid-cols-2 gap-4 lg:gap-8 '>
         <div className='bg-danger rounded-lg flex flex-col justify-between text-complementary'>
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
       </section> */}
  </main>
 );
}

export default page;
