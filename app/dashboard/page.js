"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { Sun, Moon, TrendingUp, TrendingDown } from "lucide-react";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
} from "@/components/ui/card";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { UI } from "@/Constants/UIText";

export default function DashboardPage() {
    const { resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);

    const d = UI.dashboard;

    return (
        <div className="flex flex-1 flex-col">
            {/* ── Header ── */}
            <header className="flex h-16 items-center gap-3 border-b border-border/60 px-6">
                <SidebarTrigger />
                <Separator orientation="vertical" className="h-6" />
                <div className="flex-1">
                    <h1 className="text-base font-semibold text-foreground">
                        {d.headerTitle}
                    </h1>
                </div>
                {mounted && (
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
                        aria-label="Toggle theme"
                    >
                        {resolvedTheme === "dark" ? (
                            <Sun className="size-4" />
                        ) : (
                            <Moon className="size-4" />
                        )}
                    </Button>
                )}
                <Avatar className="size-8">
                    <AvatarImage src="https://avatar.vercel.sh/user" alt="User" />
                    <AvatarFallback>U</AvatarFallback>
                </Avatar>
            </header>

            {/* ── Main Content ── */}
            <main className="flex-1 space-y-6 p-6">
                {/* Subtitle */}
                <p className="text-sm text-muted-foreground">{d.headerSubtitle}</p>

                {/* ── Stat Cards ── */}
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {d.stats.map((stat) => (
                        <Card key={stat.label} className="border-border/60">
                            <CardHeader className="pb-2">
                                <CardDescription className="text-xs">{stat.label}</CardDescription>
                                <CardTitle className="text-2xl font-bold">{stat.value}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex items-center gap-1">
                                    {stat.trend === "up" ? (
                                        <TrendingUp className="size-3.5 text-emerald-500" />
                                    ) : (
                                        <TrendingDown className="size-3.5 text-red-500" />
                                    )}
                                    <span
                                        className={`text-xs font-medium ${stat.trend === "up" ? "text-emerald-500" : "text-red-500"
                                            }`}
                                    >
                                        {stat.change}
                                    </span>
                                    <span className="text-xs text-muted-foreground">vs last month</span>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* ── Chart ── */}
                <Card className="border-border/60">
                    <CardHeader>
                        <CardTitle>{d.chartTitle}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="h-72">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={d.chartData}>
                                    <defs>
                                        <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="var(--color-brand-primary, #7C72FF)" stopOpacity={0.3} />
                                            <stop offset="95%" stopColor="var(--color-brand-primary, #7C72FF)" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid
                                        strokeDasharray="3 3"
                                        stroke="var(--color-border-subtle, #334155)"
                                        vertical={false}
                                    />
                                    <XAxis
                                        dataKey="month"
                                        tick={{ fontSize: 12, fill: "var(--color-text-muted, #94A3B8)" }}
                                        axisLine={false}
                                        tickLine={false}
                                    />
                                    <YAxis
                                        tick={{ fontSize: 12, fill: "var(--color-text-muted, #94A3B8)" }}
                                        axisLine={false}
                                        tickLine={false}
                                        tickFormatter={(v) => `$${v / 1000}k`}
                                    />
                                    <Tooltip
                                        contentStyle={{
                                            background: "var(--color-surface-default, #121A2B)",
                                            border: "1px solid var(--color-border-default, #334155)",
                                            borderRadius: "8px",
                                            color: "var(--color-text-primary, #F8FAFC)",
                                            fontSize: "13px",
                                        }}
                                        formatter={(v) => [`$${v.toLocaleString()}`, "Revenue"]}
                                    />
                                    <Area
                                        type="monotone"
                                        dataKey="revenue"
                                        stroke="var(--color-brand-primary, #7C72FF)"
                                        strokeWidth={2}
                                        fill="url(#colorRevenue)"
                                    />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </CardContent>
                </Card>

                {/* ── Recent Transactions ── */}
                <Card className="border-border/60">
                    <CardHeader>
                        <CardTitle>{d.recentTitle}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Name</TableHead>
                                    <TableHead className="hidden sm:table-cell">Email</TableHead>
                                    <TableHead>Amount</TableHead>
                                    <TableHead className="text-right">Status</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {d.recentItems.map((item) => (
                                    <TableRow key={item.email}>
                                        <TableCell className="font-medium">{item.name}</TableCell>
                                        <TableCell className="hidden text-muted-foreground sm:table-cell">
                                            {item.email}
                                        </TableCell>
                                        <TableCell>{item.amount}</TableCell>
                                        <TableCell className="text-right">
                                            <Badge
                                                variant={
                                                    item.status === "Completed"
                                                        ? "default"
                                                        : item.status === "Pending"
                                                            ? "secondary"
                                                            : "outline"
                                                }
                                            >
                                                {item.status}
                                            </Badge>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </main>
        </div>
    );
}
