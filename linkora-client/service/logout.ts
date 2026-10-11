"use server";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
export const logout = async () => {
  const cokkieStore = await cookies();
  cokkieStore.delete("accessToken");
  cokkieStore.delete("refreshToken");
  revalidateTag("my-profile", "max")
};
