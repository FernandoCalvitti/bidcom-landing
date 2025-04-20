import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import getHomePageData from "../get-home-page-data";
import { fetchAPI } from "../fetch-api";
import EXTERNAL_URLS from "@/constants/external-urls";
import { GetStartedResource } from "@/types/home";

vi.mock("../fetch-api", () => ({
  fetchAPI: vi.fn(),
}));

type MockedFetchAPI = ReturnType<typeof vi.fn> & typeof fetchAPI;

describe("getPageData", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("Should fetch page data successfully", async () => {
    const mockPageData: GetStartedResource = {
      title: "Get Started",
      description: "Welcome to our application",
      headline: "Get Started",
      button: {
        title: "Get Started",
        link: "/get-started",
      },
    };

    (fetchAPI as MockedFetchAPI).mockResolvedValue(mockPageData);

    const result = await getHomePageData();

    expect(fetchAPI).toHaveBeenCalledWith(EXTERNAL_URLS.GET_STARTED_URL, {
      method: "GET",
    });
    expect(result).toEqual(mockPageData);
  });

  it("Should propagate errors from fetchAPI", async () => {
    const error = new Error("Fetch failed");
    (fetchAPI as MockedFetchAPI).mockRejectedValue(error);

    await expect(getHomePageData()).rejects.toThrow("Fetch failed");
  });
});
