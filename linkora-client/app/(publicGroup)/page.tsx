import { Button } from "@/components/ui/button";
import { getMe } from "@/service/getMe";


const RootHome = async() => {
  const user = await getMe();
  console.log("user", user)
 
  return <div>HELLO NEXT.JS <Button size={"lg"}>Click Me</Button> </div>;
};

export default RootHome;
