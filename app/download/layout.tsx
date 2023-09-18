"use client";

import BlogLayout from "@/layouts/BlogLayout";
import { ReactNode } from "react";
import React, { useEffect, useState } from "react";
import { UserAuth } from "@/context/AuthContext";
import { FirebaseAuth } from "@/components/cards/FirebaseAuth";

export default function Layout({ children }: { children: ReactNode }) {
 const { user } = UserAuth();
 const [loading, setLoading] = useState(true);

 useEffect(() => {
  const checkAuthentication = async () => {
   await new Promise((resolve) => setTimeout(resolve, 50));
   setLoading(false);
  };
  checkAuthentication();
 }, [user]);

 return (
  <BlogLayout>
   {loading ? (
    <h3>Page is Loading</h3>
   ) : user ? (
    <div>
     <FirebaseAuth />
     <React.Fragment>{children}</React.Fragment>
    </div>
   ) : (
    <React.Fragment>
     <FirebaseAuth />
    </React.Fragment>
   )}
  </BlogLayout>
 );
}
