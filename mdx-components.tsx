import type { MDXComponents } from "mdx/types";
import Pre from "@/components/mdx/Pre";
import YoutubeEmbed from "@/components/global/youtube-embed";
import BlogHeader from "@/components/blog/header";
import CustomLink from "@/components/mdx/CustomLink";
import Note from "@/components/mdx/Note";
import GiscusComments from "@/components/mdx/GiscusComents";
import AuthPre from "@/components/mdx/AuthPre";
import DataLayerCode from "@/components/dataLayer/DataLayerCode";
import AuthenticatedLayout from "@/components/layouts/AuthenticatedLayout";
import Image from "next/image";
import ToolsHeroSection from "@/components/tools/ToolsHeroSection";
import Text from "@/components/ui/text";
import { cn } from "./lib/utils";
export function useMDXComponents(components: MDXComponents): MDXComponents {
  const createId = (content: string) =>
    content.replace(/\s+/g, "-").toLowerCase();

  return {
    ToolsHeroSection,
    GiscusComments,
    YoutubeEmbed,
    DataLayerCode,
    BlogHeader,
    Note,
    AuthPre,
    AuthenticatedLayout,
    CustomLink,
    pre: AuthPre,
    a: (props) => <CustomLink {...props} href={props.href || ""} />, // Ensuring href is always a string
    p: (props) => (
      <Text as="p" {...props}>
        {props.children}
      </Text>
    ),
    h1: (props) => (
      <Text
        as="h1"
        variant="heading3xl"
        {...props}
        id={createId(props.children as string)}
      >
        {props.children}
      </Text>
    ),
    h2: (props) => (
      <Text
        as="h2"
        variant="heading2xl"
        {...props}
        id={createId(props.children as string)}
      >
        {props.children}
      </Text>
    ),
    h3: (props) => (
      <Text
        as="h3"
        variant="headingXl"
        {...props}
        id={createId(props.children as string)}
      >
        {props.children}
      </Text>
    ),
    h4: (props) => (
      <Text
        as="h4"
        variant="headingLg"
        {...props}
        id={createId(props.children as string)}
      >
        {props.children}
      </Text>
    ),
    h5: (props) => (
      <Text
        as="h4"
        variant="headingLg"
        {...props}
        id={createId(props.children as string)}
      >
        {props.children}
      </Text>
    ),
    h6: (props) => (
      <Text
        as="h4"
        variant="headingLg"
        {...props}
        id={createId(props.children as string)}
      >
        {props.children}
      </Text>
    ),
    li: (props) => (
      <Text as="li" {...props}>
        {props.children}
      </Text>
    ),
    ol: (props) => (
      <Text as="ol" {...props}>
        {props.children}
      </Text>
    ),
    ul: (props) => (
      <Text as="ul" {...props}>
        {props.children}
      </Text>
    ),
    img: (props) => (
      // @ts-ignore
      <Image src={props.src} width={1920} height={1080} {...props} />
    ),
    ...components,
  };
}
