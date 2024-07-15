"use client";
import React, { useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import TypographyH2 from "../ui/typography-h2";
import SingleBlogCard from "./single-card";
import { PostMetadata } from "@/types/index";

interface BlogPaginationProps {
  sortedData: PostMetadata[];
}

const BlogPagination: React.FC<BlogPaginationProps> = ({ sortedData }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const postsPerPage = 9;

  sortedData = sortedData
    .filter((blog) => blog.draft === false)
    .sort((a, b) => b.blogId - a.blogId);

  const pageCount = Math.ceil(sortedData.length / postsPerPage);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const indexOfLastPost = (currentPage + 1) * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = sortedData.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <>
      <TypographyH2>Latest Posts</TypographyH2>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
        {currentPosts.map((post, index) => (
          <React.Fragment key={index}>
            <SingleBlogCard post={post} type={"blog"} />
          </React.Fragment>
        ))}
      </div>

      {pageCount > 1 && (
        <Pagination>
          <PaginationContent className="flex-wrap items-center justify-center">
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handlePageChange(currentPage - 1);
                }}
              />
            </PaginationItem>
            {Array.from({ length: pageCount }, (_, i) => i).map((i) => (
              <PaginationItem key={i}>
                <PaginationLink
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handlePageChange(i);
                  }}
                  isActive={i === currentPage}
                >
                  {i + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handlePageChange(currentPage + 1);
                }}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </>
  );
};

export default BlogPagination;
