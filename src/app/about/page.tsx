import About from "@/ui/sections/about";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Information about me",
};

export default function AboutPage() {
  return <About />;
}
