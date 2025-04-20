import EXTERNAL_URLS from "@/constants/external-urls";
import { fetchAPI } from "./fetch-api";
import { ImageResource } from "@/types/images";

export default async function getImages() {
  const images = await fetchAPI<ImageResource[]>(EXTERNAL_URLS.IMAGES_URL, {
    method: "GET",
  });

  return images;
}
