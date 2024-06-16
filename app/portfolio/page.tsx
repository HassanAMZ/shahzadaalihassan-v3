import clientsDetails from "@/data/clients-details";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import LearnMoreHeader from "@/components/global/LearnMoreHeader";

export default function Page() {
 return (
  <section>
   <LearnMoreHeader
    headingTexts={{
     heading: "Our Portfolio: 260+ Success Stories",
     subHeading:
      "From small projects to big challenges, our portfolio is a testament to our commitment to quality analytics.",
    }}
   />

   <div className='grid grid-cols-2 lg:grid-cols-3 gap-2'>
    {clientsDetails.map((client, index) => {
     return (
      <div key={index} className='flex gap-1 flex-col'>
       <div className='flex flex-col gap-1 backgroundOverlay !p-0'>
        <Link href={`/portfolio/${client.id}`}>
         <React.Fragment>
          <div className='relative'>
           <div className='flex flex-col gap-1 max-w-xl text-center items-center justify-center'>
            <Image
             className='rounded-lg bg-gray-100 '
             width={1920}
             height={540}
             src={client.images[0].link}
             alt={client.title}
            />
           </div>
          </div>
         </React.Fragment>
        </Link>
       </div>
      </div>
     );
    })}
   </div>
  </section>
 );
}
