import { ReactNode, FC } from "react";
import { BlogLayoutProps } from "@/types/index";
import ContainerLayout from "../layouts/ContainerLayout";
import Link from "next/link";
import GiscusComments from "../mdx/GiscusComents";
import {
 Heading2xl,
 Headingxl,
 Paragraphmd,
 Paragraphsm,
} from "../typography/Heading";
import React from "react";
import getBlogsData from "@/utils/getBlogsData";

const BlogLayout: FC<BlogLayoutProps> = async ({
 children,
 className,
 metadata,
}) => {
 let allPostsData = await getBlogsData("app/blog");

 const shuffledPosts = allPostsData.sort(() => 0.5 - Math.random());
 const randomPosts = shuffledPosts.slice(0, 4);
 return (
  <ContainerLayout className={`text-left ${className || ""}`}>
   {metadata && (
    <div className='blog-metadata'>
     <h1>{metadata.title}</h1>
     <span>{metadata.date}</span>
    </div>
   )}
   <main>{children}</main>

   <GiscusComments />

   <div className='pt-4'>
    <h4 className='title-tertiary'>Other Related Blogs</h4>
    <div className='mt-4 grid grid-cols-1 lg:grid-cols-2 gap-2'>
     {randomPosts.map((blog) => (
      <Link
       key={blog.blogId}
       className='backgroundOverlay p-4 border '
       href={`/blog/${blog.slug}`}>
       <Headingxl>{blog.title}</Headingxl>
       <Paragraphsm className='line-clamp-2 text-opacity-75'>
        {blog.description}
       </Paragraphsm>
      </Link>
     ))}
    </div>
   </div>
  </ContainerLayout>
 );
};

export default BlogLayout;
