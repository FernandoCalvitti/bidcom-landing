import Contact from "@/ui/sections/contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with us",
};

export default function ContactPage() {
  return <Contact />;
}
