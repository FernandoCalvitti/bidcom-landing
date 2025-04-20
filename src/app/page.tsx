import getImages from "@/utils/get-images";
import getHomePageData from "@/utils/get-home-page-data";
import Hero from "@/ui/sections/hero";

export default async function Home() {
  const pageData = await getHomePageData();
  const images = await getImages();

  return <Hero images={images} pageData={pageData} />;
}
