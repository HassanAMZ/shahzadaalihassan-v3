import ClientTestimonial from "@/components/home/testimonaials";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import { TypographyH3, TypographyH4 } from "@/components/ui/typography";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <main className="py-4">
      <ClientTestimonial />
      <Container>
        <Button asChild className="w-full">
          <Link href="/contact">Schedule a Meeting</Link>
        </Button>
      </Container>
    </main>
  );
}
