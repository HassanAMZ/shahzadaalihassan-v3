"use client";
import { UserAuth } from "@/context/AuthContext";
import React, { useState, useEffect } from "react";
import ContainerLayout from "../layouts/ContainerLayout";

export const FirebaseAuth = () => {
 const { user, googleSignIn, logOut } = UserAuth();
 const [loading, setLoading] = useState(true);
 const handleSignIn = async () => {
  try {
   await googleSignIn();
  } catch (error) {
   console.log(error);
  }
 };

 const handleSignOut = async () => {
  try {
   await logOut();
  } catch (error) {
   console.log(error);
  }
 };
 useEffect(() => {
  const checkAuthentication = async () => {
   await new Promise((resolve) => setTimeout(resolve, 50));
   setLoading(false);
  };
  checkAuthentication();
 }, [user]);
 return (
  <div className='sm:bg-gray-900 sm:bg-opacity-5 sm:shadow-md rounded-md p-2'>
   {loading ? null : !user ? (
    <div className='flex flex-col items-center gap-2  h-[50vh] justify-center'>
     <p className='flex justify-center'>
      You must be logged in to view this page
     </p>
     <div className='flex flex-row items-center gap-2   justify-center'>
      <div class='px-6 sm:px-0 max-w-sm'>
       <button
        onClick={handleSignIn}
        type='button'
        className='text-white w-full  bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-between dark:focus:ring-[#4285F4]/55 mr-2 mb-2'>
        <svg
         class='mr-2 -ml-1 w-4 h-4'
         aria-hidden='true'
         focusable='false'
         data-prefix='fab'
         data-icon='google'
         role='img'
         xmlns='http://www.w3.org/2000/svg'
         viewBox='0 0 488 512'>
         <path
          fill='currentColor'
          d='M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z'></path>
        </svg>
        Sign In with Google<div></div>
       </button>
      </div>
     </div>
    </div>
   ) : (
    <div className='flex flex-col justify-center items-center h-[20vh] gap-2'>
     <p>Welcome, {user.displayName}</p>

     <button
      className='rounded-md px-3.5 py-2.5 text-sm font-semibold shadow-md'
      onClick={handleSignOut}>
      Sign out
     </button>
    </div>
   )}
  </div>
 );
};