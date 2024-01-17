"use client";

export interface GTMEvent {
 event: string;
 datalayer_event_name: string;
 event_id?: number;
 [key: string]: any;
}
export interface GTMBlogListViewEventProps {
 blogList: PostMetadata[];
}
export interface GTMCourseListViewEventProps {
 courseList: CourseMetadata[];
}
declare global {
 interface Window {
  dataLayer: GTMEvent[];
 }
}
export interface UTMParams {
 websiteURL: string;
 campaignSource: string;
 campaignMedium: string;
 campaignName: string;
 campaignID: string;
 campaignTerm: string;
 campaignContent: string;
 selectedMode: "manual" | "facebook" | "pinterest" | "google" | "tiktok";
}

export interface GTMBlogViewProps {
 metadata: PostMetadata;
}

// types/index.ts or types/clientTypes.ts
import {
 DetailedHTMLProps,
 HTMLAttributes,
 FC,
 useRef,
 useState,
 ReactNode,
 ChangeEvent,
} from "react";

export interface ServiceCardProps {
 service: ServiceDetails;
}
export interface ClientCardProps {
 client: Client;
}
export interface AvatarCardProps {
 avatar: Avatar;
}

export interface DynamicPortfolioPageProps {
 params: {
  portfolio: string;
 };
}
export interface ServiceDetails {
 id: string;
 title: string;
 description: string;
 packages: {
  name: string;
  value: string;
 }[];
 featured_image_url: string;
 supporting_image_url: string;
 href: string;
}

export interface DynamicServicesPageProps {
 params: {
  service: string;
 };
}
export interface BlogSearchProps {
 data: PostMetadata[];
 onSearch: (filtered: PostMetadata[]) => void;
}
export interface CourseSearchProps {
 data: CourseMetadata[];
 onSearch: (filtered: CourseMetadata[]) => void;
}
export interface BlogContentProps {
 data: PostMetadata[];
 rawData?: PostMetadata[];
 type: string;
}
export interface CourseContentProps {
 data: CourseMetadata[];
 rawData?: CourseMetadata[];
 type: string;
}
export interface BlogContainerProps {
 data: PostMetadata[];
 rawData?: PostMetadata[];
 type: string;
}
export interface CourseContainerProps {
 data: CourseMetadata[];
 rawData?: CourseMetadata[];
 type: string;
}
export interface TestimonialDetails {
 testimonial: string;
 project_title: string;
}

export interface Avatar {
 id: string;
 name: string;
 title: string;
 description: string;
 images: { name: string; link: string }[];
}
export interface DetailsProps {
 detailsList: Detail[];
}
export interface Client {
 id: string;
 title: string;
 business_details: {
  email: string;
  phone: string;
  name: string;
  link: string;
 };
 client_details: { name: string; email: string; position: string }[];
 tags: string[];
 project_description: { heading: string; description: string }[];
 testimonial_details: TestimonialDetails[];
 images: { name: string; link: string }[];
 project_details: { heading: string; title: string; link: string }[];
}
export interface TestimonialCardProps {
 person: {
  image: ImageData;
  testimonial: string;
  name: string;
  position: string;
 };
 className?: string;
}
export interface PostMetadata {
 title: string;
 date: string;
 blogId: string;
 tags: string[];
 draft: boolean;
 description: string;
 openGraph: { images: string[] };
 embedId: string;
 id?: string;
 slug?: string;
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
 id?: string; // Optional className prop
}

export interface BlogLayoutProps {
 children: ReactNode;
 className?: string;
 metadata?: PostMetadata; // Optional metadata prop
}

export type PreProps = React.DetailedHTMLProps<
 React.HTMLAttributes<HTMLPreElement>,
 HTMLPreElement
> & {
 language?: string;
};

export interface YoutubeEmbedProps {
 embedId: string;
}

export interface NavLinkProps {
 href: string;
 children: React.ReactNode;
 className?: string;
}

export interface ImageProps {
 link: string;
 name: string;
 clientId: string;
}

export interface ImageSliderProps {
 images: ImageProps[];
}

export interface ImageType {
 clientId: string;
 link: string;
 name: string;
}

export interface ExpertInfoProps {
 title: string;
 description: JSX.Element;
}

export interface PostMetadataProps {
 metadata: PostMetadata;
}
export interface CourseMetadataProps {
 metadata: CourseMetadata;
}
export interface InfoSectionProps extends ExpertInfoProps {
 embedId?: string;
 testimonial?: string;
 className?: string;
 id?: string;
 flexDirection?: string;
 backgroundOverlay?: boolean;
}

export interface OpenGraph {
 images: string[];
}

export interface TagContainerProps {
 tags: string[];
 type: string;
 blogsData: PostMetadata[]; // New addition
}

export interface TagSearchProps {
 tags: string[];
 onSearch: (filtered: string[]) => void;
}

export interface TagContentProps {
 tags: string[];
 type: string;
 blogsData: PostMetadata[];
}
export interface Detail {
 icon?: string;
 header: string;
 details: string;
}

export interface Link {
 src: string;
 text: string;
}

export interface ImagesProps {
 src: string;
 alt: string;
}

export interface ColorDetails {
 primary: string;
}

export interface TextGroup {
 welcomeText?: string;
 heading?: string;
 subHeading?: { one: string; two: string };
 learnMore?: HeadingTextsProps;
}
export interface LinksGroupProps {
 primary: Link;
 secondary?: Link;
}

export interface HeroProps {
 textGroup: TextGroup;
 links: LinksGroupProps;
 images: {
  group?: {
   list: ImagesProps[];
  };
  background?: {
   desktop?: string;
   mobile?: string;
  };
 };
 colorDetails: ColorDetailsExtended;
}

export interface ColorDetailsExtended extends ColorDetails {
 light: { value: number; opacity?: number };
 dark: { value: number; opacity?: number };
}

export interface ImageData extends ImagesProps {
 width: number;
 height: number;
}
export interface ImageGeneralProps {
 image: ImageData;
}

export interface SingleGridContentProps {
 imagesData?: ImageData;
 headingTexts: HeadingTextsProps;
 paragraphTexts: ParagraphTextsProps;
}
export interface SingleBlogCardProps {
 post: PostMetadata;
 type: string;
 isMain?: boolean;
 className?: string;
}

export interface SingleCourseCardProps {
 course: CourseMetadata;
 type: string;
 isMain?: boolean;
 className?: string;
}

export interface CourseMetadata {
 title: string;
 date: string;
 courseId: string;
 tags: string[];
 draft: boolean;
 openGraph: {
  images: string[];
 };
 price: number;
 currency: {
  symbol: string;
  type: string;
 };
 description: string;
 embedId: string;
 id?: string;
 slug?: string;
}
export interface TwoGridContentProps {
 learnMoreHeader: string;
 detailsList: Detail[];
 primaryLink: Link;
 imagesData: ImageData;
 colorDetails: ColorDetails;
 order: number; // For grid order
}
export interface HeadingTextsProps {
 heading: string;
 subHeading?: string;
}
export interface ParagraphTextsProps {
 primary?: string;
 secondary?: string;
}

export interface LearnMoreHeaderProps {
 headingTexts: HeadingTextsProps;
 colorDetails: ColorDetails;
}
export interface WhyUsProps {
 headingTexts: HeadingTextsProps;
 paragraphTexts: ParagraphTextsProps;
 colorDetails: ColorDetails;
 links: LinksGroupProps;
}
export interface StartHereSectionProps {
 colorDetails: ColorDetails;
}
export interface Color {
 primary: string;
}
export interface BaseColors {
 service: Color;
 aboutUs: Color;
 home: Color;
 forBusinesses: Color;
 [key: string]: Color;
}

export interface InputFieldProps {
 label: string;
 value: string;
 onChange: (value: string) => void;
 type?: string;
 required?: boolean;
}

export interface UTMOutputProps {
 utmLink: string;
 canGenerate: boolean;
 errorMessages: string[];
 onCopy: () => void;
}

export interface TextFieldProps {
 label: string; // Label is now optional
 value: string;
 readOnly?: boolean;
 rows?: number;
 canGenerate: boolean; // New prop to handle conditional styling
}

export type IsWebsiteURLValid = (url: string) => boolean;
export type CopyToClipboard = () => void;
export type GetErrorMessages = () => string[];
export type GenerateUTM = () => string;
export type CanGenerateUTM = () => boolean;

export type ButtonData = {
 id: number;
 text: string;
};

export type ButtonProps = {
 children: React.ReactNode;
 isSelected: boolean;
 color: string;
 onClick: () => void;
};

export interface HeadingProps {
 children?: React.ReactNode;
 id?: React.ReactNode;
 className?: string;
 style?: React.CSSProperties;
}

export type VideoDetails = {
 channelThumbnailUrl: string | undefined;
 id: string;
 snippet: {
  publishedAt: string;
  title: string;
  description: string;
  thumbnails: {
   default: any;
   medium: {
    url: string;
   };
  };
 };
 statistics: {
  viewCount: string;
  likeCount: string;
 };
};

export type VideoUrl = string;
export interface YoutubdeVideoProps {
 videoUrl: string;
 details?: VideoDetails;
}

export type YouTubeApiResponse = {
 items: {
  id: string;
  snippet?: {
   title: string;
   description: string;
   thumbnails: {
    default: {
     url: string;
    };
   };
  };
  statistics?: {
   viewCount: string;
   likeCount: string;
   dislikeCount: string;
  };
 }[];
};

export type FetchTrendingVideosParams = {
 setErrorMessage: (message: string) => void;
};

export interface VideoUrlInputProps {
 videoInput: string;
 setVideoInput: React.Dispatch<React.SetStateAction<string>>;
 addVideo: () => void;
 errorMessage: string;
}

export type FetchVideosDetailsParams = {
 videoIds: string[]; // Array of strings for the video IDs
 setErrorMessage: (message: string) => void; // Function to set the error message
};

export type SetStateFunction<T> = React.Dispatch<React.SetStateAction<T>>;

export interface AddVideoParams {
 videoInput: string;
 setAddedVideos: SetStateFunction<VideoUrl[]>;
 setVideos: SetStateFunction<VideoUrl[]>;
 setErrorMessage: SetStateFunction<string>;
 insertRandomly: (
  existingItems: VideoUrl[],
  newItems: VideoUrl[]
 ) => VideoUrl[];
}
