import getImages from "@/utils/get-images";
import getHomePageData from "@/utils/get-home-page-data";
import Hero from "@/ui/sections/hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Landing Page",
  description: "Landing Page with a carousel of images",
};

export default async function Home() {
  const pageData = await getHomePageData();
  const images = await getImages();

  return <Hero images={images} pageData={pageData} />;
}
