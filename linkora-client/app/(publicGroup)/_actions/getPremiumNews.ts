"use server"
import { cookies } from "next/headers";

export const getPremiumNews = async ({search}: {
  search?: { [key: string]: string | string[] | undefined }
}) => {

  //========sarchbar implement=========
  const searchTerm = `${search?.searchTerm ? `?searchTerm=${search.searchTerm}` : ""}`

  const cokkieStore = cookies();
  const accessToken = (await cokkieStore).get("accessToken")?.value || null;

  //   console.log("premium ", accessToken);
  const res = await fetch(`${process.env.BACKEND_API_URL}/api/premium?searchTerm=${searchTerm}`, {
    headers: {
      // Authorization : `${accessToken}`
      //Authorization: `Bearer ${accessToken}`
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
