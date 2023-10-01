import React from "react";
import fs from "fs";
import path from "path";
import matter, { GrayMatterFile } from "gray-matter";
import { PostMetaData } from "@/types/index";
import extractMetaFromString from "@/components/utils/extractMetaFromString";
import BlogContainer from "@/components/blog/BlogContainer";
import getFiles from "@/components/utils/getFiles";

const blogDirectory = path.join(process.cwd(), "app/blog");

export async function generateStaticParams(): Promise<
 (PostMetaData & { id: string; slug: string })[]
> {
 const allPostsFiles = getFiles(blogDirectory);

 // remove non-mdx files
 const mdxFiles = allPostsFiles.filter((file) => path.extname(file) === ".mdx");

 const allPostsData = mdxFiles.map(async (fileName) => {
  const fileContents = fs.readFileSync(fileName, "utf8");
  const { content } = matter(fileContents) as GrayMatterFile<string>;
  const data = extractMetaFromString(content);

  const slug = path.dirname(fileName).split(path.sep).slice(-2).join("/");
  const title = path
   .basename(path.dirname(fileName))
   .replace(/-/g, " ")
   .replace(/\b\w/g, (match) => match.toUpperCase());

  return {
   id: fileName.replace(/\.mdx$/, ""),
   slug,
   title,
   ...data,
  } as PostMetaData & { id: string; slug: string };
 });

 const sortedData = (await Promise.all(allPostsData)).sort((a, b) => {
  const dateA = new Date(a.date);
  const dateB = new Date(b.date);
  return dateB.getTime() - dateA.getTime();
 });

 return sortedData;
}

export default async function Page() {
 const data = await generateStaticParams();
 return (
  <div className='flex flex-col gap-2'>
   <BlogContainer data={data} type='blog' />
  </div>
 );
}
