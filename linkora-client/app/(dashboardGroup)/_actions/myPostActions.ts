"use server";
import { cookies } from "next/headers";

export const getMyPost = async () => {
  const cokkieStore = await cookies();

  const accessToken = cokkieStore.get("accessToken")?.value || null;

  if (!accessToken) {
    return {
      success: false,
      message: "User not logged in.",
    };
  }

  const res = await fetch(`${process.env.BACKEND_API_URL}/api/posts/my-posts`, {
    headers: {
      Cookie: `accessToken =${accessToken}`,
    },
    cache: "force-cache",
    next: {
      revalidate: 60 * 60 * 24, //1 day
      tags: ["my-posts"],
    },
  });

  const result = await res.json();

  return result;
};
