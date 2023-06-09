import "@/styles/global.scss";
import "@/styles/tailwind.css";
import localFont from "next/font/local";
import NavBar from "@/components/navbar/Navbar";
import { ReactNode } from "react";

export const metadata = {
 title: "Shazadaalihassan",
 description: "Top rated web analytics",
};

const myFont = localFont({
 src: "fonts/Inter/static/Inter-Regular.ttf",
 display: "swap",
});

const BgPolygon1 = (
 <div
  className='fixed inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80 animate-moving1'
  aria-hidden='true'>
  <div
   className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
   style={{
    clipPath:
     "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
   }}></div>
 </div>
);

const BgPolygon2 = (
 <div
  className='fixed inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)] animate-moving2'
  aria-hidden='true'>
  <div
   className='relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]'
   style={{
    clipPath:
     "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
   }}></div>
 </div>
);

export default function RootLayout({ children }: { children: ReactNode }) {
 return (
  <html lang='en'>
   <body
    className={`tracking-tighter leading-tight bg-gray-900 text-gray-100  ${myFont.className}`}>
    {BgPolygon1}
    <NavBar />
    <div className=''>{children}</div>
    {BgPolygon2}
   </body>
  </html>
 );
}
