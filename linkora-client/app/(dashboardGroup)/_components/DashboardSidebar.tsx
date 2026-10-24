"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PanelsTopLeft } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { sidebarMenuItems } from "../_config/sidebarMenuItems";
import { ISidebarMenu, NavbarProps } from "@/lib/types";

export function DashboardSidebar({ user }: NavbarProps) {
  const pathname = usePathname();
  let navItems: ISidebarMenu[] = [];

  if (user.data?.role === "USER") {
    navItems = sidebarMenuItems.USER;
  } else if (user.data?.role === "ADMIN") {
    navItems = sidebarMenuItems.ADMIN;
  } else if (user.data.role === "AUTHOR") {
    navItems = sidebarMenuItems.AUTHOR;
  }

  return (
    <Sidebar collapsible="offcanvas">
      <SidebarHeader className="border-b border-sidebar-border px-4 py-5">
        <Link
          href="/"
          className="flex items-center gap-3 font-semibold tracking-tight"
        >
          <span className="flex size-9 items-center justify-center rounded-xl bg-sidebar-primary text-sidebar-primary-foreground">
            <PanelsTopLeft aria-hidden="true" />
          </span>
          <span>Linkora</span>
        </Link>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Workspace</SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((link) => {
                const Icon = link.icon;

                const active =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname === link.href ||
                      pathname.startsWith(`${link.href}/`);

                return (
                  <SidebarMenuItem key={link.href}>
                    <SidebarMenuButton
                      asChild
                      isActive={active}
                      tooltip={link.label}
                    >
                      <Link
                        href={link.href}
                        aria-current={active ? "page" : undefined}
                      >
                        <Icon aria-hidden="true" />
                        <span>{link.label}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <div className="rounded-xl border border-sidebar-border bg-sidebar-accent/60 p-4">
          <p className="text-sm font-medium">Need a hand?</p>
          <p className="mt-1 text-xs leading-relaxed text-sidebar-foreground/60">
            Explore the Demon workspace to get started.
          </p>
          <Link
            href="/demon"
            className="mt-3 inline-flex text-xs font-semibold text-sidebar-primary hover:underline"
          >
            Open Demon
          </Link>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
