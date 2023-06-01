import "@/styles/global.scss";
import "@/styles/tailwind.css";
import { Inter } from "next/font/google";
import NavBar from "components/Navbar";
import { ReactNode } from "react";

export const metadata = {
 title: "Shazadaalihassan",
 description: "Top rated web analytics",
};

const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({ children }: { children: ReactNode }) {
 return (
  <html lang='en'>
   <body
    className={`tracking-tighter leading-tight bg-gray-900 text-gray-100 container mx-auto ${inter.className}`}>
    <div
     className='absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'
     aria-hidden='true'>
     <div
      className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
      style={{
       clipPath:
        "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
      }}></div>
    </div>
    <NavBar />
    <div className='container mx-auto p-2'>{children}</div>
    <div
     className='absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]'
     aria-hidden='true'>
     <div
      className='relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]'
      style={{
       clipPath:
        "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
      }}></div>
    </div>
   </body>
  </html>
 );
}