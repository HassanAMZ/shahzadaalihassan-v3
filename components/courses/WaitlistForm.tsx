"use client";
import React, { useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import HeroComponent from "../global/HeroComponent";
import { GTMCustomEvent } from "../analytics/GTMEvents";
import { createWaitlist } from "@/actions/handle-enroll-now";

const initialState = {
  message: null,
  amount: 0,
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className={`hover:bg-complementary border-dominant text-complementary mt-4 rounded-lg border-2 bg-accent px-4 py-4 text-xl font-bold transition-all duration-300 ease-in-out hover:text-accent ${
        pending ? "cursor-not-allowed opacity-50" : ""
      }`}
    >
      {pending ? "Joining..." : "Join Waitlist"}
    </button>
  );
}

export default function ContactForm() {
  const [state, formAction] = useFormState(createWaitlist, initialState);
  const [formSubmitted, setFormSubmitted] = useState(false);

  if (state?.message && !formSubmitted) {
    setFormSubmitted(true);
  }

  if (formSubmitted) {
    const formData = state?.data; // Assuming state contains form data after submission

    return (
      <>
        <HeroComponent
          textGroup={{
            welcomeText: "Thank You",
            heading: "For Submitting the Waitlist Form",
          }}
          links={{
            primary: {
              src: "/", // You can adjust the redirect link if needed
              text: "Back to Home",
            },
          }}
          images={{
            background: {
              desktop: "/images/hero/hero-image-md.png",
              mobile: "/images/hero/hero-image-sm.png",
            },
          }}
        />
        <GTMCustomEvent
          user_data={{
            email: formData.email,
            address: {
              first_name: formData.userName.split(" ")[0],
              last_name: formData.userName.split(" ")[1] || "",
            },
          }}
          event_name={"waitlist_form_submission"}
          event_details={{
            course: formData.course,
            pricing: formData.pricing,
            amount: formData.amount,
          }}
        />
      </>
    );
  }

  return (
    <React.Fragment>
      <h2 className="py-4 text-left text-2xl font-bold">Join Our Waitlist</h2>
      <p className="pb-6">
        Join our waiting list to get notified as soon as the courses are
        available.
      </p>
      <section className="w-full rounded-lg">
        <form action={formAction} className="flex flex-col space-y-3">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div className="flex flex-col">
              <label htmlFor="userName">
                <p className="text-left"> Name</p>
              </label>
              <input
                type="text"
                id="userName"
                name="userName"
                placeholder="John Doe"
                required
                className="border-dominant rounded-lg border-2 p-2"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email">
                <p className="text-left"> Email</p>
              </label>
              <input
                type="email"
                placeholder="JohnDoe@mail.com"
                id="email"
                name="email"
                required
                className="border-dominant rounded-lg border-2 p-2"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label htmlFor="course">
              <p className="text-left">What Course would like to buy?</p>
            </label>
            <input
              type="text"
              id="course"
              name="course"
              placeholder="Enter course name"
              required
              className="border-dominant rounded-lg border-2 p-2"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="pricing">
              <p className="text-left">Which Pricing Model You Prefer?</p>
            </label>
            <select
              id="pricing"
              name="pricing"
              required
              className="border-dominant rounded-lg border-2 p-2"
            >
              <option value="fixed">Fixed Price</option>
              <option value="subscription">Subscription</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label htmlFor="amount">
              <p className="text-left">
                How much You'd like to Pay for the course (USD)
              </p>
            </label>
            <input
              type="number"
              id="amount"
              name="amount"
              placeholder="Enter amount in USD"
              required
              className="border-dominant rounded-lg border-2 p-2"
            />
          </div>

          <SubmitButton />

          <p aria-live="polite" className="sr-only" role="status">
            {state?.message}
          </p>
        </form>
      </section>
    </React.Fragment>
  );
}
