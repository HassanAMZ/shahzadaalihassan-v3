import React from "react";

const CalendlyPage = () => (
 <>
  <h3 className='text-2xl font-medium py-4'>Schedule a meeting</h3>
  <div className='backgroundOverlay relative overflow-hidden aspect-1 md:aspect-[4/3] max-w-full h-[70vh] md:h-auto'>
   <iframe
    src='https://calendly.com/shahzadaalihassan?text_color=ffffff&primary_color=333333'
    className='absolute inset-0 w-full h-full border-none'
    scrolling='no'></iframe>
  </div>
 </>
);

export default CalendlyPage;
