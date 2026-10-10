import { Button } from "@/components/ui/button";
import React from "react";

const RootHome = () => {
  console.log(process.env.NEXT_PUBLIC_BACKEND_API_URL, "Sensative")
  console.log(process.env.BACKEND_API_URL, "Public")
  return <div>HELLO NEXT.JS <Button size={"lg"}>Click Me</Button> </div>;
};

export default RootHome;
