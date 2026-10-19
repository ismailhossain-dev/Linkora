"use server"
import { cookies } from "next/headers";

export const getPremiumNews = async ({query}: {
  query?: { [key: string]: string | string[] | undefined }
}) => {

  //========sarchbar implement=========

  //bad approch
  // const searchTerm = `${search?.searchTerm ? `?searchTerm=${search.searchTerm}` : ""}`

  //good approch js
  const params = new URLSearchParams();

  if(query && query.searchTerm){
      params.set("searchTerm", query.searchTerm as string)
  }

  console.log(params.toString(), "params")

  const cokkieStore = cookies();
  const accessToken = (await cokkieStore).get("accessToken")?.value || null;

  //   console.log("premium ", accessToken);
  const res = await fetch(`${process.env.BACKEND_API_URL}/api/premium?${params.toString()}`, {
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
