import ServiceCard from "@/components/cards/ServiceCard";
import clientsDetails from "@/data/clients-details";
import ContainerLayout from "@/components/layouts/ContainerLayout";
import ClientCard from "@/components/cards/ClientCard";
import CustomLink from "@/components/mdx/CustomLink";
import Image from "next/image";
import React from "react";

export default function Page() {
 return (
  <section>
   <div className='grid grid-cols-2 md:grid-cols-3 gap-2'>
    {clientsDetails.map((client, index) => {
     return (
      <div key={index} className='flex gap-1 flex-col'>
       <div className='flex flex-col gap-1 backgroundOverlay !p-0'>
        <CustomLink href={`/portfolio/${client.id}`}>
         <React.Fragment>
          <div className='relative '>
           <div className='flex flex-col gap-1 max-w-xl text-center items-center justify-center'>
            <Image
             className='rounded-md bg-gray-100 aspect-square'
             width={1920}
             height={540}
             src={client.images[0].link}
             alt={client.title}
            />
           </div>
          </div>
          <p className='font-semibold sm:text-xl p-3 text-center'>
           {client.title}
          </p>
         </React.Fragment>
        </CustomLink>
       </div>
      </div>
     );
    })}
   </div>
  </section>
 );
}
