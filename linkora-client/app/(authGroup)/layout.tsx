import Navbar from "@/components/shared/Navbar";
import { getMe } from "@/service/getMe";
import React from "react";

const AuthLayout = async ({ children }: { children: React.ReactNode }) => {
  // If I apply styles here, the login & Register will work.
  const user = await getMe();
  return (
    <div>
      <Navbar user={user} />
      <div className="max-w-7xl mx-auto">{children}</div>
    </div>
  );
};

export default AuthLayout;
