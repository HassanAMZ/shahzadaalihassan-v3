"use client";
// types/index.ts or types/clientTypes.ts
import {
 DetailedHTMLProps,
 HTMLAttributes,
 FC,
 useRef,
 useState,
 ReactNode,
} from "react";

export type ServiceCardProps = {
 service: ServiceDetails;
};
export type ClientCardProps = {
 client: Client;
};
export type AvatarCardProps = {
 avatar: Avatar;
};
export type TestimonialCardProps = {
 testimonial: Testimonial;
};
export type DynamicPortfolioPageProps = {
 params: {
  portfolio: string;
 };
};
export type ServiceDetails = {
 id: string;
 title: string;
 description: string;
 packages: {
  name: string;
  value: string[];
 }[];
 featured_image_url: string;
 supporting_image_url: string;
 href: string;
};

export type DynamicServicesPageProps = {
 params: {
  service: string;
 };
};
export interface ClientDetails {
 heading: string;
 description: string;
}

export interface Avatar {
 id: string;
 name: string;
 title: string;
 description: string;
 images: { name: string; link: string }[];
}

export interface Testimonial {
 id: string;
 name: string;
 title: string;
 testimonial_details: string;
 images: { name: string; link: string }[];
}
export interface Client {
 id: string;
 title: string;
 tags: string[];
 details: ClientDetails[];
 images: { name: string; link: string }[];
 project_details: { heading: string; title: string; link: string }[];
}
export interface PostMetaData {
 title: string;
 date: string;
 blogID: string;
 tags: string[];
 draft: boolean;
 description: string;
 images: string[];
 embedId: string;
}

export interface BlogCardProps {
 postId: string;
 slug: string;
 cta: string;
 excerpt: string;
 title: string;
 url: string;
 date: string;
 category: string;
 featuredImage?: string; // Making it optional as we are assigning a default value
}

export interface ContainerLayoutProps {
 children: ReactNode;
 className?: string; // Optional className prop
}

export interface PreProps
 extends DetailedHTMLProps<HTMLAttributes<HTMLPreElement>, HTMLPreElement> {}

export interface YoutubeEmbedProps {
 embedId: string;
}

export interface NavLinkProps {
 href: string;
 children: React.ReactNode;
}

export type ImageProps = {
 link: string;
 name: string;
 clientId: string;
};

export type ImageSliderProps = {
 images: ImageProps[];
};

export type ImageType = {
 clientId: string;
 link: string;
 name: string;
};

export interface ExpertInfoProps {
 title: string;
 description: JSX.Element; // Modify this line
}