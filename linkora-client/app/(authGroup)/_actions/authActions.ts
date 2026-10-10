"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
type LoginState = {
  success: true;
  statusCode: number;
  message: string;
  data: {
    accessToken: string;
    refreshToken: string;
  };
};

//Used Mutating Data next.js docs
export const loginAction = async (
  prevState: LoginState,
  formData: FormData,
) => {
  const email = formData.get("email");
  const password = formData.get("password");

  const payload = {
    email,
    password,
  };
  const res = await fetch(`${process.env.BACKEND_API_URL}/api/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const result = await res.json();

  //Token set in browser cokkie next.js > Function > Cokkie docs
  if (result.success) {
    const cokkieStore = await cookies();
    cokkieStore.set("accessToken", result.data.accessToken, {
      httpOnly: true,
      maxAge: 60 * 60 * 24, // 1day
      sameSite: "lax",
    });
    cokkieStore.set("refreshToken", result.data.refreshToken, {
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 7, // 7day
      sameSite: "lax",
    });

    redirect("/dashboard")
  }
  return result;
};
