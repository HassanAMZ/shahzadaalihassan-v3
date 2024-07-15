import React from "react";
import TypographyP from "../ui/typography-p";

interface NotesProps {
  title: string;
  content: string;
}

const Note: React.FC<NotesProps> = ({ title, content }) => {
  return (
    <div className="py-2">
      <div className="bg-complementary rounded-lg p-2 lg:p-4">
        <TypographyP className="text-dominant">
          <strong>{title}:&nbsp; </strong>
          <span>{content}</span>
        </TypographyP>
      </div>
    </div>
  );
};

export default Note;
