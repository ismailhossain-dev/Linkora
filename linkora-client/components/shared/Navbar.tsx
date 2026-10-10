"use client"

import {
  Bell,
  ChevronDown,
  CreditCard,
  Menu,
  LayoutDashboard,
  LogOut,
  Settings,
  User,
} from "lucide-react"

import {
  Avatar,
  AvatarFallback,
} from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const navItems = [
  { label: "Overview", href: "#overview" },
  { label: "Analytics", href: "#analytics" },
  { label: "Projects", href: "#projects" },
  { label: "Team", href: "#team" },
]

// User Response convert typescript
type IUser = {
  success: boolean;
  statusCode: number;
  message: string;
  data: {
    id: string;
    name: string;
    email: string;
    activeStatus: string;
    role: string;
    createdAt: string;
    updatedAt: string;
    profile: {
      id: string;
      profilePhoto: string;
      bio: string | null;
      userId: string;
      createdAt: string;
      updatedAt: string;
    } | null;
  };
};

type NavbarProps = {
  user: IUser;
};

export default function Navbar({ user }: NavbarProps) {
  return (
    <header className="border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <nav
        className="mx-auto grid h-16 max-w-7xl grid-cols-[1fr_auto_1fr] items-center gap-6 px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <a
          href="#"
          className="justify-self-start text-lg font-semibold tracking-tight text-foreground"
        >
          Linkora
        </a>

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
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-2 rounded-full outline-none ring-offset-background transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
              <Avatar size="sm">
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              {/* daynamic name failed */}
              <span className="hidden text-sm font-medium sm:inline">{user.data?.name || "Name"}</span>
              <ChevronDown className="hidden text-muted-foreground sm:block" aria-hidden="true" />
              <span className="sr-only">Open user menu</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuGroup>
                <DropdownMenuLabel>
                 
                  <p className="font-normal text-muted-foreground">
                    {/* Set dynamic email */}
                    {user.data?.email || "Emain"}</p>
                </DropdownMenuLabel>
                <DropdownMenuItem>
                  <User />
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <LayoutDashboard />
                  Dashboard
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <CreditCard />
                  Billing
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Bell />
                  Notifications
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings />
                  Settings
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem variant="destructive">
                <LogOut />
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

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
                    <a href={item.href}>{item.label}</a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </header>
  )
}
