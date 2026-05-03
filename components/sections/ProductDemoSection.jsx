"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { UI } from "@/Constants/UIText";

const DEMO_CONTENT = {
    dashboard: {
        lines: [
            "┌─────────────────────────────────┐",
            "│  Revenue    $45,231  ▲ +20.1%   │",
            "│  Users      18,204  ▲ +8.2%    │",
            "│  Projects   142     ▲ +14      │",
            "├─────────────────────────────────┤",
            "│  ██████████████░░░░  72%        │",
            "│  Monthly Target                 │",
            "└─────────────────────────────────┘",
        ],
    },
    analytics: {
        lines: [
            "  Revenue Trend (6 months)",
            "  ┌──────────────────────────┐",
            "  │          ╭──╮            │",
            "  │     ╭──╮─╯  ╰──╮   ╭──  │",
            "  │ ╭──╮╯  │       ╰──╮╯    │",
            "  │─╯  │   │          │     │",
            "  └──────────────────────────┘",
            "   J   F   M   A   M   J",
        ],
    },
    settings: {
        lines: [
            "  ┌── General Settings ──────────┐",
            "  │                               │",
            "  │  Theme        [Dark]  ✓       │",
            "  │  Language      English        │",
            "  │  Timezone      UTC+0          │",
            "  │  Notifications [On]   ✓       │",
            "  │                               │",
            "  └───────────────────────────────┘",
        ],
    },
};

export function ProductDemoSection() {
    const d = UI.productDemo;

    return (
        <SectionWrapper id="product-demo">
            {/* Header */}
            <div className="mb-14 text-center">
                <Badge variant="secondary" className="mb-4 px-3 py-1 text-xs font-medium">
                    {d.badge}
                </Badge>
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                    {d.title}
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground">
                    {d.subtitle}
                </p>
            </div>

            {/* Tabs Demo */}
            <Card className="mx-auto max-w-3xl overflow-hidden border-border/60">
                <Tabs defaultValue="dashboard">
                    <div className="border-b border-border/60 px-4 pt-3">
                        <TabsList>
                            {d.tabs.map((tab) => (
                                <TabsTrigger key={tab.value} value={tab.value}>
                                    {tab.label}
                                </TabsTrigger>
                            ))}
                        </TabsList>
                    </div>
                    {d.tabs.map((tab) => (
                        <TabsContent key={tab.value} value={tab.value}>
                            <CardContent className="p-0">
                                <pre className="overflow-x-auto p-6 font-mono text-xs leading-relaxed text-muted-foreground sm:text-sm">
                                    {DEMO_CONTENT[tab.value]?.lines.join("\n")}
                                </pre>
                            </CardContent>
                        </TabsContent>
                    ))}
                </Tabs>
            </Card>
        </SectionWrapper>
    );
}
