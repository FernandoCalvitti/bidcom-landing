import GetStarted from "@/ui/sections/get-started";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Started",
  description: "General information",
};

export default async function GetStartedPage() {
  return <GetStarted />;
}
