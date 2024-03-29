"use server";

import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "@/app/firebase";
import { z } from "zod";
import { Resend } from "resend";
import EmailTemplate from "@/components/emails/email-template";

export async function createContact(prevState: any, formData: FormData) {
 const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

 const contactsCollection = collection(db, "contacts");

 const schema = z.object({
  userName: z.string().min(1),
  email: z.string().min(1),
  websiteLink: z.string().min(1),
  integrationType: z.string().min(1),
  projectDescription: z.string().min(1),
  budget: z.string().min(1),
  createdAt: z.instanceof(Timestamp),
 });

 const data = schema.parse({
  userName: formData.get("userName"),
  email: formData.get("email"),
  websiteLink: formData.get("websiteLink"),
  integrationType: formData.get("integrationType"),
  projectDescription: formData.get("projectDescription"),
  budget: formData.get("budget"),
  createdAt: Timestamp.now(),
 });

 try {
  await addDoc(contactsCollection, data);

  await resend.emails.send({
   from: "support@trackingacademy.com",
   to: data.email,
   cc: ["reactjswebdev@gmail.com", "analytics@shahzadaalihassan.com"],
   subject: "Thank you for contacting us!",
   react: EmailTemplate({
    userName: data.userName,
    email: data.email,
    websiteLink: data.websiteLink,
    integrationType: data.integrationType,
    projectDescription: data.projectDescription,
    budget: data.budget,
    createdAt: data.createdAt,
   }),
  });

  return { message: `Added contact ${data.userName}` };
 } catch (e) {
  console.error("Failed to create contact or send email", e);
  return { message: "Failed to create contact" };
 }
}
