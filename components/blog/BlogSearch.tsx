"use client";

import React, { useState, useEffect } from "react";
import { PostMetadata } from "@/types/index";
import { BlogSearchProps } from "@/types/index";
import {
 Heading6xl,
 Paragraphlg,
 Paragraphsm,
} from "@/components/typography/Heading";
import { usePathname } from "next/navigation";
import { useParams } from "next/navigation";

const BlogSearch: React.FC<BlogSearchProps> = ({ data, onSearch }) => {
 const [searchTerm, setSearchTerm] = useState("");
 const [results, setResults] = useState<PostMetadata[]>(data);
 useEffect(() => {
  const searchWords = searchTerm
   .toLowerCase()
   .split(" ")
   .filter((word) => word);
  const filtered = data.filter((post) => {
   const matchesSearchTerm = searchWords.every(
    (word) =>
     post.title.toLowerCase().includes(word) ||
     post.description.toLowerCase().includes(word) ||
     post.tags.some((tag) => tag.toLowerCase().includes(word))
   );

   return matchesSearchTerm;
  });

  setResults(filtered);
  onSearch(filtered);
 }, [searchTerm]);

 const formatText = (text?: string) => {
  if (text) {
   return text.replace(/-/g, " ");
  }
  return "";
 };

 const pathname = usePathname();
 const isRootBlogPage = pathname === "/blog";
 const params = useParams<{ blog?: string; tag?: string }>();
 const displayText = formatText(params.blog || params.tag);

 return (
  <div className='flex flex-col pt-6 pb-1 sm:py-12 items-left sm:items-center sm:text-center justify-center w-full gap-4'>
   <Heading6xl className='!text-4xl sm:!text-6xl'>
    {!isRootBlogPage && displayText && (
     <span className='capitalize'>{displayText} - </span>
    )}
    Articles, Ideas and Inspiration!{" "}
   </Heading6xl>
   <Paragraphsm className='sm:w-2/3 w-full'>
    A helpful blog for web analysts, trying to make sense of marketing with{" "}
    {!isRootBlogPage && displayText && (
     <span className='capitalize'>{displayText}, </span>
    )}
    tag manager, analytics and tracking scripts.
   </Paragraphsm>
   {isRootBlogPage && (
    <div className='border relative flex sm:w-2/3 w-full items-center h-10 rounded-full focus-within:shadow-lg bg-dark-primary  overflow-hidden'>
     <div className='grid place-items-center h-full w-12 text-gray-300'>
      <svg
       xmlns='http://www.w3.org/2000/svg'
       className='h-6 w-6'
       fill='none'
       viewBox='0 0 24 24'
       stroke='currentColor'>
       <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
       />
      </svg>
     </div>
     <input
      type='text'
      placeholder='Search for a post...'
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className='p-1 rounded-full text-white bg-transparent peer h-full w-full outline-none text-sm  pr-2'
     />
    </div>
   )}
   {results.length === 0 && (
    <div className='flex flex-col items-center mt-6'>
     <span role='img' aria-label='Thinking face' style={{ fontSize: "3rem" }}>
      😭
     </span>
     <Paragraphlg className='mt-4  text-gray-300'>
      We couldn't find any posts matching your search '{searchTerm}'.
      <span role='img' aria-label='Shrug'>
       {" "}
       🤷‍♂️
      </span>
     </Paragraphlg>
    </div>
   )}
  </div>
 );
};

export default BlogSearch;
