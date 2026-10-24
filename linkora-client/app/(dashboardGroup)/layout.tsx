import Navbar from "@/components/shared/Navbar";
import { getMe } from "@/service/getMe";
import { DashboardSidebar } from "./_components/DashboardSidebar";
import {
  SidebarProvider,
  SidebarInset,
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
          <DashboardSidebar />

          <SidebarInset className="min-w-0">
            <header className="flex h-14 shrink-0 items-center gap-3 border-b px-4">
              <SidebarTrigger />
              <h1 className="text-sm font-semibold">
                Dashboard
              </h1>
            </header>

            <main className="min-w-0 flex-1 p-4 md:p-6">
              {children}
            </main>
          </SidebarInset>
        </SidebarProvider>
      </TooltipProvider>
    </div>
  );
};

export default DashboardLayout;