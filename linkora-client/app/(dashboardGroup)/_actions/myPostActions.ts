/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

type PostState = {
  success: true;
  statusCode: number;
  message: string;
  //data type is object where inside type is any
  data: Record<string, any>;
};
export const createPost = async (prevState: PostState, formData: FormData) => {
  const payload = {
    title: formData.get("title"),
    conent: formData.get("content"),
    thumbnail: formData.get("thumbnail"),
    tags: (formData.get("tags") as string).split(", "),
    isPremium: formData.get("isPremium") === "on",
  };

  const cokkieStore = await cookies();
  const accessToken = cokkieStore.get("accessToken")?.value;
  if (!accessToken) {
    return {
      success: false,
      message: "User not logged in ",
    };
  }

  const res = await fetch(`${process.env.BACKEND_API_URL}/api/posts/my-posts`, {
    method: "POST",
    headers: {
      Cookie: `accessToken =${accessToken}`,
      "Content-Type":"application/json"
    },
    body: JSON.stringify(payload),
  });

  const result = await res.json();

  if (result.success) {
    //when user create post then cache will be false
    revalidateTag("my-posts", "max");
  }

  //if condition is true
  if (result.success && result.data.isPremium) {
    //getPremiumNews actions cache false
    revalidateTag("premium-posts", "max");
  } else {
    //we are used in feature
    revalidateTag("public-posts", "max");
  }

  return result;
};

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
      //tags most importand for cache false we use in createPost
      tags: ["my-posts"],
    },
  });

  const result = await res.json();

  return result;
};
