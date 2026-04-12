"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { UI } from "@/Constants/UIText";
import { cn } from "@/lib/utils";

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, duration: 0.45, ease: "easeOut" },
    }),
};

export function PricingSection() {
    const p = UI.pricing;

    return (
        <SectionWrapper id="pricing">
            {/* Header */}
            <div className="mb-14 text-center">
                <Badge variant="secondary" className="mb-4 px-3 py-1 text-xs font-medium">
                    {p.badge}
                </Badge>
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                    {p.title}{" "}
                    <span className="text-primary">{p.titleAccent}</span>
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground">
                    {p.subtitle}
                </p>
            </div>

            {/* Pricing Cards */}
            <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-3">
                {p.plans.map((plan, i) => (
                    <motion.div
                        key={plan.name}
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        custom={i}
                    >
                        <Card
                            className={cn(
                                "relative flex h-full flex-col border-border/60",
                                plan.popular && "border-primary/50 ring-1 ring-primary/20"
                            )}
                        >
                            {plan.popular && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                                    <Badge className="px-3 py-0.5 text-xs">Most Popular</Badge>
                                </div>
                            )}

                            <CardHeader className="pb-2">
                                <CardTitle className="text-lg">{plan.name}</CardTitle>
                                <CardDescription>{plan.description}</CardDescription>
                            </CardHeader>

                            <CardContent className="flex-1">
                                <div className="mb-6 flex items-baseline gap-1">
                                    <span className="text-4xl font-bold tracking-tight text-foreground">
                                        {plan.price}
                                    </span>
                                    <span className="text-sm text-muted-foreground">
                                        {plan.period}
                                    </span>
                                </div>

                                <Separator className="mb-6" />

                                <ul className="space-y-3">
                                    {plan.features.map((feat) => (
                                        <li key={feat} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                                            <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                                            {feat}
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>

                            <CardFooter className="border-none bg-transparent p-4 pt-0">
                                <Button
                                    className="w-full"
                                    variant={plan.popular ? "default" : "outline"}
                                    nativeButton={false}
                                    render={<Link href="/signup" />}
                                >
                                    {plan.cta}
                                </Button>
                            </CardFooter>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
}
