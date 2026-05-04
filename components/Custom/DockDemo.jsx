"use client"

import React from "react"
import Link from "next/link"
import { LayoutDashboard, FileText, Component, Package, Home } from "lucide-react"

import { cn } from "@/lib/utils"
import { Dock, DockIcon } from "@/components/ui/dock"
import { colors } from "@/Constants/Color"
import config from "@/customise.json"

const theme = colors.dark;

const ICON_MAP = {
    Home,
    Package,
    Component,
    FileText,
    LayoutDashboard
}

export function DockDemo() {
    const UI = config.dockNav;
    return (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
            <Dock
                direction="middle"
                className="rounded-full shadow-2xl backdrop-blur-xl border border-white/10"
                style={{ backgroundColor: theme.surface.default + "cc" }} // Add opacity
            >
                {UI.map((item) => {
                    const Icon = ICON_MAP[item.icon] || Home;
                    return (
                    <DockIcon key={item.label} className="group relative">
                        <Link
                            href={item.href}
                            aria-label={item.label}
                            className="flex size-14 items-center justify-center rounded-full transition-colors hover:bg-white/10"
                            style={{ color: theme.text.primary }}
                        >
                            <Icon className="size-6 transition-transform group-hover:scale-110" />
                        </Link>
                        {/* Tooltip emulation without importing external TooltipProvider to keep it clean */}
                        <div className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1.5 opacity-0 group-hover:opacity-100 transition-opacity bg-black text-white text-xs font-medium rounded-md shadow-lg pointer-events-none whitespace-nowrap border border-white/10">
                            {item.label}
                        </div>
                    </DockIcon>
                )})}
            </Dock>
        </div>
    )
}
