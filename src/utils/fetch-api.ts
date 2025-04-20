export const fetchAPI = async <T>(
  url: string,
  options: RequestInit
): Promise<T> => {
  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    if (!response.headers.get("content-type")?.includes("application/json")) {
      throw new Error("Response is not JSON");
    }

    const data = await response.json();
    return data as T;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
