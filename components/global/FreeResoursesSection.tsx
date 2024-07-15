"use client";

import React, { useState } from "react";
import Image from "next/image";
import { HeadingTextsProps, LinksGroupProps } from "@/types/index";
import { Heading4xl, Paragraphlg } from "@/components/typography/Heading";
import { ImageGeneralProps } from "@/types/index";
import Link from "next/link";

const FreeResoursesSection: React.FC<
  ImageGeneralProps & { headingTexts: HeadingTextsProps } & {
    links: LinksGroupProps;
  } & { order?: string }
> = ({ image, headingTexts, links, order }) => {
  return (
    <React.Fragment>
      <div className="bg-dominant text-complementary">
        <div className="flex flex-col gap-5 lg:grid lg:grid-cols-4 lg:py-0">
          <div className={`flex w-full lg:col-span-1 ${order} `}>
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className="lg:w-full"
            />
          </div>
          <div
            className={`items-left flex flex-col justify-center gap-3 px-4 py-8 lg:col-span-3`}
          >
            <Heading4xl>{headingTexts.heading}</Heading4xl>
            <Paragraphlg className="textOpacity80">
              {headingTexts.subHeading}
            </Paragraphlg>
            <div className="w-full rounded-lg border-2 border-white p-2 text-center font-semibold">
              <Link href={links.primary.src}>{links.primary.text}</Link>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default FreeResoursesSection;
