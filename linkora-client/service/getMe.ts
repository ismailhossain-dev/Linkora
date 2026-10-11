import { cookies } from "next/headers";
export const getMe = async () => {
  const cokkieStore = await cookies();
  //taking token from browser
  const accessToken = await cokkieStore.get("accessToken")?.value;

  if (!accessToken) {
    return {
      success: false,
      message: "User not logged in!",
    };
  }

  const res = await fetch(`${process.env.BACKEND_API_URL}/api/users/me`, {
    //send token
    headers: {
      Authorization: `${accessToken}`,
      // Cokkie: `accessToken=${accessToken}`,
    },
    //user 1 day caching next.js > Functions > fetch
    //profile caching 1 day because accessToken expire after 1 day
    cache: "force-cache",
    next: {
      revalidate: 60 * 60 * 24 ,//1 day
      tags: ["my-profile"]
    }

  });

  const result = await res.json();
  //console.log(result);
  return result;
};
