import { HeadingProps } from "@/types/index";
import localFont from "next/font/local";
import React, { ReactNode, CSSProperties } from "react";
const latoVariableFont = localFont({
 src: "../../app/fonts/Lato/Lato-Regular.ttf",
 display: "swap",
});
const robotoVariableFont = localFont({
 src: "../../app/fonts/Roboto/Roboto-Regular.ttf",
 display: "swap",
});
const Headingxl: React.FC<HeadingProps> = ({ children, className, style }) => {
 return (
  <h6
   className={`text-xl text-left font-semibold leading-tight py-2  ${className}`}
   style={style}>
   {children}
  </h6>
 );
};

const Heading2xl: React.FC<HeadingProps> = ({ children, className, style }) => {
 return (
  <h5
   className={`text-2xl text-left font-semibold leading-tight ${className}`}
   style={style}>
   {children}
  </h5>
 );
};

const Heading3xl: React.FC<HeadingProps> = ({ children, className, style }) => {
 return (
  <h2
   className={`text-2xl text-left font-bold leading-tight py-2  ${className}`}
   style={style}>
   {children}
  </h2>
 );
};

const Heading4xl: React.FC<HeadingProps> = ({ children, className, style }) => {
 return (
  <h3
   className={`text-4xl  font-semibold leading-none tracking-tight  ${className}`}
   style={style}>
   {children}
  </h3>
 );
};

const Heading5xl: React.FC<HeadingProps> = ({ children, className, style }) => {
 return (
  <h2
   className={`text-5xl font-bold leading-none tracking-tight ${className}`}
   style={style}>
   {children}
  </h2>
 );
};
const Heading6xl: React.FC<HeadingProps> = ({ children, className, style }) => {
 return (
  <h1
   className={`text-6xl font-black leading-none tracking-tight ${className}`}
   style={style}>
   {children}
  </h1>
 );
};

const Paragraphlg: React.FC<HeadingProps> = ({
 children,
 className,
 style,
}) => {
 return (
  <p
   className={`text-lg tracking-normal leading-relaxed ${className}`}
   style={style}>
   {children}
  </p>
 );
};

const Paragraphmd: React.FC<HeadingProps> = ({
 children,
 className,
 style,
}) => {
 return (
  <p className={`text-md   ${className}`} style={style}>
   {children}
  </p>
 );
};

const Paragraphsm: React.FC<HeadingProps> = ({
 children,
 className,
 style,
}) => {
 return (
  <p className={`text-sm   ${className}`} style={style}>
   {children}
  </p>
 );
};
const Paragraphxs: React.FC<HeadingProps> = ({
 children,
 className,
 style,
}) => {
 return (
  <p className={`text-xs  ${className}`} style={style}>
   {children}
  </p>
 );
};
const ListItem: React.FC<HeadingProps> = ({ children, className, style }) => {
 return (
  <li
   className={`px-1 text-lg tracking-normal leading-relaxed ${className}`}
   style={style}>
   {children}
  </li>
 );
};
const OrderedList: React.FC<HeadingProps> = ({
 children,
 className,
 style,
}) => {
 return (
  <ol
   className={`list-decimal list-outside pl-6 py-1 ${className}`}
   style={style}>
   {children}
  </ol>
 );
};
const UnorderedList: React.FC<HeadingProps> = ({
 children,
 className,
 style,
}) => {
 return (
  <ul
   className={` list-disc list-outside pl-6 py-1 ${className}`}
   style={style}>
   {children}
  </ul>
 );
};

export {
 Heading6xl,
 Heading5xl,
 OrderedList,
 UnorderedList,
 Heading4xl,
 Heading3xl,
 Heading2xl,
 Headingxl,
 Paragraphlg,
 Paragraphmd,
 Paragraphsm,
 Paragraphxs,
 ListItem,
};
