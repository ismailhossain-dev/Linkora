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
  });

  const result = await res.json();
  console.log(result);
  return result;
};
