import { cookies } from "next/headers";

export const getPremiumNews = async () => {
  const cokkieStore = cookies();
  const accessToken = (await cokkieStore).get("accessToken")?.value || null;

  //   console.log("premium ", accessToken);
  const res = await fetch(`${process.env.BACKEND_API_URL}/api/premium`, {
    headers: {
      Cookie: `accessToken=${accessToken}`,
    },
    cache: "force-cache",
    next: {
      revalidate: 60 * 60 * 6, //6 hours
      tags: ["premium-posts"],
    },
  });

  const result = await res.json();

  return result;
};
