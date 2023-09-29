import "@/styles/global.scss";
import "@/styles/tailwind.css";
import localFont from "next/font/local";
import NavBar from "@/components/navbar/Navbar";
import { ReactNode } from "react";
import { AuthContextProvider } from "@/context/AuthContext";
import { PaypalContext } from "@/context/PaypalContext";

const interVariableFont = localFont({
 src: "fonts/Inter/inter-font.ttf",
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
    className={`bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white tracking-tighter max-w-4xl mx-auto text-base leading-tight ${interVariableFont.className}`}>
    {BgPolygon1}
    <NavBar />
    <PaypalContext>
     <AuthContextProvider>{children}</AuthContextProvider>
    </PaypalContext>
    {BgPolygon2}
   </body>
  </html>
 );
}
