import Navbar from '@/components/global/navbar';
import Container from '@/components/ui/container';
import React from 'react';
import { ReactNode } from 'react';
export const metadata = {
 title: `Offer - Get 95% Accurate Tracking in 7 Days – Guaranteed!`,
 description: `Turn your data into easy-to-use insights and see your profits grow quickly`,
 openGraph: {
  images: ['/images/social-sharing.png'],
 },
};
export default function Layout({ children }: { children: ReactNode }) {
 return <React.Fragment>{children}</React.Fragment>;
}
