import Navbar from "@/components/shared/Navbar";
import { getMe } from "@/service/getMe";
import { DashboardSidebar } from "./_components/DashboardSidebar";
import {
  SidebarProvider,

  SidebarTrigger,
} from "@/components/ui/sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";

const DashboardLayout = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const user = await getMe();

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar user={user} />

      <TooltipProvider>
        <SidebarProvider className="min-h-0 flex-1">
          <DashboardSidebar user={user} />

  
            {/* sidebar responsive menu */}
        
              <SidebarTrigger />

            <main className="min-w-0 flex-1 p-4 md:p-6">
              {children}
            </main>
        </SidebarProvider>
      </TooltipProvider>
    </div>
  );
};

export default DashboardLayout;