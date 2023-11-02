import React from "react";
import { Paragraphmd, Headingxl } from "@/components/typography/Heading";

interface NotesProps {
 title: string;
 content: string;
}

const Note: React.FC<NotesProps> = ({ title, content }) => {
 return (
  <div className='py-2'>
   <div className='backgroundOverlay p-2 md:p-4 '>
    <Paragraphmd className='text-gray-900 dark:text-gray-50'>
     <strong>{title}:&nbsp; </strong>
     <span className=''>{content}</span>
    </Paragraphmd>
   </div>
  </div>
 );
};

export default Note;
