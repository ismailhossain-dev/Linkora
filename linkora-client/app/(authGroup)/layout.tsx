import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  // If I apply styles here, the login & Register will work.
  return <div className=" max-w-7xl mx-auto">{children}</div>;
};

export default AuthLayout;
