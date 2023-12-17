import React from "react";
import {
 Heading3xl,
 Heading2xl,
 Headingxl,
 Paragraphsm,
 Paragraphxs,
 Heading5xl,
} from "@/components/typography/Heading";
import Link from "next/link";
import generateBrightColor from "utils/generateBrightColor";
import formatDate from "@/components/seo/formatDate";
import { SingleBlogCardProps } from "@/types/index";

const BlogCard: React.FC<SingleBlogCardProps> = ({
 post,
 type,
 isMain = false,
 className = "",
}) => {
 const renderContent = () => (
  <>
   <div
    className={`backgroundOverlay p-6 !shadow-none border-b `}
    style={{
     backgroundColor: generateBrightColor(0.15),
     position: "relative",
    }}>
    {isMain && (
     <div className='absolute top-0 right-0 bg-green-500 text-white px-2 py-1 rounded-md'>
      New
     </div>
    )}
    <Heading5xl className='line-clamp-2 !text-3xl'>{post.title}</Heading5xl>
   </div>
   <div className='textOpacity80 py-6 px-6 border-md'>
    <Paragraphsm className='line-clamp-3 text-left'>
     {post.description}
    </Paragraphsm>
    <Paragraphxs className='md:pt-6 pt-4 pb-2 text-left'>
     {formatDate(post.date)} - ShahzadaAliHassan
    </Paragraphxs>
   </div>
  </>
 );

 return (
  <React.Fragment>
   {post && (
    <div className={`shadow-md hover:animate-pulse  ${className}`}>
     <Link href={`/${type}/${post.slug}`} className=''>
      <section className='grid backgroundOverlay h-full w-full'>
       {renderContent()}
      </section>
     </Link>
    </div>
   )}
  </React.Fragment>
 );
};

export default BlogCard;
