import { ExpertInfoProps } from "@/types/index";
import Divider from "@/components/for-businesses/Divider";
import React from "react";
import { Heading3xl } from "@/components/typography/Heading";

const ExpertInfo: React.FC<ExpertInfoProps> = ({ title, description }) => {
 return (
  <React.Fragment>
   <Heading3xl>{title}</Heading3xl>

   <div className='pt-2'>
    <Divider />
    <Divider />
   </div>
   <div className='text-left py-2'>{description}</div>
  </React.Fragment>
 );
};

export default ExpertInfo;
