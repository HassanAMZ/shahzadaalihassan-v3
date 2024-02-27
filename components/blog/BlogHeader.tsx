"use client";

import React from "react";
import { PostMetadataProps } from "@/types/index";
import formatDate from "@/components/seo/formatDate";
import generateSchema from "@/components/seo/generateSchema";
import Script from "next/script";
import { GTMBlogViewEvent } from "@/components/analytics/GTMEvents";
import BreadCrumbs from "./BreadCrumbs";
import Image from "next/image";

const BlogHeader: React.FC<PostMetadataProps> = ({ metadata }) => {
 const schema = generateSchema(metadata);
 const backgroundImage = metadata.openGraph.images[0]; // Assuming the first image is the background image

 return (
  <section className='pb-2'>
   <GTMBlogViewEvent metadata={metadata} />
   <BreadCrumbs />
   <Script
    id='blog-schema'
    type='application/ld+json'
    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
   />
   <div className='rounded-lg'>
    <h1 className='py-2 title-primary text-dominant transition duration-500 hover:text-accent'>
     {metadata.title}
    </h1>
    <p className='paragraph-secondary'>
     by ShahzadaAliHassan - {formatDate(metadata.date)}
    </p>
   </div>
   <Image
    src={backgroundImage}
    alt={"blog image"}
    width={1920}
    height={1080}
    className='rounded-lg'
   />
  </section>
 );
};

export default BlogHeader;
