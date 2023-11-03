import ContainerLayout from "@/components/layouts/ContainerLayout";
import { ReactNode } from "react";

export const metadata = {
 title: "UTM Builder tool - ShahzadaAliHassan",
 description: `helps you build UTM parameters to effectively track traffic acquistion.`,
 openGraph: {
  images: ["/images/social-sharing.png"],
 },
};
export default function Layout({ children }: { children: ReactNode }) {
 return <ContainerLayout>{children}</ContainerLayout>;
}