"use client";

import { motion } from "framer-motion";
import {
    Zap,
    Shield,
    BarChart3,
    Layers,
    Globe,
    Sparkles,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { UI } from "@/Constants/UIText";

const ICON_MAP = { Zap, Shield, BarChart3, Layers, Globe, Sparkles };

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.08, duration: 0.45, ease: "easeOut" },
    }),
};

export function FeaturesSection() {
    const f = UI.features;

    return (
        <SectionWrapper id="features">
            {/* Header */}
            <div className="mb-14 text-center">
                <Badge variant="secondary" className="mb-4 px-3 py-1 text-xs font-medium">
                    {f.badge}
                </Badge>
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                    {f.title}{" "}
                    <span className="text-primary">{f.titleAccent}</span>
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground">
                    {f.subtitle}
                </p>
            </div>

            {/* Grid */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {f.items.map((item, i) => {
                    const Icon = ICON_MAP[item.icon];
                    return (
                        <motion.div
                            key={item.title}
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            custom={i}
                        >
                            <Card className="h-full border-border/60 bg-card transition-colors hover:bg-accent/40">
                                <CardContent className="pt-6">
                                    <div className="mb-4 flex size-10 items-center justify-center rounded-lg bg-primary/10">
                                        {Icon && <Icon className="size-5 text-primary" />}
                                    </div>
                                    <h3 className="mb-2 text-base font-semibold text-foreground">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm leading-relaxed text-muted-foreground">
                                        {item.description}
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    );
                })}
            </div>
        </SectionWrapper>
    );
}
