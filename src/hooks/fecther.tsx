export const fetcher = (url: string) => {
  return fetch(url)
    .then((res) => {
      if (process.env.NEXT_PUBLIC_RELEASE_STAGE === "dev") {
        console.log("Fetch URL: ", url);
      }

      if (!res.ok) {
        throw new Error(res.statusText);
      }

      return res.json();
    })
    .catch((error) => {
      throw new Error(error);
    });
};
