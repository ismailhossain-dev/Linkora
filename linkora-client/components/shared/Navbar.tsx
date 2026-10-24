"use client";

import {
  Bell,
  ChevronDown,
  CreditCard,
  Menu,
  LayoutDashboard,
  LogOut,
  Settings,
  User,
} from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { logout } from "@/service/logout";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "../ui/button";
import { NavbarProps } from "@/lib/types";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "News", href: "/news" },
  { label: "Premium", href: "/premium" },
  { label: "My Posts", href: "/dashboard/my-posts" },
];


export default function Navbar({ user }: NavbarProps) {
  const router = useRouter();
  // Logout function
  const handleUserMenuAction = async (action: string) => {
    if (action === "logout") {
      await logout();
      toast.success("User Logged Out Successfully!");
      router.push("/login");
    }
  };

  return (
    <header className="border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <nav
        className="mx-auto grid h-16 max-w-7xl grid-cols-[1fr_auto_1fr] items-center gap-6 px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="justify-self-start text-lg font-semibold tracking-tight text-foreground"
        >
          Linkora
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="col-start-3 flex items-center justify-self-end gap-2">
          {user.success ? (
            <div className="flex items-center gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-2 rounded-full outline-none ring-offset-background transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                  <Avatar size="sm">
                    <AvatarFallback>
                      {user.data?.name?.slice(0, 2).toUpperCase() || "JD"}
                    </AvatarFallback>
                  </Avatar>

                  <span className="hidden text-sm font-medium sm:inline">
                    {user.data?.name || "Name"}
                  </span>

                  <ChevronDown
                    className="hidden text-muted-foreground sm:block"
                    aria-hidden="true"
                  />
                  <span className="sr-only">Open user menu</span>
                </DropdownMenuTrigger>

                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuGroup>
                    <DropdownMenuLabel>
                      <p className="font-normal text-muted-foreground">
                        {user.data?.email || "Email"}
                      </p>
                    </DropdownMenuLabel>

                    <DropdownMenuItem asChild>
                      <Link href="/profile">
                        <User />
                        Profile
                      </Link>
                    </DropdownMenuItem>

                    <DropdownMenuItem asChild>
                      <Link href="/dashboard">
                        <LayoutDashboard />
                        Dashboard
                      </Link>
                    </DropdownMenuItem>

                    <DropdownMenuItem asChild>
                      <Link href="/billing">
                        <CreditCard />
                        Billing
                      </Link>
                    </DropdownMenuItem>

                    <DropdownMenuItem asChild>
                      <Link href="/notifications">
                        <Bell />
                        Notifications
                      </Link>
                    </DropdownMenuItem>

                    <DropdownMenuItem asChild>
                      <Link href="/settings">
                        <Settings />
                        Settings
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>

                  <DropdownMenuSeparator />

                  <DropdownMenuItem
                    onClick={async () => {
                      await handleUserMenuAction("logout");
                    }}
                    variant="destructive"
                  >
                    <LogOut />
                    Log out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Mobile Navigation */}
              <DropdownMenu>
                <DropdownMenuTrigger className="flex size-9 items-center justify-center rounded-md text-muted-foreground outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 md:hidden">
                  <Menu aria-hidden="true" />
                  <span className="sr-only">Open navigation menu</span>
                </DropdownMenuTrigger>

                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuGroup>
                    <DropdownMenuLabel>Navigate</DropdownMenuLabel>

                    {navItems.map((item) => (
                      <DropdownMenuItem key={item.href} asChild>
                        <Link href={item.href}>{item.label}</Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          ) : (
            <Link href="/login">
              <Button className="cursor-pointer">Login</Button>
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}
