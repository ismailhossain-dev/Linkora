import { ISidebarMenu } from "@/lib/types";
import { FileText, LayoutDashboard } from "lucide-react";
export const ADMIN_SITEBAR_ITEMS:ISidebarMenu[] = [
  {
    label: "Admin Dashboard",
    href: "/author-dashboard",
    icon: LayoutDashboard,
  },
  { label: "My Posts", href: "/admin-dashboard/my-posts", icon: FileText },
];
