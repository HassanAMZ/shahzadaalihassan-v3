import React from 'react';
import Script from 'next/script';
export default function GoogleTagManager() {
 const isProduction = process.env.NEXT_PUBLIC_ENVIRONMENT === 'production';

 return (
  <>
   {isProduction && (
    <React.Fragment>
     <Script id='google-tag-manager' strategy='lazyOnload'>
      {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://load.road.trackingacademy.com/ztxquqcp.js?st='+i+dl+'';f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','MCKP7JK');
    `}
     </Script>
    </React.Fragment>
   )}

   <noscript
    dangerouslySetInnerHTML={{
     __html: `<iframe src="https://load.road.trackingacademy.com/ns.html?id=GTM-MCKP7JK" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
    }}
   />
  </>
 );
}
