import React, { useContext, useEffect } from "react";
import Link from "next/link";
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
import {
  Calendar,
  Home,
  Inbox,
  Megaphone,
  Search,
  Settings,
  Wallet2,
} from "lucide-react";
import Image from "next/image";
import Logo from "../../public/logo.png";
import { Button } from "@/components/ui/button";
import { useParams, usePathname } from "next/navigation";
import { useAuthContext } from "../provider";
import ProfileAvatar from "./ProfileAvatar";
import { useRouter } from "next/navigation";
const items = [
  {
    title: "Home",
    url: "/app",
    icon: Home,
  },
  {
    title: "Creative Tools",
    url: "#",
    icon: Inbox,
  },
  {
    title: "My Ags",
    url: "#",
    icon: Megaphone,
  },
  {
    title: "Upgrade",
    url: "#",
    icon: Wallet2,
  },
  {
    title: "Profile",
    url: "#",
    icon: Settings,
  },
];

export function AppSidebar() {
  const path = usePathname();
  const {user} = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    router.replace("/app");
  }, []);
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="p-4 flex gap-3 items-center">
          <Image src={Logo} alt="logo" width={40} height={40} className="" />
          <h2 className=" text-white  text-center text-3xl font-semibold">
            XanderAI
          </h2>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="mt-5">
              {items.map((item, index) => (
                // <SidebarMenuItem key={item.title} className='p-2'>
                //     <SidebarMenuButton asChild className=''>
                <a
                  href={item.url}
                  key={index}
                  className={`p-2 text-base flex gap-2 items-center
                                 hover:bg-gray-100 dark:hover:bg-zinc-800 rounded-lg font-medium
                                 ${
                                   path == item.url &&
                                   "bg-gray-100 dark:bg-zinc-800"
                                 }`}
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.title}</span>
                </a>
                //     </SidebarMenuButton>
                // </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        {!user ? (
          <Link href={"/login"} className="w-full inline-block px-3">
            <Button className="my-3 w-full   flex items-center px-4 py-2 font-medium  sm:border-s bg-[#6c53c3]  justify-center   text-white border-[#6c53c3] border rounded-md ">
              Sign In{" "}
            </Button>
          </Link>
        ) : (
          <div className="flex justify-between items-center px-3 my-3 py-2 bg-zinc-800  rounded-xl">
            <h2 className="text-sm">Profile</h2>
            <ProfileAvatar size="small" />
          </div>
        )}
      </SidebarFooter>
    </Sidebar>
  );
}
