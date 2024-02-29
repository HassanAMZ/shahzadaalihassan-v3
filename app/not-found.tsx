import HeroComponent from "@/components/global/HeroComponent";
import ContainerLayout from "@/components/layouts/ContainerLayout";
import React from "react";

export default function NotFound() {
 return (
  <ContainerLayout>
   <HeroComponent
    textGroup={{
     welcomeText: "Lost? Let us help you.",
     heading: "404 - Page Not Found 😢",
     subHeading: {
      one: "Oops! ",
      two: "It seems the page you're looking for doesn't exist. You can return to our homepage or explore other offerings",
     },
    }}
    links={{
     primary: { src: "/", text: "Go to Homepage" },
     secondary: { src: "/courses", text: "Explore Courses" },
    }}
    images={{
     group: {
      list: [],
     },
     background: {
      desktop: "/images/hero/hero-image-md.png",
      mobile: "/images/hero/hero-image-sm.png",
     },
    }}
   />
  </ContainerLayout>
 );
}
