"use client";
import { NavLinkProps } from "@/types/index";
import CustomLink from "@/components/mdx/CustomLink";
import { useSelectedLayoutSegments } from "next/navigation";
import Link from "next/link";

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
 let segment = useSelectedLayoutSegments();
 let active = href === `/${segment}`;

 return (
  <Link
   className={`${
    active ? "underline opacity-100 font-bold" : "opacity-80 font-medium"
   } hover:opacity-100 text-lg`}
   href={href}>
   {children}
  </Link>
 );
};

export default NavLink;
