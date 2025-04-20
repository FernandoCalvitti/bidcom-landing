import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import getImages from "../get-images";
import { fetchAPI } from "../fetch-api";
import EXTERNAL_URLS from "@/constants/external-urls";
import { ImageResource } from "@/types/images";

vi.mock("../fetch-api", () => ({
  fetchAPI: vi.fn(),
}));

type MockedFetchAPI = ReturnType<typeof vi.fn> & typeof fetchAPI;

describe("getImages", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("Should fetch images successfully", async () => {
    const mockImages: ImageResource[] = [
      { image: "image1.jpg" },
      { image: "image2.jpg" },
    ];

    (fetchAPI as MockedFetchAPI).mockResolvedValue(mockImages);

    const result = await getImages();

    expect(fetchAPI).toHaveBeenCalledWith(EXTERNAL_URLS.IMAGES_URL, {
      method: "GET",
    });
    expect(result).toEqual(mockImages);
  });

  it("Should propagate errors from fetchAPI", async () => {
    const error = new Error("Fetch failed");
    (fetchAPI as MockedFetchAPI).mockRejectedValue(error);

    await expect(getImages()).rejects.toThrow("Fetch failed");
  });
});
