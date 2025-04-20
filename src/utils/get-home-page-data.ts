import EXTERNAL_URLS from "@/constants/external-urls";
import { fetchAPI } from "./fetch-api";
import { GetStartedResource } from "@/types/home";

export default async function getHomePageData() {
  const pageData = await fetchAPI<GetStartedResource>(
    EXTERNAL_URLS.GET_STARTED_URL,
    {
      method: "GET",
    }
  );

  return pageData;
}
