"use client";

import Link from "next/link";
import {
    LayoutDashboard,
    BarChart3,
    FolderKanban,
    Users,
    Settings,
} from "lucide-react";
import {
    Sidebar,
    SidebarHeader,
    SidebarContent,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
    SidebarFooter,
    SidebarSeparator,
} from "@/components/ui/sidebar";
import { UI } from "@/Constants/UIText";

const ICON_MAP = { LayoutDashboard, BarChart3, FolderKanban, Users, Settings };

export function DashboardSidebar() {
    const d = UI.dashboard;

    return (
        <Sidebar>
            <SidebarHeader className="px-4 py-5">
                <Link href="/" className="text-base font-semibold tracking-tight text-foreground">
                    {d.sidebarTitle}
                </Link>
            </SidebarHeader>

            <SidebarSeparator />

            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Navigation</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {d.sidebarNav.map((item) => {
                                const Icon = ICON_MAP[item.icon];
                                const isActive = item.href === "/dashboard";
                                return (
                                    <SidebarMenuItem key={item.label}>
                                        <SidebarMenuButton isActive={isActive} nativeButton={false} render={<Link href={item.href} />}>
                                            {Icon && <Icon className="size-4" />}
                                            <span>{item.label}</span>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                );
                            })}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>

            <SidebarFooter className="px-4 py-4">
                <p className="text-xs text-muted-foreground">{UI.footer.copyright}</p>
            </SidebarFooter>
        </Sidebar>
    );
}
