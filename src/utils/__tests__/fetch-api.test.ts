import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { fetchAPI } from "../fetch-api";

describe("fetchAPI: ", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("Should fetch data successfully ", async () => {
    const mockData = { test: "data" };

    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      headers: {
        get: vi.fn().mockReturnValue("application/json"),
      },
      json: vi.fn().mockResolvedValue(mockData),
    });

    const result = await fetchAPI("https://test.com/api", { method: "GET" });

    expect(fetch).toHaveBeenCalledWith("https://test.com/api", {
      method: "GET",
    });
    expect(result).toEqual(mockData);
  });

  it("Should throw an error when response is not ok", async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: false,
    });

    await expect(
      fetchAPI("https://test.com/api", { method: "GET" })
    ).rejects.toThrow("Failed to fetch data");
  });

  it("Should throw an error when response is not JSON", async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      headers: {
        get: vi.fn().mockReturnValue("text/html"),
      },
    });

    await expect(
      fetchAPI("https://test.com/api", { method: "GET" })
    ).rejects.toThrow("Response is not JSON");
  });

  it("Should handle fetch errors", async () => {
    global.fetch = vi.fn().mockRejectedValue(new Error("Network error"));

    await expect(
      fetchAPI("https://test.com/api", { method: "GET" })
    ).rejects.toThrow("Network error");
  });
});
