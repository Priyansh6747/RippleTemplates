"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { UI } from "@/Constants/UIText";
import { cn } from "@/lib/utils";

export function Navbar() {
    const { resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => setMounted(true), []);

    const toggleTheme = () =>
        setTheme(resolvedTheme === "dark" ? "light" : "dark");

    return (
        <header className="fixed top-0 right-0 left-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-lg">
            <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
                {/* ── Logo ── */}
                <Link href="/" className="text-lg font-semibold tracking-tight text-foreground">
                    {UI.siteName}
                </Link>

                {/* ── Desktop Links ── */}
                <div className="hidden items-center gap-8 md:flex">
                    {UI.nav.links.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* ── Desktop Actions ── */}
                <div className="hidden items-center gap-3 md:flex">
                    {mounted && (
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={toggleTheme}
                            aria-label="Toggle theme"
                        >
                            {resolvedTheme === "dark" ? (
                                <Sun className="size-4" />
                            ) : (
                                <Moon className="size-4" />
                            )}
                        </Button>
                    )}
                    <Button variant="ghost" size="sm" nativeButton={false} render={<Link href={UI.nav.loginHref} />}>
                        {UI.nav.login}
                    </Button>
                    <Button size="sm" nativeButton={false} render={<Link href={UI.nav.ctaHref} />}>
                        {UI.nav.cta}
                    </Button>
                </div>

                {/* ── Mobile Toggle ── */}
                <div className="flex items-center gap-2 md:hidden">
                    {mounted && (
                        <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Toggle theme">
                            {resolvedTheme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
                        </Button>
                    )}
                    <Button variant="ghost" size="icon" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
                        {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
                    </Button>
                </div>
            </nav>

            {/* ── Mobile Menu ── */}
            {mobileOpen && (
                <div className="border-t border-border/60 bg-background px-6 pb-6 pt-4 md:hidden">
                    <div className="flex flex-col gap-4">
                        {UI.nav.links.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                onClick={() => setMobileOpen(false)}
                                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <div className="flex flex-col gap-2 pt-2">
                            <Button variant="outline" size="sm" nativeButton={false} render={<Link href={UI.nav.loginHref} />}>
                                {UI.nav.login}
                            </Button>
                            <Button size="sm" nativeButton={false} render={<Link href={UI.nav.ctaHref} />}>
                                {UI.nav.cta}
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
