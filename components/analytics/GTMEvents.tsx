// sendBlogViewEvent.ts
"use client";

import { PostMetadata, PostMetadataProps } from "@/types/index";
import {
 GTMBlogViewProps,
 GTMBlogListViewEventProps,
 GTMCourseListViewEventProps,
} from "@/types/index";
import React, { useEffect } from "react";
import {
 initDataLayer,
 createItemFromBlog,
 gtmCategoriesFromBlogs,
 createItemFromCourses,
 gtmCategoriesFromCourses,
} from "utils/gtmAnalytics";

const GTMSelectBlogEvent: React.FC<{ metadata: PostMetadata }> = ({
 metadata,
}) => {
 useEffect(() => {
  initDataLayer();

  const item = createItemFromBlog(metadata);

  window.dataLayer.push({
   event: "gtm_custom_event",
   datalayer_event_name: "select_item",
   items: [item],
  });
 }, [metadata]);

 return null;
};

const GTMBlogViewEvent: React.FC<GTMBlogViewProps> = ({ metadata }) => {
 useEffect(() => {
  initDataLayer(); // Use utility function

  const item = createItemFromBlog(metadata); // Use utility function

  window.dataLayer.push({
   event: "gtm_custom_event",
   datalayer_event_name: "view_item",
   event_id: Date.now(),
   ecommerce: {
    items: [item],
   },
  });
 }, [metadata]);

 return null;
};

const GTMBlogListViewEvent: React.FC<GTMBlogListViewEventProps> = ({
 blogList,
}) => {
 useEffect(() => {
  initDataLayer();

  const items = blogList.map((blog) => createItemFromBlog(blog));

  window.dataLayer.push({
   event: "gtm_custom_event",
   datalayer_event_name: "view_item_list",
   event_id: Date.now(),
   ecommerce: {
    items,
   },
  });
 }, [blogList]);

 return null;
};
const GTMCourseListViewEvent: React.FC<GTMCourseListViewEventProps> = ({
 courseList,
}) => {
 useEffect(() => {
  initDataLayer();

  const items = courseList.map((course) => createItemFromCourses(course));

  window.dataLayer.push({
   event: "gtm_custom_event",
   datalayer_event_name: "view_item_list",
   event_id: Date.now(),
   ecommerce: {
    items,
   },
  });
 }, [courseList]);

 return null;
};

const GTMSignInFailedEvent: React.FC<{ error: any }> = ({ error }) => {
 useEffect(() => {
  initDataLayer();
  window.dataLayer.push({
   event: "gtm_custom_event",
   datalayer_event_name: "signin_failed",
   error_message: error,
  });
 }, [error]);

 return null;
};
const GTMSignInSuccessEvent: React.FC<{ user: any }> = ({ user }) => {
 useEffect(() => {
  initDataLayer();
  const userData = {
   id: user.uid || undefined,
   phone: user.providerData[0]?.phoneNumber || undefined,
   email: user.email || undefined,
   address: {
    city: undefined, // Assuming address info is not available
    state: undefined,
    country: undefined,
    postal_code: undefined,
    first_name: user.displayName ? user.displayName.split(" ")[0] : undefined,
    last_name: user.displayName ? user.displayName.split(" ")[1] : undefined,
   },
  };

  window.dataLayer.push({
   event: "gtm_custom_event",
   datalayer_event_name: "signin_successful",
   user_data: userData,
  });
 }, [user]);

 return null;
};

const GTMSignOutEvent: React.FC<{ user: any }> = ({ user }) => {
 useEffect(() => {
  initDataLayer();

  const userData = {
   id: user.uid || undefined,
   phone: user.providerData[0]?.phoneNumber || undefined,
   email: user.email || undefined,
   address: {
    city: undefined, // Assuming address info is not available
    state: undefined,
    country: undefined,
    postal_code: undefined,
    first_name: user.displayName ? user.displayName.split(" ")[0] : undefined,
    last_name: user.displayName ? user.displayName.split(" ")[1] : undefined,
   },
  };
  window.dataLayer.push({
   event: "gtm_custom_event",
   datalayer_event_name: "signout",
   user_data: userData,
  });
 }, []);

 return null; // This component doesn't render anything
};

const GTMContactFormSubmission: React.FC = () => {
 useEffect(() => {
  initDataLayer();

  window.dataLayer.push({
   event: "gtm_custom_event",
   datalayer_event_name: "contact_form_submission",
  });
 }, []);

 return null;
};
const GTMWaitlistFormSubmission: React.FC = () => {
 useEffect(() => {
  initDataLayer();

  window.dataLayer.push({
   event: "gtm_custom_event",
   datalayer_event_name: "waitlist_form_submission",
  });
 }, []);

 return null;
};

export {
 GTMContactFormSubmission,
 GTMBlogViewEvent,
 GTMWaitlistFormSubmission,
 GTMBlogListViewEvent,
 GTMCourseListViewEvent,
 GTMSelectBlogEvent,
};
