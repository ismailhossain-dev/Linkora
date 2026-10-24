import { FileText, LayoutDashboard } from "lucide-react";
import { ADMIN_SITEBAR_ITEMS } from "./adminSidebarItems";
import { AUTHOR_SITEBAR_ITEMS } from "./authorSidebarItems";
import { ISidebarMenu } from "@/lib/types";

const USER_SIDEBAR_ITEMS:ISidebarMenu[] = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "My Posts", href: "/my-posts", icon: FileText },
];

export const sidebarMenuItems = {
  USER: USER_SIDEBAR_ITEMS,
  AUTHOR: AUTHOR_SITEBAR_ITEMS,
  ADMIN: ADMIN_SITEBAR_ITEMS,
};
